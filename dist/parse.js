"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parse = void 0;
const index_1 = require("grammar-well/build/index");
const grammar_js_1 = require("./grammar.js");
function Parse(sample) {
    try {
        const response = {};
        const parseStart = performance.now();
        response.result = (0, index_1.Parse)((0, grammar_js_1.default)(), sample, { algorithm: 'earley' });
        response.timing = performance.now() - parseStart;
        return response;
    }
    catch (error) {
        console.log(error);
        return { error: error.toString() };
    }
}
exports.Parse = Parse;
//# sourceMappingURL=parse.js.map