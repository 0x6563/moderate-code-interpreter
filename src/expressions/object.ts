import { ResolveValue } from "../index";
import { Context } from "../shared/context";
import { Control, Value } from "../shared/value";
import { ObjectLiteralExpression } from "../types";

export function ObjectLiteral(context: Context, expression: ObjectLiteralExpression) {
    const result = {};
    for (const prop of expression.properties) {
        if ('type' in prop) {
            if (prop.type == 'spread') {
                const value = ResolveValue(context, prop.value);
                if (value.type == 'control') {
                    return value;
                }
                if (value.kind != 'object') {
                    return Control('error', 'Cannot spread non-object')
                }
                for (const key in value.value) {
                    result[key] = value.value[key];
                }
            }
        } else {
            const value = ResolveValue(context, prop.value);
            if (value.type == 'control') {
                return value;
            }
            result[prop.key] == value.value;
        }
    }
    return Value('object', result);
}