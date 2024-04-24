"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JellyfishContextProvider = exports.JellyfishContext = void 0;
exports.useJellyfishClient = useJellyfishClient;
var _react = _interopRequireWildcard(require("react"));
var _expoModulesCore = require("expo-modules-core");
var _reactNative = require("react-native");
var _peer_notifications = require("./protos/jellyfish/peer_notifications");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const membraneModule = (0, _expoModulesCore.requireNativeModule)('MembraneWebRTC');
const eventEmitter = new _reactNative.NativeEventEmitter(membraneModule ?? _expoModulesCore.NativeModulesProxy.MembraneWebRTC);
const generateMessage = event => {
  return 'WebSocket was closed: ' + [event.message, event.code, event.reason].filter(i => !!i).join(' ');
};
const JellyfishContext = exports.JellyfishContext = /*#__PURE__*/_react.default.createContext(undefined);
const JellyfishContextProvider = props => {
  const [error, setError] = (0, _react.useState)(null);
  const websocket = (0, _react.useRef)(null);
  const sendMediaEvent = ({
    event
  }) => {
    if (websocket.current?.readyState !== WebSocket.OPEN) {
      return;
    }
    const message = _peer_notifications.PeerMessage.encode({
      mediaEvent: {
        data: event
      }
    }).finish();
    websocket.current?.send(message);
  };
  (0, _react.useEffect)(() => {
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
        const message = _peer_notifications.PeerMessage.encode({
          authRequest: {
            token: peerToken
          }
        }).finish();
        websocket.current?.send(message);
      });
      websocket.current?.addEventListener('message', event => {
        const uint8Array = new Uint8Array(event.data);
        try {
          const data = _peer_notifications.PeerMessage.decode(uint8Array);
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
  return /*#__PURE__*/_react.default.createElement(JellyfishContext.Provider, {
    value: value
  }, props.children);
};
exports.JellyfishContextProvider = JellyfishContextProvider;
function useJellyfishClient() {
  const context = _react.default.useContext(JellyfishContext);
  if (context === undefined) {
    throw new Error('useJellyfishClient must be used within a JellyfishContextProvider');
  }
  return context;
}
//# sourceMappingURL=JellyfishClientContext.js.map