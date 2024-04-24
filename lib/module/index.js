import { updateEndpointMetadata, useEndpoints } from '@jellyfish-dev/react-native-membrane-webrtc';
export * from './JellyfishClientContext';
export { useAudioSettings, updateAudioTrackMetadata, useCamera, useMicrophone, useScreencast, updateVideoTrackMetadata, useBandwidthEstimation, useRTCStatistics, changeWebRTCLoggingSeverity, setTargetTrackEncoding, VideoRendererView, VideoPreviewView, VideoQuality, ScreencastQuality, Metadata, CaptureDevice, TrackEncoding, SimulcastConfig, Track, CameraConfig } from '@jellyfish-dev/react-native-membrane-webrtc';
/**
 * This hook provides live updates of room peers.
 * @returns An array of room peers.
 */
export const usePeers = useEndpoints;

/**
 * Function that updates peer's metadata on the server.
 * @param metadata a map `string -> any` containing user's metadata to be sent to the server.
 */
export const updatePeerMetadata = updateEndpointMetadata;
//# sourceMappingURL=index.js.map