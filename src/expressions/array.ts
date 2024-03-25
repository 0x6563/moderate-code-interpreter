import { ResolveValue } from "../runner";
import { Context } from "../shared/context";
import { Value } from "../shared/value";
import { ArrayLiteralExpression, ControlType, ValueTypeArray } from "../types";

export function ArrayLiteral(context: Context, expression: ArrayLiteralExpression): ControlType | ValueTypeArray {
    const result = [];
    for (const prop of expression.items) {
        const value = ResolveValue(context, prop);
        if (value.type == 'control') {
            return value;
        }
        result.push(value);
    }
    return Value('array', result) as ValueTypeArray;
}