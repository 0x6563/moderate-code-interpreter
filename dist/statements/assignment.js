"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
const reference_1 = require("../expressions/reference");
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function Assignment(context, statement) {
    const r = (0, runner_1.ResolveValue)(context, statement.value);
    const path = statement.reference.path;
    if (r.type == 'control') {
        return r;
    }
    if (path.length == 1 && path[0].type == 'word') {
        return context.assign(path[0].value, r);
    }
    else {
        const ref = (0, reference_1.Reference)(context, { path: path.slice(0, -1) });
        if (ref.type == 'control') {
            return ref;
        }
        if (ref.kind != 'array' && ref.kind != 'object') {
            return (0, value_1.Control)('error', `Can not set value on undefined`);
        }
        const key = (0, reference_1.ResolveReferencePathItem)(context, path[path.length - 1]);
        if (typeof key != 'string') {
            return key;
        }
        ref.value[key] = r;
    }
}
exports.Assignment = Assignment;
//# sourceMappingURL=assignment.js.map