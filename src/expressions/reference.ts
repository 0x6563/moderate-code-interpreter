import { ResolveValue } from "../index";
import { ReferenceExpression } from "../types";
import { Control } from "../shared/value";
import { Context } from "../shared/context";


export function Reference(context: Context, { path }: ReferenceExpression) {
    const k = GetKey(context, path[0]);
    if (typeof k != 'string') {
        return Control('error', ``)
    }
    let ref: any = context.get(k);
    if (ref.type == 'control') {
        return ref;
    }
    for (let i = 1; i < path.length; i++) {
        const key = GetKey(context, path[i]);

        if (!ref) {
            return Control('error', `Unable to access ${key} on undefined`);
        }
        if (ref.kind != 'array' && ref.kind != 'object') {
            return Control('error', `Unable to access ${key} on ${ref.kind}`)
        }
        if (!ref) {
            return Control('error', `Unable to retrieve ${key} on undefined`);
        }
        if (typeof key == 'object') {
            return key;
        }
        ref = ref.value[key];
    }
    return ref;
}

function GetKey(context: Context, k: ReferenceExpression['path'][0]) {
    if (k.type == 'word') {
        return k.value;
    }
    const value = ResolveValue(context, k);
    if (value.type == 'control')
        return value;
    if (value.kind != 'string')
        return Control('error', `Not a key ${k}`)
    return value.value;
}
