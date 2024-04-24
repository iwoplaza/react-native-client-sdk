"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protobufPackage = exports.PeerMessage_MediaEvent = exports.PeerMessage_Authenticated = exports.PeerMessage_AuthRequest = exports.PeerMessage = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

const protobufPackage = exports.protobufPackage = 'jellyfish';
function createBasePeerMessage() {
  return {
    authenticated: undefined,
    authRequest: undefined,
    mediaEvent: undefined
  };
}
const PeerMessage = exports.PeerMessage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authenticated !== undefined) {
      PeerMessage_Authenticated.encode(message.authenticated, writer.uint32(10).fork()).ldelim();
    }
    if (message.authRequest !== undefined) {
      PeerMessage_AuthRequest.encode(message.authRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.mediaEvent !== undefined) {
      PeerMessage_MediaEvent.encode(message.mediaEvent, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authenticated = PeerMessage_Authenticated.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.authRequest = PeerMessage_AuthRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.mediaEvent = PeerMessage_MediaEvent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      authenticated: isSet(object.authenticated) ? PeerMessage_Authenticated.fromJSON(object.authenticated) : undefined,
      authRequest: isSet(object.authRequest) ? PeerMessage_AuthRequest.fromJSON(object.authRequest) : undefined,
      mediaEvent: isSet(object.mediaEvent) ? PeerMessage_MediaEvent.fromJSON(object.mediaEvent) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.authenticated !== undefined && (obj.authenticated = message.authenticated ? PeerMessage_Authenticated.toJSON(message.authenticated) : undefined);
    message.authRequest !== undefined && (obj.authRequest = message.authRequest ? PeerMessage_AuthRequest.toJSON(message.authRequest) : undefined);
    message.mediaEvent !== undefined && (obj.mediaEvent = message.mediaEvent ? PeerMessage_MediaEvent.toJSON(message.mediaEvent) : undefined);
    return obj;
  },
  create(base) {
    return PeerMessage.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBasePeerMessage();
    message.authenticated = object.authenticated !== undefined && object.authenticated !== null ? PeerMessage_Authenticated.fromPartial(object.authenticated) : undefined;
    message.authRequest = object.authRequest !== undefined && object.authRequest !== null ? PeerMessage_AuthRequest.fromPartial(object.authRequest) : undefined;
    message.mediaEvent = object.mediaEvent !== undefined && object.mediaEvent !== null ? PeerMessage_MediaEvent.fromPartial(object.mediaEvent) : undefined;
    return message;
  }
};
function createBasePeerMessage_Authenticated() {
  return {};
}
const PeerMessage_Authenticated = exports.PeerMessage_Authenticated = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerMessage_Authenticated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {}
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return PeerMessage_Authenticated.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBasePeerMessage_Authenticated();
    return message;
  }
};
function createBasePeerMessage_AuthRequest() {
  return {
    token: ''
  };
}
const PeerMessage_AuthRequest = exports.PeerMessage_AuthRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.token !== '') {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerMessage_AuthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      token: isSet(object.token) ? String(object.token) : ''
    };
  },
  toJSON(message) {
    const obj = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
  create(base) {
    return PeerMessage_AuthRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBasePeerMessage_AuthRequest();
    message.token = object.token ?? '';
    return message;
  }
};
function createBasePeerMessage_MediaEvent() {
  return {
    data: ''
  };
}
const PeerMessage_MediaEvent = exports.PeerMessage_MediaEvent = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data !== '') {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerMessage_MediaEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      data: isSet(object.data) ? String(object.data) : ''
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },
  create(base) {
    return PeerMessage_MediaEvent.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBasePeerMessage_MediaEvent();
    message.data = object.data ?? '';
    return message;
  }
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=peer_notifications.js.map