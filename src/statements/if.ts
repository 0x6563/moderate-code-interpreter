import { ResolveStatements, ResolveValue } from "../runner.ts";
import { Context } from "../shared/context.ts";
import { Truthy } from "../shared/value.ts";
import type { ControlType, StatementConditional } from "../types.ts";

export function If(context: Context, {  statements }: StatementConditional): ControlType | void {
    // statements = [if, elseif, elseif, else]
    for (const statement of statements) {
        const r = !statement.condition || Truthy(ResolveValue(context, statement.condition))
        if (typeof r == 'object') {
            return r;
        }
        if (r) {
            const nested = context.fork();
            return ResolveStatements(nested, statement.statements);
        }
    }
}