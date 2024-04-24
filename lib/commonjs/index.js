"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  usePeers: true,
  updatePeerMetadata: true,
  useAudioSettings: true,
  updateAudioTrackMetadata: true,
  useCamera: true,
  useMicrophone: true,
  useScreencast: true,
  updateVideoTrackMetadata: true,
  useBandwidthEstimation: true,
  useRTCStatistics: true,
  changeWebRTCLoggingSeverity: true,
  setTargetTrackEncoding: true,
  VideoRendererView: true,
  VideoPreviewView: true,
  VideoQuality: true,
  ScreencastQuality: true,
  Metadata: true,
  CaptureDevice: true,
  TrackEncoding: true,
  SimulcastConfig: true,
  Track: true,
  CameraConfig: true
};
Object.defineProperty(exports, "CameraConfig", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.CameraConfig;
  }
});
Object.defineProperty(exports, "CaptureDevice", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.CaptureDevice;
  }
});
Object.defineProperty(exports, "Metadata", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.Metadata;
  }
});
Object.defineProperty(exports, "ScreencastQuality", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.ScreencastQuality;
  }
});
Object.defineProperty(exports, "SimulcastConfig", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.SimulcastConfig;
  }
});
Object.defineProperty(exports, "Track", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.Track;
  }
});
Object.defineProperty(exports, "TrackEncoding", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.TrackEncoding;
  }
});
Object.defineProperty(exports, "VideoPreviewView", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.VideoPreviewView;
  }
});
Object.defineProperty(exports, "VideoQuality", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.VideoQuality;
  }
});
Object.defineProperty(exports, "VideoRendererView", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.VideoRendererView;
  }
});
Object.defineProperty(exports, "changeWebRTCLoggingSeverity", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.changeWebRTCLoggingSeverity;
  }
});
Object.defineProperty(exports, "setTargetTrackEncoding", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.setTargetTrackEncoding;
  }
});
Object.defineProperty(exports, "updateAudioTrackMetadata", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.updateAudioTrackMetadata;
  }
});
exports.updatePeerMetadata = void 0;
Object.defineProperty(exports, "updateVideoTrackMetadata", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.updateVideoTrackMetadata;
  }
});
Object.defineProperty(exports, "useAudioSettings", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.useAudioSettings;
  }
});
Object.defineProperty(exports, "useBandwidthEstimation", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.useBandwidthEstimation;
  }
});
Object.defineProperty(exports, "useCamera", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.useCamera;
  }
});
Object.defineProperty(exports, "useMicrophone", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.useMicrophone;
  }
});
exports.usePeers = void 0;
Object.defineProperty(exports, "useRTCStatistics", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.useRTCStatistics;
  }
});
Object.defineProperty(exports, "useScreencast", {
  enumerable: true,
  get: function () {
    return _reactNativeMembraneWebrtc.useScreencast;
  }
});
var _reactNativeMembraneWebrtc = require("@jellyfish-dev/react-native-membrane-webrtc");
var _JellyfishClientContext = require("./JellyfishClientContext");
Object.keys(_JellyfishClientContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _JellyfishClientContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _JellyfishClientContext[key];
    }
  });
});
/**
 * This hook provides live updates of room peers.
 * @returns An array of room peers.
 */
const usePeers = exports.usePeers = _reactNativeMembraneWebrtc.useEndpoints;

/**
 * Function that updates peer's metadata on the server.
 * @param metadata a map `string -> any` containing user's metadata to be sent to the server.
 */
const updatePeerMetadata = exports.updatePeerMetadata = _reactNativeMembraneWebrtc.updateEndpointMetadata;
//# sourceMappingURL=index.js.map