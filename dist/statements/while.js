import { ResolveStatements, ResolveValue } from "../runner";
import { Truthy } from "../shared/value";
export function While(context, statement) {
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
    } while (truthy);
}
//# sourceMappingURL=while.js.map