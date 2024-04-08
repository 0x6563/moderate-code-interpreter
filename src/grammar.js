// Generated automatically by Grammar-Well, version unknown 
// https://github.com/0x6563/grammar-well

    export const TYPES = {
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
            start: "MC_Body",
            rules: {
                MC_Body: [
                    { name: "MC_Body", symbols: [ "_", "MC_Statements", "_" ], postprocess: ({data}) => { return { statements: data[1]}; } },
                    { name: "MC_Body", symbols: [ "_", "MC_Exp", "_" ], postprocess: ({data}) => { return { expression: data[1]}; } }
                ],
                MC_Statements: [
                    { name: "MC_Statements", symbols: [ "MC_Statement" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "MC_Statements", symbols: [ "MC_Statements", "_", "MC_Statement" ], postprocess: ({data}) => { return ( data[2].type == 'declare' &&  data[2].kind =='function'? data[0].unshift(data[2]): data[0].push(data[2])) && data[0]; } }
                ],
                MC_Statement: [
                    { name: "MC_Statement", symbols: [ "MC_Assignment" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Statement", symbols: [ "MC_DeclareVar" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Statement", symbols: [ "MC_DeclareFunction" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Statement", symbols: [ "MC_Return" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Statement", symbols: [ "MC_IfBlock" ], postprocess: ({data}) => { return { type: TYPES.Conditional, statements: data[0] }; } },
                    { name: "MC_Statement", symbols: [ "MC_IfBlock", "_", { literal: "else" }, "_", "MC_Block" ], postprocess: ({data}) => { return { type: TYPES.Conditional, statements: data[0].concat([{ condition: null, statements: data[4] }])}; } },
                    { name: "MC_Statement", symbols: [ "MC_ScanBlock" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Statement", symbols: [ "MC_ConditionLoop" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Statement", symbols: [ "MC_LoopBlock" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Statement", symbols: [ { literal: "run" }, "__", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Run, expression: data[2] }; } }
                ],
                MC_Assignment: [
                    { name: "MC_Assignment", symbols: [ "MC_Reference", "_", { literal: "=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: data[4] }; } },
                    { name: "MC_Assignment", symbols: [ { literal: "set" }, "__", "MC_Reference", "_", { literal: "=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[2],  value: data[6] }; } },
                    { name: "MC_Assignment", symbols: [ "MC_Reference", "_", { literal: "+=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "MC_Assignment", symbols: [ "MC_Reference", "_", { literal: "-=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "MC_Assignment", symbols: [ "MC_Reference", "_", { literal: "/=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "MC_Assignment", symbols: [ "MC_Reference", "_", { literal: "*=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } },
                    { name: "MC_Assignment", symbols: [ "MC_Reference", "_", { literal: "%=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }; } }
                ],
                MC_DeclareVar: [
                    { name: "MC_DeclareVar", symbols: [ { literal: "var" }, "__", "MC_Word", "_", { literal: "=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'var', name: data[2], value: data[6] }; } },
                    { name: "MC_DeclareVar", symbols: [ { literal: "const" }, "__", "MC_Word", "_", { literal: "=" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'const', name: data[2], value: data[6] }; } }
                ],
                MC_Return: [
                    { name: "MC_Return", symbols: [ { literal: "return" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Control, kind: "return", value: data[2] }; } }
                ],
                MC_DeclareFunction: [
                    { name: "MC_DeclareFunction", symbols: [ { literal: "function" }, "_", "MC_Word", "_", { literal: "(" }, "_", "MC_FunctionArg_list", "_", { literal: ")" }, "_", "MC_Block" ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'function', name: data[2], args: data[6], statements: data[10] }; } },
                    { name: "MC_DeclareFunction", symbols: [ { literal: "function" }, "_", "MC_Word", "_", { literal: "(" }, "_", { literal: ")" }, "_", "MC_Block" ], postprocess: ({data}) => { return { type: TYPES.Declare, kind: 'function', name: data[2], args: [], statements: data[8] }; } }
                ],
                MC_IfBlock: [
                    { name: "MC_IfBlock", symbols: [ { literal: "if" }, "_", "MC_Exp", "_", "MC_Block" ], postprocess: ({data}) => { return [{ condition: data[2], statements: data[4] }]; } },
                    { name: "MC_IfBlock", symbols: [ "MC_IfBlock", "_", { literal: "else" }, "_", "MC_IfBlock" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                MC_ScanBlock: [
                    { name: "MC_ScanBlock", symbols: [ { literal: "scan" }, "__", "MC_KVInIterator", "_", "MC_Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind: 'scan', ...data[2], statements: data[4] }; } }
                ],
                MC_KVInIterator: [
                    { name: "MC_KVInIterator", symbols: [ "MC_Word", "__", { literal: "in" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { v: data[0], iterable: data[4] }; } },
                    { name: "MC_KVInIterator", symbols: [ "MC_Word", "_", { literal: "," }, "_", "MC_Word", "__", { literal: "in" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { k: data[4], v: data[0], iterable: data[8] }; } }
                ],
                MC_ConditionLoop: [
                    { name: "MC_ConditionLoop", symbols: [ { literal: "while" }, "_", "MC_Exp", "_", "MC_Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: data[2], statements: data[4] }; } },
                    { name: "MC_ConditionLoop", symbols: [ { literal: "until" }, "_", "MC_Exp", "_", "MC_Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: { type: TYPES.Operation, operator: "!", operands: [data[2]] }, statements: data[4] }; } },
                    { name: "MC_ConditionLoop", symbols: [ { literal: "do" }, "_", "MC_Block", "__", { literal: "while" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: data[6], statements: data[2] }; } },
                    { name: "MC_ConditionLoop", symbols: [ { literal: "do" }, "_", "MC_Block", "__", { literal: "until" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'while', condition: { type: TYPES.Operation, operator: "!", operands: [data[6]] }, statements: data[2] }; } }
                ],
                MC_LoopBlock: [
                    { name: "MC_LoopBlock", symbols: [ { literal: "for" }, "_", { literal: "(" }, "_", "MC_DeclareVar", "_", "MC_Exp", "_", { literal: ";" }, "_", "MC_Assignment", "_", { literal: ")" }, "_", "MC_Block" ], postprocess: ({data}) => { return { type: TYPES.Loop, kind:'for', base: data[4], step: data[10], condition: data[6], statements: data[14] }; } }
                ],
                MC_Block: [
                    { name: "MC_Block", symbols: [ { literal: "{" }, "_", "MC_Statements", "_", { literal: "}" } ], postprocess: ({data}) => { return data[2]; } },
                    { name: "MC_Block", symbols: [ { literal: "{" }, "_", { literal: "}" } ], postprocess: ({data}) => { return []; } }
                ],
                MC_Exp_list: [
                    { name: "MC_Exp_list", symbols: [ "MC_Exp" ], postprocess: ({data}) => { return [ data[0] ]; } },
                    { name: "MC_Exp_list", symbols: [ "MC_Exp_list", "_", { literal: "," }, "_", "MC_Exp" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                MC_Exp_ss: [
                    { name: "MC_Exp_ss", symbols: [ "MC_Exp" ], postprocess: ({data}) => { return [ data[0] ]; } },
                    { name: "MC_Exp_ss", symbols: [ "MC_Exp_ss", "_", { literal: ";" }, "_", "MC_Exp" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                MC_Exp: [
                    { name: "MC_Exp", symbols: [ "MC_Query" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Exp", symbols: [ "MC_Lambda" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Exp", symbols: [ "MC_ExpOr" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Exp", symbols: [ "MC_Object" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpOr: [
                    { name: "MC_ExpOr", symbols: [ "MC_ExpOr", "_", { literal: "or" }, "_", "MC_ExpAnd" ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: "any", operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpOr", symbols: [ "MC_ExpAnd" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpAnd: [
                    { name: "MC_ExpAnd", symbols: [ "MC_ExpAnd", "_", { literal: "and" }, "_", "MC_ExpCompare" ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: "all", operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpAnd", symbols: [ "MC_ExpCompare" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpCompare: [
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: "<" }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: ">" }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: "<=" }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: ">=" }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: "!=" }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: "==" }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: "like" }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: "within" }, "_", "MC_Range" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4].low, data[4].high] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpCompare", "_", { literal: "between" }, "_", "MC_Range" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4].low, data[4].high] }; } },
                    { name: "MC_ExpCompare", symbols: [ "MC_ExpConcat" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpConcat: [
                    { name: "MC_ExpConcat", symbols: [ "MC_ExpSum", "_", { literal: ".." }, "_", "MC_ExpConcat" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpConcat", symbols: [ "MC_ExpSum" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpSum: [
                    { name: "MC_ExpSum", symbols: [ "MC_ExpSum", "_", { literal: "+" }, "_", "MC_ExpProduct" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpSum", symbols: [ "MC_ExpSum", "_", { literal: "-" }, "_", "MC_ExpProduct" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpSum", symbols: [ "MC_ExpProduct" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpProduct: [
                    { name: "MC_ExpProduct", symbols: [ "MC_ExpProduct", "_", { literal: "*" }, "_", "MC_ExpUnary" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpProduct", symbols: [ "MC_ExpProduct", "_", { literal: "/" }, "_", "MC_ExpUnary" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpProduct", symbols: [ "MC_ExpProduct", "_", { literal: "%" }, "_", "MC_ExpUnary" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpProduct", symbols: [ "MC_ExpUnary" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpUnary: [
                    { name: "MC_ExpUnary", symbols: [ { literal: "!" }, "_", "MC_ExpPower" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: "!", operands: [data[2]] }; } },
                    { name: "MC_ExpUnary", symbols: [ { literal: "not" }, "_", "MC_ExpPower" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: "!", operands: [data[2]] }; } },
                    { name: "MC_ExpUnary", symbols: [ "MC_ExpPower" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_ExpPower: [
                    { name: "MC_ExpPower", symbols: [ "MC_Atom", "_", { literal: "^" }, "_", "MC_ExpPower" ], postprocess: ({data}) => { return { type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }; } },
                    { name: "MC_ExpPower", symbols: [ "MC_Atom" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_Atom: [
                    { name: "MC_Atom", symbols: [ "MC_Number" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_NegativeNumber" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_String" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_Constant" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_Regex" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_Reference" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_Group" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_FunctionCall" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_Array" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_VariadicLogic" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Atom", symbols: [ "MC_Match" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_Constant: [
                    { name: "MC_Constant", symbols: [ { literal: "null" } ], postprocess: ({data}) => { return { type: TYPES.Constant, value: data[0].value }; } },
                    { name: "MC_Constant", symbols: [ { literal: "false" } ], postprocess: ({data}) => { return { type: TYPES.Constant, value: data[0].value }; } },
                    { name: "MC_Constant", symbols: [ { literal: "true" } ], postprocess: ({data}) => { return { type: TYPES.Constant, value: data[0].value }; } }
                ],
                MC_Reference: [
                    { name: "MC_Reference", symbols: [ "MC_Path" ], postprocess: ({data}) => { return { type: TYPES.Reference, path: data[0] }; } }
                ],
                MC_Path: [
                    { name: "MC_Path", symbols: [ "MC_Word" ], postprocess: ({data}) => { return [{ type: TYPES.Word, value: data[0] }]; } },
                    { name: "MC_Path", symbols: [ "MC_Path", "_", { literal: "." }, "_", "MC_Word" ], postprocess: ({data}) => { return data[0].concat({ type: TYPES.Word, value: data[4]}); } },
                    { name: "MC_Path", symbols: [ "MC_Path", "_", { literal: "[" }, "_", "MC_Exp", "_", { literal: "]" } ], postprocess: ({data}) => { return data[0].concat(data[4]); } },
                    { name: "MC_Path", symbols: [ "MC_Path", "_", { literal: "[" }, "_", { literal: "?" }, "_", { literal: "]" } ], postprocess: ({data}) => { return data[0].concat({ type: TYPES.Wildcard }); } }
                ],
                MC_Word: [
                    { name: "MC_Word", symbols: [ { token: "word" } ], postprocess: ({data}) => { return data[0].value; } }
                ],
                MC_Group: [
                    { name: "MC_Group", symbols: [ { literal: "(" }, "_", "MC_Exp", "_", { literal: ")" } ], postprocess: ({data}) => { return data[2]; } }
                ],
                MC_Number: [
                    { name: "MC_Number", symbols: [ { token: "digits" }, { literal: "." }, { token: "digits" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'number', value: data[0].value  + "." + data[2].value }; } },
                    { name: "MC_Number", symbols: [ { token: "digits" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'number', value: data[0].value }; } }
                ],
                MC_NegativeNumber: [
                    { name: "MC_NegativeNumber", symbols: [ { literal: "-" }, "_", "MC_Number" ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'number', value: '-' +data[2].value }; } }
                ],
                MC_String: [
                    { name: "MC_String", symbols: [ { token: "dquote" }, "MC_StringInner", { token: "dquote" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'string', value: data[1] }; } },
                    { name: "MC_String", symbols: [ { token: "squote" }, "MC_StringInner", { token: "squote" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'string', value: data[1] }; } },
                    { name: "MC_String", symbols: [ { token: "dquote" }, { token: "dquote" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'string', value: '' }; } },
                    { name: "MC_String", symbols: [ { token: "squote" }, { token: "squote" } ], postprocess: ({data}) => { return { type: TYPES.Literal, kind: 'string', value: '' }; } }
                ],
                MC_StringInner: [
                    { name: "MC_StringInner", symbols: [ "MC_StringEscape" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_StringInner", symbols: [ { token: "string" } ], postprocess: ({data}) => { return data[0].value; } },
                    { name: "MC_StringInner", symbols: [ "MC_StringInner", "MC_StringEscape" ], postprocess: ({data}) => { return data[0] + data[1]; } },
                    { name: "MC_StringInner", symbols: [ "MC_StringInner", { token: "string" } ], postprocess: ({data}) => { return data[0] + data[1].value; } }
                ],
                MC_StringEscape: [
                    { name: "MC_StringEscape", symbols: [ { token: "escaped" } ], postprocess: ({data}) => { return JSON.parse('"' +data[0].value + '"'); } },
                    { name: "MC_StringEscape", symbols: [ { token: "quoteEscape" } ], postprocess: ({data}) => { return data[0].value[1]; } }
                ],
                MC_Array: [
                    { name: "MC_Array", symbols: [ { literal: "[" }, "_", { literal: "]" } ], postprocess: ({data}) => { return { type: TYPES.Array, items: [] }; } },
                    { name: "MC_Array", symbols: [ { literal: "[" }, "_", "MC_Exp_list", "_", { literal: "]" } ], postprocess: ({data}) => { return { type: TYPES.Array, items: data[2] }; } }
                ],
                MC_Object: [
                    { name: "MC_Object", symbols: [ { literal: "{" }, "_", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Object, properties: [] }; } },
                    { name: "MC_Object", symbols: [ { literal: "{" }, "_", "MC_Prop_list", "_", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Object, properties: data[2] }; } }
                ],
                MC_Prop_list: [
                    { name: "MC_Prop_list", symbols: [ "MC_Prop" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "MC_Prop_list", symbols: [ "MC_Prop_list", "_", { literal: "," }, "_", "MC_Prop" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                MC_Prop: [
                    { name: "MC_Prop", symbols: [ "MC_PropName", "_", { literal: ":" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { key: data[0], value: data[4] }; } },
                    { name: "MC_Prop", symbols: [ { literal: "..." }, "_", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Spread, value: data[2] }; } },
                    { name: "MC_Prop", symbols: [ "MC_Word" ], postprocess: ({data}) => { return { key: data[0], value: { type: TYPES.Reference, path: data[0] } }; } }
                ],
                MC_Query$RPT01x1$SUBx1: [
                    { name: "MC_Query$RPT01x1$SUBx1", symbols: [ "__", "MC_QFilter" ] }
                ],
                MC_Query$RPT01x1: [
                    { name: "MC_Query$RPT01x1", symbols: [ "MC_Query$RPT01x1$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "MC_Query$RPT01x1", symbols: [ ], postprocess: () => null }
                ],
                MC_Query$RPT01x2$SUBx1: [
                    { name: "MC_Query$RPT01x2$SUBx1", symbols: [ "__", "MC_QCluster" ] }
                ],
                MC_Query$RPT01x2: [
                    { name: "MC_Query$RPT01x2", symbols: [ "MC_Query$RPT01x2$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "MC_Query$RPT01x2", symbols: [ ], postprocess: () => null }
                ],
                MC_Query$RPT01x3$SUBx1: [
                    { name: "MC_Query$RPT01x3$SUBx1", symbols: [ "__", "MC_QSort" ] }
                ],
                MC_Query$RPT01x3: [
                    { name: "MC_Query$RPT01x3", symbols: [ "MC_Query$RPT01x3$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "MC_Query$RPT01x3", symbols: [ ], postprocess: () => null }
                ],
                MC_Query$RPT01x4$SUBx1: [
                    { name: "MC_Query$RPT01x4$SUBx1", symbols: [ "__", "MC_QSlice" ] }
                ],
                MC_Query$RPT01x4: [
                    { name: "MC_Query$RPT01x4", symbols: [ "MC_Query$RPT01x4$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "MC_Query$RPT01x4", symbols: [ ], postprocess: () => null }
                ],
                MC_Query: [
                    { name: "MC_Query", symbols: [ "MC_QQuery", "MC_Query$RPT01x1", "__", "MC_QYield", "MC_Query$RPT01x2", "MC_Query$RPT01x3", "MC_Query$RPT01x4" ], postprocess: ({data}) => { return { type: TYPES.Query,  source: data[0], filter: data[1]?.[1], yield: data[3], cluster: data[4]?.[1], sort: data[5]?.[1],  slice: data[6]?.[1] }; } }
                ],
                MC_QQuery: [
                    { name: "MC_QQuery", symbols: [ { literal: "query" }, "__", "MC_KVInIterator" ], postprocess: ({data}) => { return { kind:data[0].value, iterable: data[2] }; } }
                ],
                MC_QSort$RPT01x1$SUBx1: [
                    { name: "MC_QSort$RPT01x1$SUBx1", symbols: [ "__", { literal: "desc" } ] },
                    { name: "MC_QSort$RPT01x1$SUBx1", symbols: [ { literal: "asc" } ] }
                ],
                MC_QSort$RPT01x1: [
                    { name: "MC_QSort$RPT01x1", symbols: [ "MC_QSort$RPT01x1$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "MC_QSort$RPT01x1", symbols: [ ], postprocess: () => null }
                ],
                MC_QSort: [
                    { name: "MC_QSort", symbols: [ { literal: "sort" }, "__", "MC_Exp", "MC_QSort$RPT01x1" ], postprocess: ({data}) => { return { expression: data[2], direction: data[3]?.[1].value }; } }
                ],
                MC_QFilter: [
                    { name: "MC_QFilter", symbols: [ { literal: "filter" }, "__", "MC_Exp" ], postprocess: ({data}) => { return data[2]; } }
                ],
                MC_QYield: [
                    { name: "MC_QYield", symbols: [ { literal: "list" }, "__", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } },
                    { name: "MC_QYield", symbols: [ { literal: "first" }, "__", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } },
                    { name: "MC_QYield", symbols: [ { literal: "aggregate" }, "_", "MC_Object" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } },
                    { name: "MC_QYield", symbols: [ { literal: "aggregate" }, "__", "MC_Lambda" ], postprocess: ({data}) => { return { type: TYPES.Yield, kind: data[0].value, value: data[2] }; } }
                ],
                MC_QCluster: [
                    { name: "MC_QCluster", symbols: [ { literal: "cluster" }, "__", { literal: "(" }, "_", "MC_Exp_list", "_", { literal: ")" } ], postprocess: ({data}) => { return data[4]; } }
                ],
                MC_QSlice: [
                    { name: "MC_QSlice", symbols: [ { literal: "segment" }, "__", "MC_Range" ], postprocess: ({data}) => { return data[2]; } }
                ],
                MC_Range: [
                    { name: "MC_Range", symbols: [ "MC_Exp", "_", { literal: "to" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { low: data[0], high: data[4] }; } }
                ],
                MC_Alias: [
                    { name: "MC_Alias", symbols: [ "MC_Reference" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_Alias", symbols: [ "MC_Reference", "__", { literal: "as" }, "__", "MC_Word" ], postprocess: ({data}) => { return { ...data[0], alias: data[4] }; } },
                    { name: "MC_Alias", symbols: [ "MC_Reference", "__", "MC_Word" ], postprocess: ({data}) => { return { ...data[0], alias: data[2] }; } }
                ],
                MC_Alias_list: [
                    { name: "MC_Alias_list", symbols: [ "MC_Alias" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "MC_Alias_list", symbols: [ "MC_Alias_list", "_", { literal: "," }, "_", "MC_Alias" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                MC_Lambda: [
                    { name: "MC_Lambda", symbols: [ { literal: "(" }, "_", "MC_FunctionArg_list", "_", { literal: ")" }, "_", { literal: "=>" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Lambda, arguments: data[2], expression: data[8]  }; } },
                    { name: "MC_Lambda", symbols: [ { literal: "(" }, "_", { literal: ")" }, "_", { literal: "=>" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Lambda, arguments: data[2], expression: data[6]  }; } },
                    { name: "MC_Lambda", symbols: [ "MC_Word", "_", { literal: "=>" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { type: TYPES.Lambda, arguments: data[2], expression: data[4]  }; } }
                ],
                MC_FunctionArg: [
                    { name: "MC_FunctionArg", symbols: [ "MC_Word" ], postprocess: ({data}) => { return { name: data[0] }; } },
                    { name: "MC_FunctionArg", symbols: [ "MC_Word", "_", { literal: "=" }, "_", "MC_Exp" ], postprocess: ({data}) => { return { name: data[0], default: data[4] }; } }
                ],
                MC_FunctionArg_list: [
                    { name: "MC_FunctionArg_list", symbols: [ "MC_FunctionArg" ], postprocess: ({data}) => { return [data[0]]; } },
                    { name: "MC_FunctionArg_list", symbols: [ "MC_FunctionArg_list", "_", { literal: "," }, "_", "MC_FunctionArg" ], postprocess: ({data}) => { return data[0].concat(data[4]); } }
                ],
                MC_PropName: [
                    { name: "MC_PropName", symbols: [ "MC_String" ], postprocess: ({data}) => { return data[0]; } },
                    { name: "MC_PropName", symbols: [ "MC_Word" ], postprocess: ({data}) => { return data[0]; } }
                ],
                MC_FunctionCall: [
                    { name: "MC_FunctionCall", symbols: [ "MC_Word", "_", { literal: "(" }, "_", "MC_Exp_list", "_", { literal: ")" } ], postprocess: ({data}) => { return { type: TYPES.Call, name: data[0], args: data[4] }; } },
                    { name: "MC_FunctionCall", symbols: [ "MC_Word", "_", { literal: "(" }, "_", { literal: ")" } ], postprocess: ({data}) => { return { type: TYPES.Call, name: data[0], args: [] }; } }
                ],
                MC_VariadicLogic$RPT01x1$SUBx1: [
                    { name: "MC_VariadicLogic$RPT01x1$SUBx1", symbols: [ { literal: ";" }, "_" ] }
                ],
                MC_VariadicLogic$RPT01x1: [
                    { name: "MC_VariadicLogic$RPT01x1", symbols: [ "MC_VariadicLogic$RPT01x1$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "MC_VariadicLogic$RPT01x1", symbols: [ ], postprocess: () => null }
                ],
                MC_VariadicLogic: [
                    { name: "MC_VariadicLogic", symbols: [ { literal: "any" }, "_", { literal: "{" }, "_", "MC_Exp_ss", "_", "MC_VariadicLogic$RPT01x1", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: data[0].value, operands: data[4] }; } },
                    { name: "MC_VariadicLogic", symbols: [ { literal: "all" }, "_", { literal: "{" }, "_", "MC_Exp_ss", "_", "MC_VariadicLogic$RPT01x2", { literal: "}" } ], postprocess: ({data}) => { return { type: TYPES.Logical, operator: data[0].value, operands: data[4] }; } }
                ],
                MC_VariadicLogic$RPT01x2$SUBx1: [
                    { name: "MC_VariadicLogic$RPT01x2$SUBx1", symbols: [ { literal: ";" }, "_" ] }
                ],
                MC_VariadicLogic$RPT01x2: [
                    { name: "MC_VariadicLogic$RPT01x2", symbols: [ "MC_VariadicLogic$RPT01x2$SUBx1" ], postprocess: ({data}) => data[0] },
                    { name: "MC_VariadicLogic$RPT01x2", symbols: [ ], postprocess: () => null }
                ],
                MC_Match: [
                    { name: "MC_Match", symbols: [ { literal: "match" }, "_", { literal: "{" }, "_", "MC_MatchStatement_list", "_", { literal: "}" } ], postprocess: ({data}) => { return { type:TYPES.Match, statements: data[4] }; } }
                ],
                MC_MatchStatement: [
                    { name: "MC_MatchStatement", symbols: [ "MC_Exp", "_", { literal: ":" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { condition: data[0], value: data[4] }; } },
                    { name: "MC_MatchStatement", symbols: [ { literal: "default" }, "_", { literal: ":" }, "_", "MC_Exp", "_", { literal: ";" } ], postprocess: ({data}) => { return { type: TYPES.Default , value: data[4] }; } }
                ],
                MC_MatchStatement_list: [
                    { name: "MC_MatchStatement_list", symbols: [ "MC_MatchStatement" ], postprocess: ({data}) => { return data[0].type == TYPES.Default ? ({ default: data[0], conditions: [] }) : ({ conditions: [data[0]] }); } },
                    { name: "MC_MatchStatement_list", symbols: [ "MC_MatchStatement_list", "_", "MC_MatchStatement" ], postprocess: ({data}) => { return (data[2].type == TYPES.Default ? data[0].default = data[2] : data[0].conditions.push(data[2])) && data[0]; } }
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
            start: "mc_root",
            states: {
                mc_root: {
                    name: "mc_root",
                    rules: [
                        { import: ["mc_keywords"] },
                        { when: /"/, tag: ["dquote"], highlight: "string", goto: "mc_dqstring" },
                        { when: /'/, tag: ["squote"], highlight: "string", goto: "mc_sqstring" },
                        { when: /\d+/, tag: ["digits"], highlight: "number" },
                        { when: /[_a-zA-Z$][_a-zA-Z$\d]*/, tag: ["word"] },
                        { when: "=>", tag: ["l_arrow"], highlight: "keyword" },
                        { when: "!=", tag: ["l_arrow"], highlight: "keyword" },
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
                        { when: "(", tag: ["l_lparen"], highlight: "delimiter", inset: 1 },
                        { when: ")", tag: ["l_rparen"], pop: 1, highlight: "delimiter" },
                        { when: "{", tag: ["l_lcurly"], highlight: "delimiter", inset: 1 },
                        { when: "}", tag: ["l_rcurly"], pop: 1, highlight: "delimiter" },
                        { when: "[", tag: ["l_lbrack"], highlight: "delimiter", inset: 1 },
                        { when: "]", tag: ["l_rbrack"], pop: 1, highlight: "delimiter" },
                        { when: /\s+/, tag: ["ws"] }
                    ]
                },
                mc_keywords: {
                    name: "mc_keywords",
                    rules: [
                        { when: /\@/, tag: ["keyword"], highlight: "keyword" },
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
                },
                mc_dqstring: {
                    name: "mc_dqstring",
                    rules: [
                        { when: /\\[\/bnrft]/, tag: ["escaped"], highlight: "constant" },
                        { when: /\\"/, tag: ["quoteEscape"] },
                        { when: /\\u[A-Fa-f\d]{4}/, tag: ["escaped"], highlight: "constant" },
                        { when: /\\./, tag: ["badEscape"] },
                        { when: /[^"\\]+/, tag: ["string"], highlight: "string" },
                        { when: "\"", tag: ["dquote"], pop: 1, highlight: "string" }
                    ]
                },
                mc_sqstring: {
                    name: "mc_sqstring",
                    rules: [
                        { when: /\\[\/bnrft]/, tag: ["escaped"] },
                        { when: /\\'/, tag: ["quoteEscape"] },
                        { when: /\\u[A-Fa-f\d]{4}/, tag: ["escaped"] },
                        { when: /\\./, tag: ["badEscape"] },
                        { when: /[^'\\]+/, tag: ["string"], highlight: "string" },
                        { when: "'", tag: ["squote"], pop: 1, highlight: "string" }
                    ]
                }
            }
        }
    }
}

export default GWLanguage;