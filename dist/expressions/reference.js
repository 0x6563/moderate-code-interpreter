import { ResolveValue } from "../runner";
import { Control } from "../shared/value";
export function Reference(context, { path }) {
    const k = ResolveReferencePathItem(context, path[0]);
    if (typeof k != 'string') {
        return Control('error', ``);
    }
    let ref = context.get(k);
    if (ref.type == 'control') {
        return ref;
    }
    for (let i = 1; i < path.length; i++) {
        const key = ResolveReferencePathItem(context, path[i]);
        if (!ref) {
            return Control('error', `Unable to access ${key} on undefined`);
        }
        if (ref.kind != 'array' && ref.kind != 'object') {
            return Control('error', `Unable to access ${key} on ${ref.kind}`);
        }
        if (typeof key == 'object') {
            return key;
        }
        ref = ref.value[key];
    }
    return ref;
}
export function ResolveReferencePathItem(context, k) {
    if (k.type == 'word') {
        return k.value;
    }
    const value = ResolveValue(context, k);
    if (value.type == 'control')
        return value;
    if (value.kind != 'string')
        return Control('error', `Not a key ${k}`);
    return value.value;
}
//# sourceMappingURL=reference.js.map