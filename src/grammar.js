// Generated automatically by Grammar-Well, version unknown 
// https://github.com/0x6563/grammar-well

    const TYPES = {
        Operation: 'operation',
        Default: 'default',
        Logical: 'logical',
        Assignment: 'assignment',
        Declare: 'declare',
        Control: 'control',
        Conditional: 'conditional',
        Loop: 'loop',
        Literal: 'literal',
        Array: 'array',
        Object: 'object',
        Lambda: 'lambda',
        Reference: 'reference',
        Query: 'query',
        Run: 'run',
        Call: 'call',
        Match: 'match',
        Spread: 'spread',
        Cluster: 'cluster',
        Constant: 'constant',
        Wildcard: 'wildcard',
        Yield: 'yield',
        Word: 'word'
    }

function GWLanguage(){
    
    return {
        grammar: {
            start: "Chunk",
            rules: {
                Chunk: [
                    { name: "Chunk", symbols: [ "_", "Statements", "_" ], postprocess: ({data}) => { return { statements: data[1]}; } },
                    { name: "Chunk", symbols: [ "_", "Exp", "_" ], postprocess: ({data}) => { return { expression: data[1]}; } }
                ],
                Statements: [
                    { name: "Statements", symbols: [ "Statement" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "Statements", symbols: [ "Statements", "_", "Statement" ], postprocess: ({data}) => { return ( data[2].type == 'declare' &&  data[2].kind =='function'? data[0].unshift(data[2]): data[0].push(data[2])) && data[0]; } }
                ],
                Statement: [
                    { name: "Statement", symbols: [ "Assignment" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Statement", symbols: [ "DeclareVar" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Statement", symbols: [ "DeclareFunction" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Statement", symbols: [ "Return" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Statement", symbols: [ "IfBlock" ], postprocess: ({data}) => { return { type: TYPES.Conditional, statements: data[0] }; } },
                    { name: "Statement", symbols: [ "IfBlock", "_", { literal: "else" }, "_", "Block" ], postprocess: ({data}) => { return { type: TYPES.Conditional, statements: data[0].concat([{ condition: null, statements: data[4] }])}; } },
                    { name: "Statement", symbols: [ "ScanBlock" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Statement", symbols: [ "ConditionLoop" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Statement", symbols: [ "LoopBlock" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Statement", symbols: [ { literal: "run" }, "__", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Run, expression: data[2] }; } }
                ],
                Assignment: [
                    { name: "Assignment", symbols: [ "Reference", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: data[4] }; } },
                    { name: "Assignment", symbols: [ { literal: "set" }, "__", "Reference", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[2],  value: data[6] }; } },
                    { name: "Assignment", symbols: [ "Reference", "_", { literal: "+=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "Assignment", symbols: [ "Reference", "_", { literal: "-=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "Assignment", symbols: [ "Reference", "_", { literal: "/=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "Assignment", symbols: [ "Reference", "_", { literal: "*=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "Assignment", symbols: [ "Reference", "_", { literal: "%=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } }
                ],
                DeclareVar: [
                    { name: "DeclareVar", symbols: [ { literal: "var" }, "__", "Word", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'var', name: data[2], value: data[6] }; } },
                    { name: "DeclareVar", symbols: [ { literal: "const" }, "__", "Word", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'const', name: data[2], value: data[6] }; } }
                ],
                Return: [
                    { name: "Return", symbols: [ { literal: "return" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Control, kind: "return", value: data[2] }; } }
                ],
                DeclareFunction: [
                    { name: "DeclareFunction", symbols: [ { literal: "function" }, "_", "Word", "_", { literal: "(" }, "_", "FunctionArg_list", "_", { literal: ")" }, "_", "Block" ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'function', name: data[2], args: data[6], statements: data[10] }; } },
                    { name: "DeclareFunction", symbols: [ { literal: "function" }, "_", "Word", "_", { literal: "(" }, "_", { literal: ")" }, "_", "Block" ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'function', name: data[2], args: [], statements: data[8] }; } }
                ],
                IfBlock: [
                    { name: "IfBlock", symbols: [ { literal: "if" }, "_", "Exp", "_", "Block" ], postprocess: ({data}) => { return [{ condition: data[2], statements: data[4] }]; } },
                    { name: "IfBlock", symbols: [ "IfBlock", "_", { literal: "else" }, "_", "IfBlock" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                ScanBlock: [
                    { name: "ScanBlock", symbols: [ { literal: "scan" }, "__", "KVInIterator", "_", "Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind: 'scan', ...data[2], statements: data[4] }; } }
                ],
                KVInIterator: [
                    { name: "KVInIterator", symbols: [ "Word", "__", { literal: "in" }, "_", "Exp" ], postprocess: ({data}) => { return { v: data[0], iterable: data[4] }; } },
                    { name: "KVInIterator", symbols: [ "Word", "_", { literal: "," }, "_", "Word", "__", { literal: "in" }, "_", "Exp" ], postprocess: ({data}) => { return { k: data[4], v: data[0], iterable: data[8] }; } }
                ],
                ConditionLoop: [
                    { name: "ConditionLoop", symbols: [ { literal: "while" }, "_", "Exp", "_", "Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: data[2], statements: data[4] }; } },
                    { name: "ConditionLoop", symbols: [ { literal: "until" }, "_", "Exp", "_", "Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: { type: TYPES.Operation, operator: "!", operands: [data[2]] }, statements: data[4] }; } },
                    { name: "ConditionLoop", symbols: [ { literal: "do" }, "_", "Block", "__", { literal: "while" }, "_", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: data[6], statements: data[2] }; } },
                    { name: "ConditionLoop", symbols: [ { literal: "do" }, "_", "Block", "__", { literal: "until" }, "_", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: { type: TYPES.Operation, operator: "!", operands: [data[6]] }, statements: data[2] }; } }
                ],
                LoopBlock: [
                    { name: "LoopBlock", symbols: [ { literal: "for" }, "_", { literal: "(" }, "_", "DeclareVar", "_", "Exp", "_", { literal: ";" }, "_", "Assignment", "_", { literal: ")" }, "_", "Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'for', base: data[4], step: data[10], condition: data[6], statements: data[14] }; } }
                ],
                Block: [
                    { name: "Block", symbols: [ { literal: "{" }, "_", "Statements", "_", { literal: "}" } ], postprocess: ({data}) => { return data[2]; } },
                    { name: "Block", symbols: [ { literal: "{" }, "_", { literal: "}" } ], postprocess: ({data}) => { return []; } }
                ],
                Exp_list: [
                    { name: "Exp_list", symbols: [ "Exp" ], postprocess: ({data}) => { return [ data[0] ]; } },
                    { name: "Exp_list", symbols: [ "Exp_list", "_", { literal: "," }, "_", "Exp" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                Exp_ss: [
                    { name: "Exp_ss", symbols: [ "Exp" ], postprocess: ({data}) => { return [ data[0] ]; } },
                    { name: "Exp_ss", symbols: [ "Exp_ss", "_", { literal: ";" }, "_", "Exp" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                Exp: [
                    { name: "Exp", symbols: [ "Query" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Exp", symbols: [ "Lambda" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Exp", symbols: [ "ExpOr" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Exp", symbols: [ "Object" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpOr: [
                    { name: "ExpOr", symbols: [ "ExpOr", "_", { literal: "or" }, "_", "ExpAnd" ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: "any", operands: [data[0], data[4]] }; } },
                    { name: "ExpOr", symbols: [ "ExpAnd" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpAnd: [
                    { name: "ExpAnd", symbols: [ "ExpAnd", "_", { literal: "and" }, "_", "ExpCompare" ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: "all", operands: [data[0], data[4]] }; } },
                    { name: "ExpAnd", symbols: [ "ExpCompare" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpCompare: [
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: "<" }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: ">" }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: "<=" }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: ">=" }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: "!=" }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: "==" }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: "like" }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: "within" }, "_", "Range" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4].low, data[4].high] }; } },
                    { name: "ExpCompare", symbols: [ "ExpCompare", "_", { literal: "between" }, "_", "Range" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4].low, data[4].high] }; } },
                    { name: "ExpCompare", symbols: [ "ExpConcat" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpConcat: [
                    { name: "ExpConcat", symbols: [ "ExpSum", "_", { literal: ".." }, "_", "ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpConcat", symbols: [ "ExpSum" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpSum: [
                    { name: "ExpSum", symbols: [ "ExpSum", "_", { literal: "+" }, "_", "ExpProduct" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpSum", symbols: [ "ExpSum", "_", { literal: "-" }, "_", "ExpProduct" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpSum", symbols: [ "ExpProduct" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpProduct: [
                    { name: "ExpProduct", symbols: [ "ExpProduct", "_", { literal: "*" }, "_", "ExpUnary" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpProduct", symbols: [ "ExpProduct", "_", { literal: "/" }, "_", "ExpUnary" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpProduct", symbols: [ "ExpProduct", "_", { literal: "%" }, "_", "ExpUnary" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpProduct", symbols: [ "ExpUnary" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpUnary: [
                    { name: "ExpUnary", symbols: [ { literal: "!" }, "_", "ExpPower" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: "!", operands: [data[2]] }; } },
                    { name: "ExpUnary", symbols: [ { literal: "not" }, "_", "ExpPower" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: "!", operands: [data[2]] }; } },
                    { name: "ExpUnary", symbols: [ "ExpPower" ], postprocess: ({data}) => { return data[0]; } }
                ],
                ExpPower: [
                    { name: "ExpPower", symbols: [ "Atom", "_", { literal: "^" }, "_", "ExpPower" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "ExpPower", symbols: [ "Atom" ], postprocess: ({data}) => { return data[0]; } }
                ],
                Atom: [
                    { name: "Atom", symbols: [ "Number" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "NegativeNumber" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "String" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "Constant" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "Regex" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "Reference" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "Group" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "FunctionCall" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "Array" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "VariadicLogic" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Atom", symbols: [ "Match" ], postprocess: ({data}) => { return data[0]; } }
                ],
                Constant: [
                    { name: "Constant", symbols: [ { literal: "null" } ], postprocess: ({data}) => { return { type: TYPES.Constant, value: data[0].value }; } },
                    { name: "Constant", symbols: [ { literal: "false" } ], postprocess: ({data}) => { return { type: TYPES.Constant, value: data[0].value }; } },
                    { name: "Constant", symbols: [ { literal: "true" } ], postprocess: ({data}) => { return { type: TYPES.Constant, value: data[0].value }; } }
                ],
                Reference: [
                    { name: "Reference", symbols: [ "Path" ], postprocess: ({data}) => { return { type: TYPES.Reference, path: data[0] }; } }
                ],
                Path: [
                    { name: "Path", symbols: [ "Word" ], postprocess: ({data}) => { return [{ type: TYPES.Word, value: data[0] }]; } },
                    { name: "Path", symbols: [ "Path", "_", { literal: "." }, "_", "Word" ], postprocess: ({data}) => { return data[0].concat({ type: TYPES.Word, value: data[4]}); } },
                    { name: "Path", symbols: [ "Path", "_", { literal: "[" }, "_", "Exp", "_", { literal: "]" } ], postprocess: ({data}) => { return data[0].concat(data[4]); } },
                    { name: "Path", symbols: [ "Path", "_", { literal: "[" }, "_", { literal: "?" }, "_", { literal: "]" } ], postprocess: ({data}) => { return data[0].concat({ type: TYPES.Wildcard }); } }
                ],
                Word: [
                    { name: "Word", symbols: [ { token: "word" } ], postprocess: ({data}) => { return data[0].value; } }
                ],
                Group: [
                    { name: "Group", symbols: [ { literal: "(" }, "_", "Exp", "_", { literal: ")" } ], postprocess: ({data}) => { return data[2]; } }
                ],
                Number: [
                    { name: "Number", symbols: [ { token: "digits" }, { literal: "." }, { token: "digits" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'number', value: data[0].value  + "." + data[2].value }; } },
                    { name: "Number", symbols: [ { token: "digits" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'number', value: data[0].value }; } }
                ],
                NegativeNumber: [
                    { name: "NegativeNumber", symbols: [ { literal: "-" }, "_", "Number" ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'number', value: '-' +data[2].value }; } }
                ],
                String: [
                    { name: "String", symbols: [ { token: "string" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'string', value: JSON.parse(data[0].value) }; } }
                ],
                Array: [
                    { name: "Array", symbols: [ { literal: "[" }, "_", { literal: "]" } ], postprocess: ({data}) => { return { type: TYPES.Array, items: [] }; } },
                    { name: "Array", symbols: [ { literal: "[" }, "_", "Exp_list", "_", { literal: "]" } ], postprocess: ({data}) => { return { type: TYPES.Array, items: data[2] }; } }
                ],
                Object: [
                    { name: "Object", symbols: [ { literal: "{" }, "_", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Object, properties: [] }; } },
                    { name: "Object", symbols: [ { literal: "{" }, "_", "Prop_list", "_", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Object, properties: data[2] }; } }
                ],
                Prop_list: [
                    { name: "Prop_list", symbols: [ "Prop" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "Prop_list", symbols: [ "Prop_list", "_", { literal: "," }, "_", "Prop" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                Prop: [
                    { name: "Prop", symbols: [ "PropName", "_", { literal: ":" }, "_", "Exp" ], postprocess: ({data}) => { return { key: data[0], value: data[4] }; } },
                    { name: "Prop", symbols: [ { literal: "..." }, "_", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Spread, value: data[2] }; } },
                    { name: "Prop", symbols: [ "Word" ], postprocess: ({data}) => { return { key: data[0], value: { type: TYPES.Reference, path: data[0] } }; } }
                ],
                Query$RPT01x1$SUBx1: [
                    { name: "Query$RPT01x1$SUBx1", symbols: [ "__", "QFilter" ] }
                ],
                Query$RPT01x1: [
                    { name: "Query$RPT01x1", symbols: [ "Query$RPT01x1$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "Query$RPT01x1", symbols: [ ], postprocess: () => null }
                ],
                Query$RPT01x2$SUBx1: [
                    { name: "Query$RPT01x2$SUBx1", symbols: [ "__", "QCluster" ] }
                ],
                Query$RPT01x2: [
                    { name: "Query$RPT01x2", symbols: [ "Query$RPT01x2$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "Query$RPT01x2", symbols: [ ], postprocess: () => null }
                ],
                Query$RPT01x3$SUBx1: [
                    { name: "Query$RPT01x3$SUBx1", symbols: [ "__", "QSort" ] }
                ],
                Query$RPT01x3: [
                    { name: "Query$RPT01x3", symbols: [ "Query$RPT01x3$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "Query$RPT01x3", symbols: [ ], postprocess: () => null }
                ],
                Query$RPT01x4$SUBx1: [
                    { name: "Query$RPT01x4$SUBx1", symbols: [ "__", "QSlice" ] }
                ],
                Query$RPT01x4: [
                    { name: "Query$RPT01x4", symbols: [ "Query$RPT01x4$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "Query$RPT01x4", symbols: [ ], postprocess: () => null }
                ],
                Query: [
                    { name: "Query", symbols: [ "QQuery", "Query$RPT01x1", "__", "QYield", "Query$RPT01x2", "Query$RPT01x3", "Query$RPT01x4" ], postprocess: ({data}) => { return { type: TYPES.Query,  source: data[0], filter: data[1]?.[1], yield: data[3], cluster: data[4]?.[1], sort: data[5]?.[1],  slice: data[6]?.[1] }; } }
                ],
                QQuery: [
                    { name: "QQuery", symbols: [ { literal: "query" }, "__", "KVInIterator" ], postprocess: ({data}) => { return { kind:data[0].value, iterable: data[2] }; } }
                ],
                QSort$RPT01x1$SUBx1: [
                    { name: "QSort$RPT01x1$SUBx1", symbols: [ "__", { literal: "desc" } ] },
                    { name: "QSort$RPT01x1$SUBx1", symbols: [ { literal: "asc" } ] }
                ],
                QSort$RPT01x1: [
                    { name: "QSort$RPT01x1", symbols: [ "QSort$RPT01x1$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "QSort$RPT01x1", symbols: [ ], postprocess: () => null }
                ],
                QSort: [
                    { name: "QSort", symbols: [ { literal: "sort" }, "__", "Exp", "QSort$RPT01x1" ], postprocess: ({data}) => { return { expression: data[2], direction: data[3]?.[1].value }; } }
                ],
                QFilter: [
                    { name: "QFilter", symbols: [ { literal: "filter" }, "__", "Exp" ], postprocess: ({data}) => { return data[2]; } }
                ],
                QYield: [
                    { name: "QYield", symbols: [ { literal: "list" }, "__", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } },
                    { name: "QYield", symbols: [ { literal: "first" }, "__", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } },
                    { name: "QYield", symbols: [ { literal: "aggregate" }, "_", "Object" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } },
                    { name: "QYield", symbols: [ { literal: "aggregate" }, "__", "Lambda" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } }
                ],
                QCluster: [
                    { name: "QCluster", symbols: [ { literal: "cluster" }, "__", { literal: "(" }, "_", "Exp_list", "_", { literal: ")" } ], postprocess: ({data}) => { return data[4]; } }
                ],
                QSlice: [
                    { name: "QSlice", symbols: [ { literal: "segment" }, "__", "Range" ], postprocess: ({data}) => { return data[2]; } }
                ],
                Range: [
                    { name: "Range", symbols: [ "Exp", "_", { literal: "to" }, "_", "Exp" ], postprocess: ({data}) => { return { low: data[0], high: data[4] }; } }
                ],
                Alias: [
                    { name: "Alias", symbols: [ "Reference" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "Alias", symbols: [ "Reference", "__", { literal: "as" }, "__", "Word" ], postprocess: ({data}) => { return { ...data[0], alias: data[4] }; } },
                    { name: "Alias", symbols: [ "Reference", "__", "Word" ], postprocess: ({data}) => { return { ...data[0], alias: data[2] }; } }
                ],
                Alias_list: [
                    { name: "Alias_list", symbols: [ "Alias" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "Alias_list", symbols: [ "Alias_list", "_", { literal: "," }, "_", "Alias" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                Lambda: [
                    { name: "Lambda", symbols: [ { literal: "(" }, "_", "FunctionArg_list", "_", { literal: ")" }, "_", { literal: "=>" }, "_", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Lambda, arguments: data[2], expression: data[8]  }; } },
                    { name: "Lambda", symbols: [ { literal: "(" }, "_", { literal: ")" }, "_", { literal: "=>" }, "_", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Lambda, arguments: data[2], expression: data[6]  }; } },
                    { name: "Lambda", symbols: [ "Word", "_", { literal: "=>" }, "_", "Exp" ], postprocess: ({data}) => { return { type: TYPES.Lambda, arguments: data[2], expression: data[4]  }; } }
                ],
                FunctionArg: [
                    { name: "FunctionArg", symbols: [ "Word" ], postprocess: ({data}) => { return { name: data[0] }; } },
                    { name: "FunctionArg", symbols: [ "Word", "_", { literal: "=" }, "_", "Exp" ], postprocess: ({data}) => { return { name: data[0], default: data[4] }; } }
                ],
                FunctionArg_list: [
                    { name: "FunctionArg_list", symbols: [ "FunctionArg" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "FunctionArg_list", symbols: [ "FunctionArg_list", "_", { literal: "," }, "_", "FunctionArg" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                PropName: [
                    { name: "PropName", symbols: [ "String" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "PropName", symbols: [ "Word" ], postprocess: ({data}) => { return data[0]; } }
                ],
                FunctionCall: [
                    { name: "FunctionCall", symbols: [ "Word", "_", { literal: "(" }, "_", "Exp_list", "_", { literal: ")" } ], postprocess: ({data}) => { return { type: TYPES.Call, name: data[0], args: data[4] }; } },
                    { name: "FunctionCall", symbols: [ "Word", "_", { literal: "(" }, "_", { literal: ")" } ], postprocess: ({data}) => { return { type: TYPES.Call, name: data[0], args: [] }; } }
                ],
                VariadicLogic$RPT01x1$SUBx1: [
                    { name: "VariadicLogic$RPT01x1$SUBx1", symbols: [ { literal: ";" }, "_" ] }
                ],
                VariadicLogic$RPT01x1: [
                    { name: "VariadicLogic$RPT01x1", symbols: [ "VariadicLogic$RPT01x1$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "VariadicLogic$RPT01x1", symbols: [ ], postprocess: () => null }
                ],
                VariadicLogic: [
                    { name: "VariadicLogic", symbols: [ { literal: "any" }, "_", { literal: "{" }, "_", "Exp_ss", "_", "VariadicLogic$RPT01x1", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: data[0].value, operands: data[4] }; } },
                    { name: "VariadicLogic", symbols: [ { literal: "all" }, "_", { literal: "{" }, "_", "Exp_ss", "_", "VariadicLogic$RPT01x2", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: data[0].value, operands: data[4] }; } }
                ],
                VariadicLogic$RPT01x2$SUBx1: [
                    { name: "VariadicLogic$RPT01x2$SUBx1", symbols: [ { literal: ";" }, "_" ] }
                ],
                VariadicLogic$RPT01x2: [
                    { name: "VariadicLogic$RPT01x2", symbols: [ "VariadicLogic$RPT01x2$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "VariadicLogic$RPT01x2", symbols: [ ], postprocess: () => null }
                ],
                Match: [
                    { name: "Match", symbols: [ { literal: "match" }, "_", { literal: "{" }, "_", "MatchStatement_list", "_", { literal: "}" } ], postprocess: ({data}) => { return { type:TYPES.Match, statements: data[4] }; } }
                ],
                MatchStatement: [
                    { name: "MatchStatement", symbols: [ "Exp", "_", { literal: ":" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { condition: data[0], value: data[4] }; } },
                    { name: "MatchStatement", symbols: [ { literal: "default" }, "_", { literal: ":" }, "_", "Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Default , value: data[4] }; } }
                ],
                MatchStatement_list: [
                    { name: "MatchStatement_list", symbols: [ "MatchStatement" ], postprocess: ({data}) => { return data[0].type == TYPES.Default ? ({ default: data[0], conditions: [] }) : ({ conditions: [data[0]] }); } },
                    { name: "MatchStatement_list", symbols: [ "MatchStatement_list", "_", "MatchStatement" ], postprocess: ({data}) => { return (data[2].type == TYPES.Default ? data[0].default = data[2] : data[0].conditions.push(data[2])) && data[0]; } }
                ],
                _$RPT01x1: [
                    { name: "_$RPT01x1", symbols: [ { token: "ws" } ], postprocess: ({data}) => data[0] },
                    { name: "_$RPT01x1", symbols: [ ], postprocess: () => null }
                ],
                _: [
                    { name: "_", symbols: [ "_$RPT01x1" ], postprocess: ({data}) => { return null; } }
                ],
                __: [
                    { name: "__", symbols: [ { token: "ws" } ], postprocess: ({data}) => { return null; } }
                ]
            }
        },
        lexer: {
            start: "root",
            states: {
                root: {
                    name: "root",
                    rules: [
                        { import: ["keywords"] },
                        { when: /\d+/, tag: ["digits"], highlight: "number" },
                        { when: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/, tag: ["string"], highlight: "string" },
                        { when: /[_a-zA-Z][_a-zA-Z\d]*/, tag: ["word"] },
                        { when: "=>", tag: ["l_arrow"], highlight: "keyword" },
                        { when: "==", tag: ["l_eqeq"], highlight: "keyword" },
                        { when: ">=", tag: ["l_gteq"], highlight: "keyword" },
                        { when: "<=", tag: ["l_lteq"], highlight: "keyword" },
                        { when: "+=", tag: ["l_add"], highlight: "keyword" },
                        { when: "-=", tag: ["l_sub"], highlight: "keyword" },
                        { when: "/=", tag: ["l_div"], highlight: "keyword" },
                        { when: "%=", tag: ["l_mod"], highlight: "keyword" },
                        { when: "*=", tag: ["l_mul"], highlight: "keyword" },
                        { when: "...", tag: ["l_spread"], highlight: "keyword" },
                        { when: "..", tag: ["l_concat"], highlight: "keyword" },
                        { when: "=", tag: ["l_eq"] },
                        { when: ">", tag: ["l_gt"], highlight: "keyword" },
                        { when: "<", tag: ["l_lt"], highlight: "keyword" },
                        { when: "+", tag: ["l_add"], highlight: "keyword" },
                        { when: "-", tag: ["l_sub"], highlight: "keyword" },
                        { when: "/", tag: ["l_div"], highlight: "keyword" },
                        { when: "%", tag: ["l_mod"], highlight: "keyword" },
                        { when: "*", tag: ["l_mul"], highlight: "keyword" },
                        { when: "?", tag: ["l_qmark"], highlight: "keyword" },
                        { when: "^", tag: ["l_exp"], highlight: "keyword" },
                        { when: ";", tag: ["l_semi"], highlight: "keyword" },
                        { when: ":", tag: ["l_col"], highlight: "keyword" },
                        { when: "!", tag: ["l_exc"], highlight: "keyword" },
                        { when: ".", tag: ["l_dot"] },
                        { when: ",", tag: ["l_comma"], highlight: "delimiter" },
                        { when: "(", tag: ["l_lparen"], highlight: "delimiter" },
                        { when: ")", tag: ["l_rparen"], highlight: "delimiter" },
                        { when: "{", tag: ["l_lcurly"], highlight: "delimiter" },
                        { when: "}", tag: ["l_rcurly"], highlight: "delimiter" },
                        { when: "[", tag: ["l_lbrack"], highlight: "delimiter" },
                        { when: "]", tag: ["l_rbrack"], highlight: "delimiter" },
                        { when: /\s+/, tag: ["ws"] }
                    ]
                },
                keywords: {
                    name: "keywords",
                    rules: [
                        { when: /\$/, tag: ["keyword"], highlight: "keyword" },
                        { when: /set(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /var(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /const(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /asc(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /desc(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /function(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /true(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /false(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /null(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /any(?![a-zA-Z])/, tag: ["keyword","word"], highlight: "keyword" },
                        { when: /all(?![a-zA-Z])/, tag: ["keyword","word"], highlight: "keyword" },
                        { when: /within(?![a-zA-Z])/, tag: ["keyword","word"], highlight: "keyword" },
                        { when: /between(?![a-zA-Z])/, tag: ["keyword","word"], highlight: "keyword" },
                        { when: /and(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /or(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /on(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /if(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /match(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /default(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /in(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /else(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /for(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /like(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /not(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /while(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /until(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /to(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /do(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /run(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /return(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /query(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /scan(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /segment(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /filter(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /sort(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /aggregate(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /cluster(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /list(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" },
                        { when: /first(?![a-zA-Z])/, tag: ["keyword"], highlight: "keyword" }
                    ]
                }
            }
        }
    }
}

export default GWLanguage;