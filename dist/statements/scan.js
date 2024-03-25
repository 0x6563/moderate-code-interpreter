"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scan = void 0;
const runner_1 = require("../runner");
const iterable_1 = require("../shared/iterable");
function Scan(context, statement) {
    return (0, iterable_1.IterateIterable)(context, statement, (nested, k) => (0, runner_1.ResolveStatements)(nested, statement.statements));
}
exports.Scan = Scan;
//# sourceMappingURL=scan.js.map