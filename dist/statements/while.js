"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function While(context, statement) {
    let truthy;
    do {
        truthy = !statement.condition || (0, value_1.Truthy)((0, runner_1.ResolveValue)(context, statement.condition));
        if (typeof truthy === 'object')
            return truthy;
        if (truthy) {
            const body = (0, runner_1.ResolveStatements)(context.fork(), statement.statements);
            if (body) {
                if (body.kind === 'break') {
                    return;
                }
                return body;
            }
        }
    } while (truthy);
}
exports.While = While;
//# sourceMappingURL=while.js.map