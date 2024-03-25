import { Parse as GWParser } from 'grammar-well/build/index';
import grammar from './grammar.js';
export function Parse(sample: string) {
    try {
        const response: any = {};
        const parseStart = performance.now();
        response.result = GWParser(grammar(), sample, { algorithm: 'earley' });
        response.timing = performance.now() - parseStart;
        return response;

    } catch (error) {
        console.log(error)
        return { error: error.toString() };
    }
}
