import { Parse as GWParser } from 'grammar-well/parse';
import grammar from './grammar.js';
export function Parse(sample: string) {
    return GWParser(new grammar(), sample, { algorithm: 'earley' }, 'first');
}
