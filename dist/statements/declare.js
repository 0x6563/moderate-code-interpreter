"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declare = void 0;
const runner_1 = require("../runner");
function Declare(context, statement) {
    if (statement.kind === 'function') {
        return context.declare('const', statement.name, { type: 'value', kind: 'function', value: { context, args: statement.args, statements: statement.statements } });
    }
    const r = (0, runner_1.ResolveValue)(context, statement.value);
    if (r.type == 'control')
        return r;
    return context.declare(statement.kind, statement.name, r);
}
exports.Declare = Declare;
//# sourceMappingURL=declare.js.map