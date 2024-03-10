import { ResolveValue } from "../index";
import { Context } from "../shared/context";
import { StatementAssignment } from "../types";

export function Assignment(context: Context, statement: StatementAssignment) {
    const r = ResolveValue(context, statement.value);
    if (r.type == 'control') {
        return r;
    }
    return context.assign(statement.name, r)
}