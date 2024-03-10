import { ResolveValue } from "../index";
import { Context } from "../shared/context";
import { Control, Wrap } from "../shared/value";
import { ControlType, ObjectLiteralExpression, ValueTypeObject } from "../types";

export function ObjectLiteral(context: Context, expression: ObjectLiteralExpression): ValueTypeObject | ControlType {
    const result: ValueTypeObject['value'] = {};
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
            result[prop.key] = value;
        }
    }
    return Wrap('value', 'object', result) as ValueTypeObject;
}