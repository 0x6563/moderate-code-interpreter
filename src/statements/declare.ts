import { ResolveValue } from "../runner";
import { Context } from "../shared/context";
import { StatementDeclareConstant, StatementDeclareFunction, StatementDeclareVariable } from "../types";

export function Declare(context: Context, statement: StatementDeclareVariable | StatementDeclareConstant | StatementDeclareFunction) {
    if (statement.kind === 'function') {
        return context.declare('const', statement.name, { type: 'value', kind: 'function', value: { context, args: statement.args, statements: statement.statements } })
    }
    const r = ResolveValue(context, statement.value);
    if (r.type == 'control')
        return r;
    return context.declare(statement.kind, statement.name, r);
}