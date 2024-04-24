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
    if (websocket.current?.readyState !== WebSocket.OPEN) {
      return;
    }
    const message = PeerMessage.encode({
      mediaEvent: {
        data: event
      }
    }).finish();
    websocket.current?.send(message);
  };
  useEffect(() => {
    const eventListener = eventEmitter.addListener('SendMediaEvent', sendMediaEvent);
    return () => eventListener.remove();
  }, []);
  const connect = async (url, peerToken) => {
    setError(null);
    websocket.current = new WebSocket(url);
    const processIncomingMessages = new Promise((resolve, reject) => {
      websocket.current?.addEventListener('close', event => {
        if (event.code !== 1000 || event.isTrusted === false) {
          setError(generateMessage(event));
          reject(new Error(generateMessage(event)));
        }
      });
      websocket.current?.addEventListener('open', () => {
        const message = PeerMessage.encode({
          authRequest: {
            token: peerToken
          }
        }).finish();
        websocket.current?.send(message);
      });
      websocket.current?.addEventListener('message', event => {
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
    setError(null);
    membraneModule.disconnect();
    websocket.current?.close();
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