import { ResolveValue } from "../index";
import { Context } from "../shared/context";
import { Control, Value } from "../shared/value";
import { ArrayLiteralExpression } from "../types";

export function ArrayLiteral(context: Context, expression: ArrayLiteralExpression) {
    const result = [];
    for (const prop of expression.items) {
        const value = ResolveValue(context, prop);
        if (value.type == 'control') {
            return value;
        }
        result.push(value.value);
    }
    return Value('array', result);
}