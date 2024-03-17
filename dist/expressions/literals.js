import { Value } from "../shared/value";
export const Literals = {
    "number": (string) => Value('number', parseFloat(string)),
    "boolean": (string) => Value('boolean', string === "true"),
    "string": (string) => Value('string', string),
    "null": (_string) => Value('null', null),
};
//# sourceMappingURL=literals.js.map