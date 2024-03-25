import { ResolveStatements, ResolveValue } from "../runner";
import { Truthy } from "../shared/value";
export function If(context, { statements }) {
    for (const statement of statements) {
        const r = !statement.condition || Truthy(ResolveValue(context, statement.condition));
        if (typeof r == 'object') {
            return r;
        }
        if (r) {
            const nested = context.fork();
            return ResolveStatements(nested, statement.statements);
        }
    }
}
//# sourceMappingURL=if.js.map