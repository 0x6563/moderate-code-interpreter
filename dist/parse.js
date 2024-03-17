import { Parse } from 'grammar-well/build/index';
import grammar from './grammar.js';
export function ParseSample(sample) {
    try {
        const response = {};
        const parseStart = performance.now();
        response.result = Parse(grammar(), sample, { algorithm: 'earley' });
        response.timing = performance.now() - parseStart;
        return response;
    }
    catch (error) {
        console.log(error);
        return { error: error.toString() };
    }
}
//# sourceMappingURL=parse.js.map