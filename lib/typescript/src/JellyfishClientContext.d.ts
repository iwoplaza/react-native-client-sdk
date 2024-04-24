import React from 'react';
import { Metadata } from '@jellyfish-dev/react-native-client-sdk';
export declare const JellyfishContext: React.Context<{
    /**
     * Connects to the server using the websocket connection.
     * If jellyfish server is in local network, on iOS devices make sure to grant local network permission before
     * calling this function. Otherwise, the function will fail unless the user grants that permission.
     * @param url - websocket url
     * @param peerToken - token used to authenticate when joining the room
     */
    connect: (url: string, peerToken: string) => Promise<void>;
    /**
     * Tries to join the room. If user is accepted then onJoinSuccess will be called.
     * In other case onJoinError is invoked.
     * @param peerMetadata - Any information that other peers will receive in onPeerJoined
     * after accepting this peer.
     */
    join: (peerMetadata: Metadata) => Promise<void>;
    /**
     * Disconnect from the room, and close the websocket connection. Tries to leave the room gracefully, but if it fails,
     * it will close the websocket anyway.
     */
    cleanUp: () => void;
    /**
     * Leaves the room. This function should be called when user leaves the room in a clean way e.g. by clicking a
     * dedicated, custom button `disconnect`. As a result there will be generated one more media event that should be sent
     * to the RTC Engine. Thanks to it each other peer will be notified that peer left in MessageEvents.onPeerLeft.
     */
    leave: () => void;
    error: string | null;
} | undefined>;
declare const JellyfishContextProvider: (props: any) => React.JSX.Element;
declare function useJellyfishClient(): {
    /**
     * Connects to the server using the websocket connection.
     * If jellyfish server is in local network, on iOS devices make sure to grant local network permission before
     * calling this function. Otherwise, the function will fail unless the user grants that permission.
     * @param url - websocket url
     * @param peerToken - token used to authenticate when joining the room
     */
    connect: (url: string, peerToken: string) => Promise<void>;
    /**
     * Tries to join the room. If user is accepted then onJoinSuccess will be called.
     * In other case onJoinError is invoked.
     * @param peerMetadata - Any information that other peers will receive in onPeerJoined
     * after accepting this peer.
     */
    join: (peerMetadata: Metadata) => Promise<void>;
    /**
     * Disconnect from the room, and close the websocket connection. Tries to leave the room gracefully, but if it fails,
     * it will close the websocket anyway.
     */
    cleanUp: () => void;
    /**
     * Leaves the room. This function should be called when user leaves the room in a clean way e.g. by clicking a
     * dedicated, custom button `disconnect`. As a result there will be generated one more media event that should be sent
     * to the RTC Engine. Thanks to it each other peer will be notified that peer left in MessageEvents.onPeerLeft.
     */
    leave: () => void;
    error: string | null;
};
export { JellyfishContextProvider, useJellyfishClient };
//# sourceMappingURL=JellyfishClientContext.d.ts.map