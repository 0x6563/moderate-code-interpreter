import { ResolveStatements } from "../index";
import { IterateIterable } from "../shared/iterable";
export function Scan(context, statement) {
    return IterateIterable(context, statement, (nested, k) => ResolveStatements(nested, statement.statements));
}
//# sourceMappingURL=scan.js.map