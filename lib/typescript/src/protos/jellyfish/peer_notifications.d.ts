import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "jellyfish";
export interface PeerMessage {
    authenticated?: PeerMessage_Authenticated | undefined;
    authRequest?: PeerMessage_AuthRequest | undefined;
    mediaEvent?: PeerMessage_MediaEvent | undefined;
}
export interface PeerMessage_Authenticated {
}
export interface PeerMessage_AuthRequest {
    token: string;
}
export interface PeerMessage_MediaEvent {
    data: string;
}
export declare const PeerMessage: {
    encode(message: PeerMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerMessage;
    fromJSON(object: any): PeerMessage;
    toJSON(message: PeerMessage): unknown;
    create<I extends {
        authenticated?: {} | undefined;
        authRequest?: {
            token?: string | undefined;
        } | undefined;
        mediaEvent?: {
            data?: string | undefined;
        } | undefined;
    } & {
        authenticated?: ({} & {} & { [K in Exclude<keyof I["authenticated"], never>]: never; }) | undefined;
        authRequest?: ({
            token?: string | undefined;
        } & {
            token?: string | undefined;
        } & { [K_1 in Exclude<keyof I["authRequest"], "token">]: never; }) | undefined;
        mediaEvent?: ({
            data?: string | undefined;
        } & {
            data?: string | undefined;
        } & { [K_2 in Exclude<keyof I["mediaEvent"], "data">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof PeerMessage>]: never; }>(base?: I | undefined): PeerMessage;
    fromPartial<I_1 extends {
        authenticated?: {} | undefined;
        authRequest?: {
            token?: string | undefined;
        } | undefined;
        mediaEvent?: {
            data?: string | undefined;
        } | undefined;
    } & {
        authenticated?: ({} & {} & { [K_4 in Exclude<keyof I_1["authenticated"], never>]: never; }) | undefined;
        authRequest?: ({
            token?: string | undefined;
        } & {
            token?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["authRequest"], "token">]: never; }) | undefined;
        mediaEvent?: ({
            data?: string | undefined;
        } & {
            data?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["mediaEvent"], "data">]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof PeerMessage>]: never; }>(object: I_1): PeerMessage;
};
export declare const PeerMessage_Authenticated: {
    encode(_: PeerMessage_Authenticated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerMessage_Authenticated;
    fromJSON(_: any): PeerMessage_Authenticated;
    toJSON(_: PeerMessage_Authenticated): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): PeerMessage_Authenticated;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): PeerMessage_Authenticated;
};
export declare const PeerMessage_AuthRequest: {
    encode(message: PeerMessage_AuthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerMessage_AuthRequest;
    fromJSON(object: any): PeerMessage_AuthRequest;
    toJSON(message: PeerMessage_AuthRequest): unknown;
    create<I extends {
        token?: string | undefined;
    } & {
        token?: string | undefined;
    } & { [K in Exclude<keyof I, "token">]: never; }>(base?: I | undefined): PeerMessage_AuthRequest;
    fromPartial<I_1 extends {
        token?: string | undefined;
    } & {
        token?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "token">]: never; }>(object: I_1): PeerMessage_AuthRequest;
};
export declare const PeerMessage_MediaEvent: {
    encode(message: PeerMessage_MediaEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerMessage_MediaEvent;
    fromJSON(object: any): PeerMessage_MediaEvent;
    toJSON(message: PeerMessage_MediaEvent): unknown;
    create<I extends {
        data?: string | undefined;
    } & {
        data?: string | undefined;
    } & { [K in Exclude<keyof I, "data">]: never; }>(base?: I | undefined): PeerMessage_MediaEvent;
    fromPartial<I_1 extends {
        data?: string | undefined;
    } & {
        data?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "data">]: never; }>(object: I_1): PeerMessage_MediaEvent;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
//# sourceMappingURL=peer_notifications.d.ts.map