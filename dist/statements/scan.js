import { ResolveStatements } from "../runner.js";
import { Context } from "../shared/context.js";
import { IterateIterable } from "../shared/iterable.js";
export function Scan(context, statement) {
    return IterateIterable(context, statement, (nested, k) => ResolveStatements(nested, statement.statements));
}
//# sourceMappingURL=scan.js.map