import { Parse as GWParser } from 'grammar-well';
import grammar from './grammar.js';
export function Parse(sample: string) {
    return GWParser(grammar(), sample, { algorithm: 'earley' }).results[0];
}
