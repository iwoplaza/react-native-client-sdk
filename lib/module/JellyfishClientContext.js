import React from 'react';
import { requireNativeModule, NativeModulesProxy } from 'expo-modules-core';
import { useEffect, useRef, useState } from 'react';
import { NativeEventEmitter } from 'react-native';
import { PeerMessage } from './protos/jellyfish/peer_notifications';
const membraneModule = requireNativeModule('MembraneWebRTC');
const eventEmitter = new NativeEventEmitter(membraneModule ?? NativeModulesProxy.MembraneWebRTC);
const generateMessage = event => {
  return 'WebSocket was closed: ' + [event.message, event.code, event.reason].filter(i => !!i).join(' ');
};
export const JellyfishContext = /*#__PURE__*/React.createContext(undefined);
const JellyfishContextProvider = props => {
  const [error, setError] = useState(null);
  const websocket = useRef(null);
  const sendMediaEvent = ({
    event
  }) => {
    var _websocket$current, _websocket$current2;
    if (((_websocket$current = websocket.current) === null || _websocket$current === void 0 ? void 0 : _websocket$current.readyState) !== WebSocket.OPEN) {
      return;
    }
    const message = PeerMessage.encode({
      mediaEvent: {
        data: event
      }
    }).finish();
    (_websocket$current2 = websocket.current) === null || _websocket$current2 === void 0 || _websocket$current2.send(message);
  };
  useEffect(() => {
    const eventListener = eventEmitter.addListener('SendMediaEvent', sendMediaEvent);
    return () => eventListener.remove();
  }, []);
  const connect = async (url, peerToken) => {
    setError(null);
    websocket.current = new WebSocket(url);
    const processIncomingMessages = new Promise((resolve, reject) => {
      var _websocket$current3, _websocket$current4, _websocket$current6;
      (_websocket$current3 = websocket.current) === null || _websocket$current3 === void 0 || _websocket$current3.addEventListener('close', event => {
        if (event.code !== 1000 || event.isTrusted === false) {
          setError(generateMessage(event));
          reject(new Error(generateMessage(event)));
        }
      });
      (_websocket$current4 = websocket.current) === null || _websocket$current4 === void 0 || _websocket$current4.addEventListener('open', () => {
        var _websocket$current5;
        const message = PeerMessage.encode({
          authRequest: {
            token: peerToken
          }
        }).finish();
        (_websocket$current5 = websocket.current) === null || _websocket$current5 === void 0 || _websocket$current5.send(message);
      });
      (_websocket$current6 = websocket.current) === null || _websocket$current6 === void 0 || _websocket$current6.addEventListener('message', event => {
        const uint8Array = new Uint8Array(event.data);
        try {
          const data = PeerMessage.decode(uint8Array);
          if (data.authenticated !== undefined) {
            resolve();
          } else if (data.authRequest !== undefined) {
            reject(new Error('Received unexpected control message: authRequest'));
          } else if (data.mediaEvent !== undefined) {
            membraneModule.receiveMediaEvent(data.mediaEvent.data);
          }
        } catch (e) {
          setError(String(e));
        }
      });
    });
    await processIncomingMessages;
    await membraneModule.create();
  };
  const join = async (peerMetadata = {}) => {
    setError(null);
    await membraneModule.connect(peerMetadata);
  };
  const cleanUp = () => {
    var _websocket$current7;
    setError(null);
    membraneModule.disconnect();
    (_websocket$current7 = websocket.current) === null || _websocket$current7 === void 0 || _websocket$current7.close();
    websocket.current = null;
  };
  const leave = () => {
    setError(null);
    membraneModule.disconnect();
  };
  const value = {
    connect,
    join,
    cleanUp,
    leave,
    error
  };
  return /*#__PURE__*/React.createElement(JellyfishContext.Provider, {
    value: value
  }, props.children);
};
function useJellyfishClient() {
  const context = React.useContext(JellyfishContext);
  if (context === undefined) {
    throw new Error('useJellyfishClient must be used within a JellyfishContextProvider');
  }
  return context;
}
export { JellyfishContextProvider, useJellyfishClient };
//# sourceMappingURL=JellyfishClientContext.js.map