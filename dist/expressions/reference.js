"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveReferencePathItem = exports.Reference = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function Reference(context, { path }) {
    const k = ResolveReferencePathItem(context, path[0]);
    if (typeof k != 'string') {
        return (0, value_1.Control)('error', ``);
    }
    let ref = context.get(k);
    if (ref.type == 'control') {
        return ref;
    }
    for (let i = 1; i < path.length; i++) {
        const key = ResolveReferencePathItem(context, path[i]);
        if (!ref) {
            return (0, value_1.Control)('error', `Unable to access ${key} on undefined`);
        }
        if (ref.kind != 'array' && ref.kind != 'object') {
            return (0, value_1.Control)('error', `Unable to access ${key} on ${ref.kind}`);
        }
        if (typeof key == 'object') {
            return key;
        }
        ref = ref.value[key];
    }
    return ref;
}
exports.Reference = Reference;
function ResolveReferencePathItem(context, k) {
    if (k.type == 'word') {
        return k.value;
    }
    const value = (0, runner_1.ResolveValue)(context, k);
    if (value.type == 'control')
        return value;
    if (value.kind != 'string')
        return (0, value_1.Control)('error', `Not a key ${k}`);
    return value.value;
}
exports.ResolveReferencePathItem = ResolveReferencePathItem;
//# sourceMappingURL=reference.js.map