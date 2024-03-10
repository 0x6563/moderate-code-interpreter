import { ResolveValue } from "../index";
import { ReferenceExpression } from "../types";
import { Control, DynamicValue } from "../shared/value";
import { Context } from "../shared/context";


export function Reference(context: Context, { path }: ReferenceExpression) {
    const k = GetKey(context, path[0]);
    let r = context.get(k);
    if(r.type=='control'){
        return r;
    }
    r = r.value;
    for (let i = 1; i < path.length; i++) {
        const key = GetKey(context, path[i]);
        if (!r) {
            return Control('error', `Unable to retrieve ${key} on undefined`);
        }
        r = r[key];
    }
    return DynamicValue(r);
}

function GetKey(context: Context, k: ReferenceExpression['path'][0]) {
    if (k.type == 'word') {
        return k.value;
    }
    const value = ResolveValue(context, k);
    if (value.type == 'control')
        return value;
    return value.value;
}
