"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.For = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function For(context, statement) {
    const nested = context.fork();
    const r = (0, runner_1.ResolveStatement)(nested, statement.base);
    if (r && r.type == 'control') {
        return r;
    }
    let truthy;
    do {
        truthy = !statement.condition || (0, value_1.Truthy)((0, runner_1.ResolveValue)(context, statement.condition));
        if (typeof truthy === 'object')
            return truthy;
        if (truthy) {
            const body = (0, runner_1.ResolveStatements)(nested.fork(), statement.statements);
            if (body) {
                if (body.kind === 'break') {
                    return;
                }
                return body;
            }
            const step = (0, runner_1.ResolveStatement)(nested, statement.step);
            if (step && step.type == 'control') {
                return step;
            }
        }
    } while (truthy);
}
exports.For = For;
//# sourceMappingURL=for.js.map