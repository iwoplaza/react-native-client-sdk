export const protobufPackage: "jellyfish";
export namespace PeerMessage {
    function encode(message: any, writer?: _m0.Writer | _m0.BufferWriter): _m0.Writer | _m0.BufferWriter;
    function decode(input: any, length: any): {
        authenticated: undefined;
        authRequest: undefined;
        mediaEvent: undefined;
    };
    function fromJSON(object: any): {
        authenticated: {} | undefined;
        authRequest: {
            token: string;
        } | undefined;
        mediaEvent: {
            data: string;
        } | undefined;
    };
    function toJSON(message: any): {
        authenticated: {} | undefined;
        authRequest: {
            token: any;
        } | undefined;
        mediaEvent: {
            data: any;
        } | undefined;
    };
    function create(base: any): {
        authenticated: undefined;
        authRequest: undefined;
        mediaEvent: undefined;
    };
    function fromPartial(object: any): {
        authenticated: undefined;
        authRequest: undefined;
        mediaEvent: undefined;
    };
}
export namespace PeerMessage_Authenticated {
    function encode(_: any, writer?: _m0.Writer | _m0.BufferWriter): _m0.Writer | _m0.BufferWriter;
    function decode(input: any, length: any): {};
    function fromJSON(_: any): {};
    function toJSON(_: any): {};
    function create(base: any): {};
    function fromPartial(_: any): {};
}
export namespace PeerMessage_AuthRequest {
    function encode(message: any, writer?: _m0.Writer | _m0.BufferWriter): _m0.Writer | _m0.BufferWriter;
    function decode(input: any, length: any): {
        token: string;
    };
    function fromJSON(object: any): {
        token: string;
    };
    function toJSON(message: any): {
        token: any;
    };
    function create(base: any): {
        token: string;
    };
    function fromPartial(object: any): {
        token: string;
    };
}
export namespace PeerMessage_MediaEvent {
    function encode(message: any, writer?: _m0.Writer | _m0.BufferWriter): _m0.Writer | _m0.BufferWriter;
    function decode(input: any, length: any): {
        data: string;
    };
    function fromJSON(object: any): {
        data: string;
    };
    function toJSON(message: any): {
        data: any;
    };
    function create(base: any): {
        data: string;
    };
    function fromPartial(object: any): {
        data: string;
    };
}
import * as _m0 from 'protobufjs/minimal';
//# sourceMappingURL=peer_notifications.d.ts.map