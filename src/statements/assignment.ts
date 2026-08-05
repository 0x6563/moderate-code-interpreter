import { Reference, ResolveReferencePathItem } from "../expressions/reference.ts";
import { ResolveValue } from "../runner.ts";
import { Context } from "../shared/context.ts";
import { Control } from "../shared/value.ts";
import type { ControlType, ReferencePath, StatementAssignment } from "../types.ts";

export function Assignment(context: Context, statement: StatementAssignment): ControlType | void {
    const r = ResolveValue(context, statement.value);
    const path = statement.reference.path;
    if (r.type == 'control') {
        return r;
    }
    if (path.length == 1 && path[0].type == 'word') {
        return context.assign(path[0].value, r)
    } else {
        const ref = Reference(context, { path: path.slice(0, -1) as ReferencePath });
        if (ref.type == 'control') {
            return ref;
        }
        if (ref.kind != 'array' && ref.kind != 'object') {
            return Control('error', `Can not set value on undefined`);
        }
        const key = ResolveReferencePathItem(context, path[path.length - 1])
        if (typeof key != 'string') {
            return key;
        }
        ref.value[key] = r;
    }
}