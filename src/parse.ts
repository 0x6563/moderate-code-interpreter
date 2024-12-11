import { Parse as GWParser } from 'grammar-well/parser';
import grammar from './grammar.js';
export function Parse(sample: string) {
    return GWParser(new grammar(), sample, { algorithm: 'earley' }, 'first');
}
