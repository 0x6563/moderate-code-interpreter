import { Compile, Parse } from 'grammar-well';
import { FileSystemResolver } from 'grammar-well/build/compiler/import-resolver';


export async function ParseSample(grammar, sample) {
    let response;
    try {
        response = await GrammarWellRunner(grammar, sample);
    } catch (error) {
        console.log(error)
        response = { error: error.toString() };
    }
    return response;
}

async function GrammarWellRunner(source, input) {
    function Evalr(source): any {
        const module = { exports: null };
        eval(source);
        return module.exports;
    }
    const response: any = { timings: {} };
    const compileStart = performance.now();
    const compiled = await Compile(source, { exportName: 'grammar', resolverInstance: new FileSystemResolver('') });
    const compileEnd = performance.now();
    response.timings.compile = compileEnd - compileStart;

    response.result = Parse(Evalr(compiled)(), input, { algorithm: 'earley' });
    response.timings.parse = performance.now() - compileEnd;
    return response;
}

