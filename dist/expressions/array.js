import { ResolveValue } from "../runner.js";
import { Context } from "../shared/context.js";
import { ArrayAccessor, Value } from "../shared/value.js";
export function ArrayLiteral(context, expression) {
    const result = [];
    for (const prop of expression.items) {
        const value = ResolveValue(context, prop);
        if (value.type == 'control') {
            return value;
        }
        result.push(value);
    }
    return Value('array', ArrayAccessor(result));
}
//# sourceMappingURL=array.js.map