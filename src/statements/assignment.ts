import { ResolveValue } from "../index";
import { Context } from "../shared/context";
import { ControlType, StatementAssignment } from "../types";

export function Assignment(context: Context, statement: StatementAssignment): ControlType | void {
    const r = ResolveValue(context, statement.value);
    if (r.type == 'control') {
        return r;
    }
    return context.assign(statement.name, r)
}