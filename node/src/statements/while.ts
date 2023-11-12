import { ResolveStatements, ResolveValue } from "../index";
import { Context } from "../shared/context";
import { Truthy } from "../shared/value";
import { StatementWhile } from "../types";

export function While(context: Context, statement: StatementWhile) {
    let truthy;
    do {
        truthy = !statement.condition || Truthy(ResolveValue(context, statement.condition));

        if (typeof truthy === 'object')
            return truthy;

        if (truthy) {
            const body = ResolveStatements(context.fork(), statement.statements);
            if (body) {
                if (body.kind === 'break') {
                    return;
                }
                return body;
            }
        }
    } while (truthy)
}