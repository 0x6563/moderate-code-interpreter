import { Compile, FileSystemResolver, LanguageDefinition } from "grammar-well";
 
export async function CompileGrammar(source: string) {
    return Compile(source, { exportName: 'grammar', template: 'esm', resolverInstance: new FileSystemResolver('') });
}

export async function CompileAndLoad(source: string): Promise<LanguageDefinition> {
    function Evalr(source): any {
        const module = { exports: null };
        eval(source);
        return module.exports;
    }
    return Evalr(await CompileGrammar(source))();
}