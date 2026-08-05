import { ResolveValue } from "../runner.ts";
import { Context } from "../shared/context.ts";
import { ArrayAccessor, Value } from "../shared/value.ts";
import type { ArrayLiteralExpression, ControlType, ValueType, ValueTypeArray } from "../types.ts";

export function ArrayLiteral(context: Context, expression: ArrayLiteralExpression): ControlType | ValueTypeArray {
    const result: ValueType[] = [];
    for (const prop of expression.items) {
        const value = ResolveValue(context, prop);
        if (value.type == 'control') {
            return value;
        }
        result.push(value);
    }
    return Value('array', ArrayAccessor(result)) as ValueTypeArray;
}