"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Literals = void 0;
const value_1 = require("../shared/value");
exports.Literals = {
    "number": (string) => (0, value_1.Value)('number', parseFloat(string)),
    "boolean": (string) => (0, value_1.Value)('boolean', string === "true"),
    "string": (string) => (0, value_1.Value)('string', string),
    "null": (_string) => (0, value_1.Value)('null', null),
};
//# sourceMappingURL=literals.js.map