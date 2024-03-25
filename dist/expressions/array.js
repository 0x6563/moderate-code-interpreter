import { ResolveValue } from "../runner";
import { Value } from "../shared/value";
export function ArrayLiteral(context, expression) {
    const result = [];
    for (const prop of expression.items) {
        const value = ResolveValue(context, prop);
        if (value.type == 'control') {
            return value;
        }
        result.push(value);
    }
    return Value('array', result);
}
//# sourceMappingURL=array.js.map