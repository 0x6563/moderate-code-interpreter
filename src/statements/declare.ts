import { ResolveValue } from "../index";
import { Context } from "../shared/context";
import { StatementDeclare } from "../types";

export function Declare(context: Context, statement: StatementDeclare) {
    const r = ResolveValue(context, statement.value);
    if (r.type == 'control')
        return r;
    return context.declare(statement.name, r);
}