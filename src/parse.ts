import { Parse as GWParser } from 'grammar-well';
import grammar from './grammar.js';
export function Parse(sample: string) {
    return GWParser(new grammar(), sample, { algorithm: 'earley' }, 'first');
}
