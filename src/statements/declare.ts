import { ResolveValue } from "../runner.ts";
import { Context } from "../shared/context.ts";
import type { StatementDeclareConstant, StatementDeclareFunction, StatementDeclareVariable } from "../types.ts";

export function Declare(context: Context, statement: StatementDeclareVariable | StatementDeclareConstant | StatementDeclareFunction) {
    if (statement.kind === 'function') {
        return context.declare('const', statement.name, { type: 'value', kind: 'function', value: { context, args: statement.args, statements: statement.statements } })
    }
    const r = ResolveValue(context, statement.value);
    if (r.type == 'control')
        return r;
    return context.declare(statement.kind, statement.name, r);
}