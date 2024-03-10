import { CompileGrammar } from "./utils/compile";
import { Read, Write } from "./utils/file";

const grammar = Read('./src/grammar.gwell');
const language = await CompileGrammar(grammar);
Write('./src/grammar.js', language);
 