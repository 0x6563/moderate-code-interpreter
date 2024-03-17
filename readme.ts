import { Fullpath, Read, Write } from "./utils/file";
import { readdirSync } from "fs";

const BaseDir = './samples/';


const readme = Read('./readme.md');
const sections = readme.split(/\n# /).filter(v => v);

for (let i = 0; i < sections.length; i++) {
    if (sections[i].toLowerCase().startsWith('samples')) {
        const files = readdirSync(BaseDir);

        sections[i] = 'Samples\n\n' +
            files.map(file => {
                const name = file.split('.')[0].replace(/[- ]+/gmi, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1));
                const content = Read(Fullpath(BaseDir, file));
                const mdcode = '\n```\n';
                return `## ${name}${mdcode}${content}${mdcode}`;

            }).join('\n')
    }

}
Write('./readme.md', sections.join('\n# ').trim())

