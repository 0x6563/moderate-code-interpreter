import { ResolveValue } from "../index";
import { Context } from "../shared/context";
import { Truthy, Value } from "../shared/value";

export const Logical = {
    'all': (context: Context, operands) => {
        for (let i = 0; i < operands.length; i++) {
            const value = ResolveValue(context, operands[i]);
            if (value.type == 'control') {
                return value;
            }
            if (!Truthy(value)) {
                return Value('boolean', false);
            }
        }
        return Value('boolean', true);
    },
    'any': (context: Context, operands) => {
        for (let i = 0; i < operands.length; i++) {
            const value = ResolveValue(context, operands[i]);
            if (value.type == 'control') {
                return value;
            }
            if (Truthy(value)) {
                return Value('boolean', true);
            }
        }
        return Value('boolean', false);
    },
}
