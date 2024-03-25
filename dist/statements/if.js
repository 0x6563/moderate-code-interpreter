"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function If(context, { statements }) {
    for (const statement of statements) {
        const r = !statement.condition || (0, value_1.Truthy)((0, runner_1.ResolveValue)(context, statement.condition));
        if (typeof r == 'object') {
            return r;
        }
        if (r) {
            const nested = context.fork();
            return (0, runner_1.ResolveStatements)(nested, statement.statements);
        }
    }
}
exports.If = If;
//# sourceMappingURL=if.js.map