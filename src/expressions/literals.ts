import { Value } from "../shared/value.ts"

export const Literals = {
    "number": (string: string) => Value('number', parseFloat(string)),
    "boolean": (string: string) => Value('boolean', string === "true"),
    "string": (string: string) => Value('string', string),
    "null": (_string: string) => Value('null', null),
}