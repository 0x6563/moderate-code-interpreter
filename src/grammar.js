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


class grammar {
    artifacts = {
        grammar: {
            rules: {
                Alias: [
                    { name: "Alias", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Reference" ] },
                    { name: "Alias", postprocess: ({data}) => { return ({ ...data[0], alias: data[4] }); }, symbols: [ "Reference", "__", { literal: "as" }, "__", "Word" ] },
                    { name: "Alias", postprocess: ({data}) => { return ({ ...data[0], alias: data[2] }); }, symbols: [ "Reference", "__", "Word" ] }
                ],
                Alias_list: [
                    { name: "Alias_list", postprocess: ({data}) => { return ([data[0]]); }, symbols: [ "Alias" ] },
                    { name: "Alias_list", postprocess: ({data}) => { return (data[0].concat(data[4])); }, symbols: [ "Alias_list", "_", { literal: "," }, "_", "Alias" ] }
                ],
                Array: [
                    { name: "Array", postprocess: ({data}) => { return ({ type: TYPES.Array, items: [] }); }, symbols: [ { literal: "[" }, "_", { literal: "]" } ] },
                    { name: "Array", postprocess: ({data}) => { return ({ type: TYPES.Array, items: data[2] }); }, symbols: [ { literal: "[" }, "_", "Exp_list", "_", { literal: "]" } ] }
                ],
                Assignment: [
                    { name: "Assignment", postprocess: ({data}) => { return ({ type: TYPES.Assignment, reference: data[0],  value: data[4] }); }, symbols: [ "Reference", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "Assignment", postprocess: ({data}) => { return ({ type: TYPES.Assignment, reference: data[2],  value: data[6] }); }, symbols: [ { literal: "set" }, "__", "Reference", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "Assignment", postprocess: ({data}) => { return ({ type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }); }, symbols: [ "Reference", "_", { literal: "+=" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "Assignment", postprocess: ({data}) => { return ({ type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }); }, symbols: [ "Reference", "_", { literal: "-=" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "Assignment", postprocess: ({data}) => { return ({ type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }); }, symbols: [ "Reference", "_", { literal: "/=" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "Assignment", postprocess: ({data}) => { return ({ type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }); }, symbols: [ "Reference", "_", { literal: "*=" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "Assignment", postprocess: ({data}) => { return ({ type: TYPES.Assignment, reference: data[0],  value: { type: TYPES.Operation, operator: data[2].value[0], operands: [data[0], data[4]] } }); }, symbols: [ "Reference", "_", { literal: "%=" }, "_", "Exp", "_", { literal: ";" } ] }
                ],
                Atom: [
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Number" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "NegativeNumber" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "String" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Constant" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Regex" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Reference" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Group" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "FunctionCall" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Array" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "VariadicLogic" ] },
                    { name: "Atom", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Match" ] }
                ],
                Block: [
                    { name: "Block", postprocess: ({data}) => { return (data[2]); }, symbols: [ { literal: "{" }, "_", "Statements", "_", { literal: "}" } ] },
                    { name: "Block", postprocess: ({data}) => { return ([]); }, symbols: [ { literal: "{" }, "_", { literal: "}" } ] }
                ],
                Body: [
                    { name: "Body", postprocess: ({data}) => { return ({ statements: data[1]}); }, symbols: [ "_", "Statements", "_" ] },
                    { name: "Body", postprocess: ({data}) => { return ({ expression: data[1]}); }, symbols: [ "_", "Exp", "_" ] }
                ],
                ConditionLoop: [
                    { name: "ConditionLoop", postprocess: ({data}) => { return ({ type: TYPES.Loop, kind:'while', condition: data[2], statements: data[4] }); }, symbols: [ { literal: "while" }, "_", "Exp", "_", "Block" ] },
                    { name: "ConditionLoop", postprocess: ({data}) => { return ({ type: TYPES.Loop, kind:'while', condition: { type: TYPES.Operation, operator: "!", operands: [data[2]] }, statements: data[4] }); }, symbols: [ { literal: "until" }, "_", "Exp", "_", "Block" ] },
                    { name: "ConditionLoop", postprocess: ({data}) => { return ({ type: TYPES.Loop, kind:'while', condition: data[6], statements: data[2] }); }, symbols: [ { literal: "do" }, "_", "Block", "__", { literal: "while" }, "_", "Exp" ] },
                    { name: "ConditionLoop", postprocess: ({data}) => { return ({ type: TYPES.Loop, kind:'while', condition: { type: TYPES.Operation, operator: "!", operands: [data[6]] }, statements: data[2] }); }, symbols: [ { literal: "do" }, "_", "Block", "__", { literal: "until" }, "_", "Exp" ] }
                ],
                Constant: [
                    { name: "Constant", postprocess: ({data}) => { return ({ type: TYPES.Constant, value: data[0].value }); }, symbols: [ { literal: "null" } ] },
                    { name: "Constant", postprocess: ({data}) => { return ({ type: TYPES.Constant, value: data[0].value }); }, symbols: [ { literal: "false" } ] },
                    { name: "Constant", postprocess: ({data}) => { return ({ type: TYPES.Constant, value: data[0].value }); }, symbols: [ { literal: "true" } ] }
                ],
                DeclareFunction: [
                    { name: "DeclareFunction", postprocess: ({data}) => { return ({ type: TYPES.Declare, kind: 'function', name: data[2], args: data[6], statements: data[10] }); }, symbols: [ { literal: "function" }, "_", "Word", "_", { literal: "(" }, "_", "FunctionArg_list", "_", { literal: ")" }, "_", "Block" ] },
                    { name: "DeclareFunction", postprocess: ({data}) => { return ({ type: TYPES.Declare, kind: 'function', name: data[2], args: [], statements: data[8] }); }, symbols: [ { literal: "function" }, "_", "Word", "_", { literal: "(" }, "_", { literal: ")" }, "_", "Block" ] }
                ],
                DeclareVar: [
                    { name: "DeclareVar", postprocess: ({data}) => { return ({ type: TYPES.Declare, kind: 'var', name: data[2], value: data[6] }); }, symbols: [ { literal: "var" }, "__", "Word", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "DeclareVar", postprocess: ({data}) => { return ({ type: TYPES.Declare, kind: 'const', name: data[2], value: data[6] }); }, symbols: [ { literal: "const" }, "__", "Word", "_", { literal: "=" }, "_", "Exp", "_", { literal: ";" } ] }
                ],
                Exp: [
                    { name: "Exp", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Query" ] },
                    { name: "Exp", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Lambda" ] },
                    { name: "Exp", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpOr" ] },
                    { name: "Exp", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Object" ] }
                ],
                ExpAnd: [
                    { name: "ExpAnd", postprocess: ({data}) => { return ({ type: TYPES.Logical, operator: "all", operands: [data[0], data[4]] }); }, symbols: [ "ExpAnd", "_", { literal: "and" }, "_", "ExpCompare" ] },
                    { name: "ExpAnd", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpCompare" ] }
                ],
                ExpCompare: [
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpCompare", "_", { literal: "<" }, "_", "ExpConcat" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpCompare", "_", { literal: ">" }, "_", "ExpConcat" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpCompare", "_", { literal: "<=" }, "_", "ExpConcat" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpCompare", "_", { literal: ">=" }, "_", "ExpConcat" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpCompare", "_", { literal: "!=" }, "_", "ExpConcat" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpCompare", "_", { literal: "==" }, "_", "ExpConcat" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpCompare", "_", { literal: "like" }, "_", "ExpConcat" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4].low, data[4].high] }); }, symbols: [ "ExpCompare", "_", { literal: "within" }, "_", "Range" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4].low, data[4].high] }); }, symbols: [ "ExpCompare", "_", { literal: "between" }, "_", "Range" ] },
                    { name: "ExpCompare", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpConcat" ] }
                ],
                ExpConcat: [
                    { name: "ExpConcat", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpSum", "_", { literal: ".." }, "_", "ExpConcat" ] },
                    { name: "ExpConcat", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpSum" ] }
                ],
                ExpOr: [
                    { name: "ExpOr", postprocess: ({data}) => { return ({ type: TYPES.Logical, operator: "any", operands: [data[0], data[4]] }); }, symbols: [ "ExpOr", "_", { literal: "or" }, "_", "ExpAnd" ] },
                    { name: "ExpOr", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpAnd" ] }
                ],
                ExpPower: [
                    { name: "ExpPower", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "Atom", "_", { literal: "^" }, "_", "ExpPower" ] },
                    { name: "ExpPower", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Atom" ] }
                ],
                ExpProduct: [
                    { name: "ExpProduct", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpProduct", "_", { literal: "*" }, "_", "ExpUnary" ] },
                    { name: "ExpProduct", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpProduct", "_", { literal: "/" }, "_", "ExpUnary" ] },
                    { name: "ExpProduct", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpProduct", "_", { literal: "%" }, "_", "ExpUnary" ] },
                    { name: "ExpProduct", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpUnary" ] }
                ],
                ExpSum: [
                    { name: "ExpSum", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpSum", "_", { literal: "+" }, "_", "ExpProduct" ] },
                    { name: "ExpSum", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: data[2].value, operands: [data[0], data[4]] }); }, symbols: [ "ExpSum", "_", { literal: "-" }, "_", "ExpProduct" ] },
                    { name: "ExpSum", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpProduct" ] }
                ],
                ExpUnary: [
                    { name: "ExpUnary", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: "!", operands: [data[2]] }); }, symbols: [ { literal: "!" }, "_", "ExpPower" ] },
                    { name: "ExpUnary", postprocess: ({data}) => { return ({ type: TYPES.Operation, operator: "!", operands: [data[2]] }); }, symbols: [ { literal: "not" }, "_", "ExpPower" ] },
                    { name: "ExpUnary", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ExpPower" ] }
                ],
                Exp_list: [
                    { name: "Exp_list", postprocess: ({data}) => { return ([ data[0] ]); }, symbols: [ "Exp" ] },
                    { name: "Exp_list", postprocess: ({data}) => { return (data[0].concat(data[4])); }, symbols: [ "Exp_list", "_", { literal: "," }, "_", "Exp" ] }
                ],
                Exp_ss: [
                    { name: "Exp_ss", postprocess: ({data}) => { return ([ data[0] ]); }, symbols: [ "Exp" ] },
                    { name: "Exp_ss", postprocess: ({data}) => { return (data[0].concat(data[4])); }, symbols: [ "Exp_ss", "_", { literal: ";" }, "_", "Exp" ] }
                ],
                FunctionArg: [
                    { name: "FunctionArg", postprocess: ({data}) => { return ({ name: data[0] }); }, symbols: [ "Word" ] },
                    { name: "FunctionArg", postprocess: ({data}) => { return ({ name: data[0], default: data[4] }); }, symbols: [ "Word", "_", { literal: "=" }, "_", "Exp" ] }
                ],
                FunctionArg_list: [
                    { name: "FunctionArg_list", postprocess: ({data}) => { return ([data[0]]); }, symbols: [ "FunctionArg" ] },
                    { name: "FunctionArg_list", postprocess: ({data}) => { return (data[0].concat(data[4])); }, symbols: [ "FunctionArg_list", "_", { literal: "," }, "_", "FunctionArg" ] }
                ],
                FunctionCall: [
                    { name: "FunctionCall", postprocess: ({data}) => { return ({ type: TYPES.Call, name: data[0], args: data[4] }); }, symbols: [ "Word", "_", { literal: "(" }, "_", "Exp_list", "_", { literal: ")" } ] },
                    { name: "FunctionCall", postprocess: ({data}) => { return ({ type: TYPES.Call, name: data[0], args: [] }); }, symbols: [ "Word", "_", { literal: "(" }, "_", { literal: ")" } ] }
                ],
                Group: [
                    { name: "Group", postprocess: ({data}) => { return (data[2]); }, symbols: [ { literal: "(" }, "_", "Exp", "_", { literal: ")" } ] }
                ],
                IfBlock: [
                    { name: "IfBlock", postprocess: ({data}) => { return ([{ condition: data[2], statements: data[4] }]); }, symbols: [ { literal: "if" }, "_", "Exp", "_", "Block" ] },
                    { name: "IfBlock", postprocess: ({data}) => { return (data[0].concat(data[4])); }, symbols: [ "IfBlock", "_", { literal: "else" }, "_", "IfBlock" ] }
                ],
                KVInIterator: [
                    { name: "KVInIterator", postprocess: ({data}) => { return ({ v: data[0], iterable: data[4] }); }, symbols: [ "Word", "__", { literal: "in" }, "_", "Exp" ] },
                    { name: "KVInIterator", postprocess: ({data}) => { return ({ k: data[4], v: data[0], iterable: data[8] }); }, symbols: [ "Word", "_", { literal: "," }, "_", "Word", "__", { literal: "in" }, "_", "Exp" ] }
                ],
                Lambda: [
                    { name: "Lambda", postprocess: ({data}) => { return ({ type: TYPES.Lambda, arguments: data[2], expression: data[8]  }); }, symbols: [ { literal: "(" }, "_", "FunctionArg_list", "_", { literal: ")" }, "_", { literal: "=>" }, "_", "Exp" ] },
                    { name: "Lambda", postprocess: ({data}) => { return ({ type: TYPES.Lambda, arguments: data[2], expression: data[6]  }); }, symbols: [ { literal: "(" }, "_", { literal: ")" }, "_", { literal: "=>" }, "_", "Exp" ] },
                    { name: "Lambda", postprocess: ({data}) => { return ({ type: TYPES.Lambda, arguments: data[2], expression: data[4]  }); }, symbols: [ "Word", "_", { literal: "=>" }, "_", "Exp" ] }
                ],
                LoopBlock: [
                    { name: "LoopBlock", postprocess: ({data}) => { return ({ type: TYPES.Loop, kind:'for', base: data[4], step: data[10], condition: data[6], statements: data[14] }); }, symbols: [ { literal: "for" }, "_", { literal: "(" }, "_", "DeclareVar", "_", "Exp", "_", { literal: ";" }, "_", "Assignment", "_", { literal: ")" }, "_", "Block" ] }
                ],
                Match: [
                    { name: "Match", postprocess: ({data}) => { return ({ type:TYPES.Match, statements: data[4] }); }, symbols: [ { literal: "match" }, "_", { literal: "{" }, "_", "MatchStatement_list", "_", { literal: "}" } ] }
                ],
                MatchStatement: [
                    { name: "MatchStatement", postprocess: ({data}) => { return ({ condition: data[0], value: data[4] }); }, symbols: [ "Exp", "_", { literal: ":" }, "_", "Exp", "_", { literal: ";" } ] },
                    { name: "MatchStatement", postprocess: ({data}) => { return ({ type: TYPES.Default , value: data[4] }); }, symbols: [ { literal: "default" }, "_", { literal: ":" }, "_", "Exp", "_", { literal: ";" } ] }
                ],
                MatchStatement_list: [
                    { name: "MatchStatement_list", postprocess: ({data}) => { return (data[0].type == TYPES.Default ? ({ default: data[0], conditions: [] }) : ({ conditions: [data[0]] })); }, symbols: [ "MatchStatement" ] },
                    { name: "MatchStatement_list", postprocess: ({data}) => { return ((data[2].type == TYPES.Default ? data[0].default = data[2] : data[0].conditions.push(data[2])) && data[0]); }, symbols: [ "MatchStatement_list", "_", "MatchStatement" ] }
                ],
                NegativeNumber: [
                    { name: "NegativeNumber", postprocess: ({data}) => { return ({ type: TYPES.Literal, kind: 'number', value: '-' +data[2].value }); }, symbols: [ { literal: "-" }, "_", "Number" ] }
                ],
                Number: [
                    { name: "Number", postprocess: ({data}) => { return ({ type: TYPES.Literal, kind: 'number', value: data[0].value  + "." + data[2].value }); }, symbols: [ { token: "digits" }, { literal: "." }, { token: "digits" } ] },
                    { name: "Number", postprocess: ({data}) => { return ({ type: TYPES.Literal, kind: 'number', value: data[0].value }); }, symbols: [ { token: "digits" } ] }
                ],
                Object: [
                    { name: "Object", postprocess: ({data}) => { return ({ type: TYPES.Object, properties: [] }); }, symbols: [ { literal: "{" }, "_", { literal: "}" } ] },
                    { name: "Object", postprocess: ({data}) => { return ({ type: TYPES.Object, properties: data[2] }); }, symbols: [ { literal: "{" }, "_", "Prop_list", "_", { literal: "}" } ] }
                ],
                Path: [
                    { name: "Path", postprocess: ({data}) => { return ([{ type: TYPES.Word, value: data[0] }]); }, symbols: [ "Word" ] },
                    { name: "Path", postprocess: ({data}) => { return (data[0].concat({ type: TYPES.Word, value: data[4]})); }, symbols: [ "Path", "_", { literal: "." }, "_", "Word" ] },
                    { name: "Path", postprocess: ({data}) => { return (data[0].concat(data[4])); }, symbols: [ "Path", "_", { literal: "[" }, "_", "Exp", "_", { literal: "]" } ] },
                    { name: "Path", postprocess: ({data}) => { return (data[0].concat({ type: TYPES.Wildcard })); }, symbols: [ "Path", "_", { literal: "[" }, "_", { literal: "?" }, "_", { literal: "]" } ] }
                ],
                Prop: [
                    { name: "Prop", postprocess: ({data}) => { return ({ key: data[0], value: data[4] }); }, symbols: [ "PropName", "_", { literal: ":" }, "_", "Exp" ] },
                    { name: "Prop", postprocess: ({data}) => { return ({ type: TYPES.Spread, value: data[2] }); }, symbols: [ { literal: "..." }, "_", "Exp" ] },
                    { name: "Prop", postprocess: ({data}) => { return ({ key: data[0], value: { type: TYPES.Reference, path: data[0] } }); }, symbols: [ "Word" ] }
                ],
                PropName: [
                    { name: "PropName", postprocess: ({data}) => { return (data[0]); }, symbols: [ "String" ] },
                    { name: "PropName", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Word" ] }
                ],
                Prop_list: [
                    { name: "Prop_list", postprocess: ({data}) => { return ([data[0]]); }, symbols: [ "Prop" ] },
                    { name: "Prop_list", postprocess: ({data}) => { return (data[0].concat(data[4])); }, symbols: [ "Prop_list", "_", { literal: "," }, "_", "Prop" ] }
                ],
                QCluster: [
                    { name: "QCluster", postprocess: ({data}) => { return (data[4]); }, symbols: [ { literal: "cluster" }, "__", { literal: "(" }, "_", "Exp_list", "_", { literal: ")" } ] }
                ],
                QFilter: [
                    { name: "QFilter", postprocess: ({data}) => { return (data[2]); }, symbols: [ { literal: "filter" }, "__", "Exp" ] }
                ],
                QQuery: [
                    { name: "QQuery", postprocess: ({data}) => { return ({ kind:data[0].value, iterable: data[2] }); }, symbols: [ { literal: "query" }, "__", "KVInIterator" ] }
                ],
                QSlice: [
                    { name: "QSlice", postprocess: ({data}) => { return (data[2]); }, symbols: [ { literal: "segment" }, "__", "Range" ] }
                ],
                QSort: [
                    { name: "QSort", postprocess: ({data}) => { return ({ expression: data[2], direction: data[3]?.[1].value }); }, symbols: [ { literal: "sort" }, "__", "Exp", "QSort.RPT01x1" ] }
                ],
                "QSort.RPT01x1": [
                    { name: "QSort.RPT01x1", postprocess: ({data}) => data[0], symbols: [ "QSort.RPT01x1.SUBx1" ] },
                    { name: "QSort.RPT01x1", postprocess: () => null, symbols: [ ] }
                ],
                "QSort.RPT01x1.SUBx1": [
                    { name: "QSort.RPT01x1.SUBx1", symbols: [ "__", { literal: "desc" } ] },
                    { name: "QSort.RPT01x1.SUBx1", symbols: [ { literal: "asc" } ] }
                ],
                QYield: [
                    { name: "QYield", postprocess: ({data}) => { return ({ type: TYPES.Yield, kind: data[0].value, value: data[2] }); }, symbols: [ { literal: "list" }, "__", "Exp" ] },
                    { name: "QYield", postprocess: ({data}) => { return ({ type: TYPES.Yield, kind: data[0].value, value: data[2] }); }, symbols: [ { literal: "first" }, "__", "Exp" ] },
                    { name: "QYield", postprocess: ({data}) => { return ({ type: TYPES.Yield, kind: data[0].value, value: data[2] }); }, symbols: [ { literal: "aggregate" }, "_", "Object" ] },
                    { name: "QYield", postprocess: ({data}) => { return ({ type: TYPES.Yield, kind: data[0].value, value: data[2] }); }, symbols: [ { literal: "aggregate" }, "__", "Lambda" ] }
                ],
                Query: [
                    { name: "Query", postprocess: ({data}) => { return ({ type: TYPES.Query,  source: data[0], filter: data[1]?.[1], yield: data[3], cluster: data[4]?.[1], sort: data[5]?.[1],  slice: data[6]?.[1] }); }, symbols: [ "QQuery", "Query.RPT01x1", "__", "QYield", "Query.RPT01x2", "Query.RPT01x3", "Query.RPT01x4" ] }
                ],
                "Query.RPT01x1": [
                    { name: "Query.RPT01x1", postprocess: ({data}) => data[0], symbols: [ "Query.RPT01x1.SUBx1" ] },
                    { name: "Query.RPT01x1", postprocess: () => null, symbols: [ ] }
                ],
                "Query.RPT01x1.SUBx1": [
                    { name: "Query.RPT01x1.SUBx1", symbols: [ "__", "QFilter" ] }
                ],
                "Query.RPT01x2": [
                    { name: "Query.RPT01x2", postprocess: ({data}) => data[0], symbols: [ "Query.RPT01x2.SUBx1" ] },
                    { name: "Query.RPT01x2", postprocess: () => null, symbols: [ ] }
                ],
                "Query.RPT01x2.SUBx1": [
                    { name: "Query.RPT01x2.SUBx1", symbols: [ "__", "QCluster" ] }
                ],
                "Query.RPT01x3": [
                    { name: "Query.RPT01x3", postprocess: ({data}) => data[0], symbols: [ "Query.RPT01x3.SUBx1" ] },
                    { name: "Query.RPT01x3", postprocess: () => null, symbols: [ ] }
                ],
                "Query.RPT01x3.SUBx1": [
                    { name: "Query.RPT01x3.SUBx1", symbols: [ "__", "QSort" ] }
                ],
                "Query.RPT01x4": [
                    { name: "Query.RPT01x4", postprocess: ({data}) => data[0], symbols: [ "Query.RPT01x4.SUBx1" ] },
                    { name: "Query.RPT01x4", postprocess: () => null, symbols: [ ] }
                ],
                "Query.RPT01x4.SUBx1": [
                    { name: "Query.RPT01x4.SUBx1", symbols: [ "__", "QSlice" ] }
                ],
                Range: [
                    { name: "Range", postprocess: ({data}) => { return ({ low: data[0], high: data[4] }); }, symbols: [ "Exp", "_", { literal: "to" }, "_", "Exp" ] }
                ],
                Reference: [
                    { name: "Reference", postprocess: ({data}) => { return ({ type: TYPES.Reference, path: data[0] }); }, symbols: [ "Path" ] }
                ],
                Return: [
                    { name: "Return", postprocess: ({data}) => { return ({ type: TYPES.Control, kind: "return", value: data[2] }); }, symbols: [ { literal: "return" }, "_", "Exp", "_", { literal: ";" } ] }
                ],
                ScanBlock: [
                    { name: "ScanBlock", postprocess: ({data}) => { return ({ type: TYPES.Loop, kind: 'scan', ...data[2], statements: data[4] }); }, symbols: [ { literal: "scan" }, "__", "KVInIterator", "_", "Block" ] }
                ],
                Statement: [
                    { name: "Statement", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Assignment" ] },
                    { name: "Statement", postprocess: ({data}) => { return (data[0]); }, symbols: [ "DeclareVar" ] },
                    { name: "Statement", postprocess: ({data}) => { return (data[0]); }, symbols: [ "DeclareFunction" ] },
                    { name: "Statement", postprocess: ({data}) => { return (data[0]); }, symbols: [ "Return" ] },
                    { name: "Statement", postprocess: ({data}) => { return ({ type: TYPES.Conditional, statements: data[0] }); }, symbols: [ "IfBlock" ] },
                    { name: "Statement", postprocess: ({data}) => { return ({ type: TYPES.Conditional, statements: data[0].concat([{ condition: null, statements: data[4] }])}); }, symbols: [ "IfBlock", "_", { literal: "else" }, "_", "Block" ] },
                    { name: "Statement", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ScanBlock" ] },
                    { name: "Statement", postprocess: ({data}) => { return (data[0]); }, symbols: [ "ConditionLoop" ] },
                    { name: "Statement", postprocess: ({data}) => { return (data[0]); }, symbols: [ "LoopBlock" ] },
                    { name: "Statement", postprocess: ({data}) => { return ({ type: TYPES.Run, expression: data[2] }); }, symbols: [ { literal: "run" }, "__", "Exp", "_", { literal: ";" } ] }
                ],
                Statements: [
                    { name: "Statements", postprocess: ({data}) => { return ([data[0]]); }, symbols: [ "Statement" ] },
                    { name: "Statements", postprocess: ({data}) => { return (( data[2].type == 'declare' &&  data[2].kind =='function'? data[0].unshift(data[2]): data[0].push(data[2])) && data[0]); }, symbols: [ "Statements", "_", "Statement" ] }
                ],
                String: [
                    { name: "String", postprocess: ({data}) => { return ({ type: TYPES.Literal, kind: 'string', value: data[1] }); }, symbols: [ { token: "dquote" }, "StringInner", { token: "dquote" } ] },
                    { name: "String", postprocess: ({data}) => { return ({ type: TYPES.Literal, kind: 'string', value: data[1] }); }, symbols: [ { token: "squote" }, "StringInner", { token: "squote" } ] },
                    { name: "String", postprocess: ({data}) => { return ({ type: TYPES.Literal, kind: 'string', value: '' }); }, symbols: [ { token: "dquote" }, { token: "dquote" } ] },
                    { name: "String", postprocess: ({data}) => { return ({ type: TYPES.Literal, kind: 'string', value: '' }); }, symbols: [ { token: "squote" }, { token: "squote" } ] }
                ],
                StringEscape: [
                    { name: "StringEscape", postprocess: ({data}) => { return (JSON.parse('"' +data[0].value + '"')); }, symbols: [ { token: "escaped" } ] },
                    { name: "StringEscape", postprocess: ({data}) => { return (data[0].value[1]); }, symbols: [ { token: "quoteEscape" } ] }
                ],
                StringInner: [
                    { name: "StringInner", postprocess: ({data}) => { return (data[0]); }, symbols: [ "StringEscape" ] },
                    { name: "StringInner", postprocess: ({data}) => { return (data[0].value); }, symbols: [ { token: "string" } ] },
                    { name: "StringInner", postprocess: ({data}) => { return (data[0] + data[1]); }, symbols: [ "StringInner", "StringEscape" ] },
                    { name: "StringInner", postprocess: ({data}) => { return (data[0] + data[1].value); }, symbols: [ "StringInner", { token: "string" } ] }
                ],
                VariadicLogic: [
                    { name: "VariadicLogic", postprocess: ({data}) => { return ({ type: TYPES.Logical, operator: data[0].value, operands: data[4] }); }, symbols: [ { literal: "any" }, "_", { literal: "{" }, "_", "Exp_ss", "_", "VariadicLogic.RPT01x1", { literal: "}" } ] },
                    { name: "VariadicLogic", postprocess: ({data}) => { return ({ type: TYPES.Logical, operator: data[0].value, operands: data[4] }); }, symbols: [ { literal: "all" }, "_", { literal: "{" }, "_", "Exp_ss", "_", "VariadicLogic.RPT01x2", { literal: "}" } ] }
                ],
                "VariadicLogic.RPT01x1": [
                    { name: "VariadicLogic.RPT01x1", postprocess: ({data}) => data[0], symbols: [ "VariadicLogic.RPT01x1.SUBx1" ] },
                    { name: "VariadicLogic.RPT01x1", postprocess: () => null, symbols: [ ] }
                ],
                "VariadicLogic.RPT01x1.SUBx1": [
                    { name: "VariadicLogic.RPT01x1.SUBx1", symbols: [ { literal: ";" }, "_" ] }
                ],
                "VariadicLogic.RPT01x2": [
                    { name: "VariadicLogic.RPT01x2", postprocess: ({data}) => data[0], symbols: [ "VariadicLogic.RPT01x2.SUBx1" ] },
                    { name: "VariadicLogic.RPT01x2", postprocess: () => null, symbols: [ ] }
                ],
                "VariadicLogic.RPT01x2.SUBx1": [
                    { name: "VariadicLogic.RPT01x2.SUBx1", symbols: [ { literal: ";" }, "_" ] }
                ],
                Word: [
                    { name: "Word", postprocess: ({data}) => { return (data[0].value); }, symbols: [ { token: "word" } ] }
                ],
                _: [
                    { name: "_", postprocess: ({data}) => { return (null); }, symbols: [ "_.RPT01x1" ] }
                ],
                "_.RPT01x1": [
                    { name: "_.RPT01x1", postprocess: ({data}) => data[0], symbols: [ { token: "ws" } ] },
                    { name: "_.RPT01x1", postprocess: () => null, symbols: [ ] }
                ],
                __: [
                    { name: "__", postprocess: ({data}) => { return (null); }, symbols: [ { token: "ws" } ] }
                ]
            },
            start: "Body"
        },
        lexer: {
            start: "root",
            states: {
                dotescape: {
                    regex: /(?:(?:((?:\.)))|(?:(\s+))|(?:([_a-zA-Z$][_a-zA-Z$\d]*)))/ym,
                    rules: [
                        { tag: ["l_dot"], when: "." },
                        { tag: ["ws"], when: /\s+/ },
                        { pop: 1, tag: ["word"], when: /[_a-zA-Z$][_a-zA-Z$\d]*/ }
                    ]
                },
                dqstring: {
                    regex: /(?:(?:(\\[\\\/bnrft]))|(?:(\\"))|(?:(\\u[A-Fa-f\d]{4}))|(?:(\\.))|(?:([^"\\]+))|(?:((?:"))))/ym,
                    rules: [
                        { highlight: "constant", tag: ["escaped"], when: /\\[\\\/bnrft]/ },
                        { tag: ["quoteEscape"], when: /\\"/ },
                        { highlight: "constant", tag: ["escaped"], when: /\\u[A-Fa-f\d]{4}/ },
                        { tag: ["badEscape"], when: /\\./ },
                        { highlight: "string", tag: ["string"], when: /[^"\\]+/ },
                        { highlight: "string", pop: 1, tag: ["dquote"], when: "\"" }
                    ]
                },
                keywords: {
                    regex: /(?:(?:(\@))|(?:(set(?![a-zA-Z])))|(?:(var(?![a-zA-Z])))|(?:(const(?![a-zA-Z])))|(?:(asc(?![a-zA-Z])))|(?:(desc(?![a-zA-Z])))|(?:(function(?![a-zA-Z])))|(?:(true(?![a-zA-Z])))|(?:(false(?![a-zA-Z])))|(?:(null(?![a-zA-Z])))|(?:(any(?![a-zA-Z])))|(?:(all(?![a-zA-Z])))|(?:(within(?![a-zA-Z])))|(?:(between(?![a-zA-Z])))|(?:(and(?![a-zA-Z])))|(?:(or(?![a-zA-Z])))|(?:(on(?![a-zA-Z])))|(?:(if(?![a-zA-Z])))|(?:(match(?![a-zA-Z])))|(?:(default(?![a-zA-Z])))|(?:(in(?![a-zA-Z])))|(?:(else(?![a-zA-Z])))|(?:(for(?![a-zA-Z])))|(?:(like(?![a-zA-Z])))|(?:(not(?![a-zA-Z])))|(?:(while(?![a-zA-Z])))|(?:(until(?![a-zA-Z])))|(?:(to(?![a-zA-Z])))|(?:(do(?![a-zA-Z])))|(?:(run(?![a-zA-Z])))|(?:(return(?![a-zA-Z])))|(?:(query(?![a-zA-Z])))|(?:(scan(?![a-zA-Z])))|(?:(segment(?![a-zA-Z])))|(?:(filter(?![a-zA-Z])))|(?:(sort(?![a-zA-Z])))|(?:(aggregate(?![a-zA-Z])))|(?:(cluster(?![a-zA-Z])))|(?:(list(?![a-zA-Z])))|(?:(first(?![a-zA-Z]))))/ym,
                    rules: [
                        { highlight: "keyword", tag: ["keyword"], when: /\@/ },
                        { highlight: "keyword", tag: ["keyword"], when: /set(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /var(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /const(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /asc(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /desc(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /function(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /true(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /false(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /null(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /any(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /all(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /within(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /between(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /and(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /or(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /on(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /if(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /match(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /default(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /in(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /else(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /for(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /like(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /not(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /while(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /until(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /to(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /do(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /run(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /return(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /query(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /scan(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /segment(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /filter(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /sort(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /aggregate(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /cluster(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /list(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /first(?![a-zA-Z])/ }
                    ]
                },
                root: {
                    regex: /(?:(?:(\@))|(?:(set(?![a-zA-Z])))|(?:(var(?![a-zA-Z])))|(?:(const(?![a-zA-Z])))|(?:(asc(?![a-zA-Z])))|(?:(desc(?![a-zA-Z])))|(?:(function(?![a-zA-Z])))|(?:(true(?![a-zA-Z])))|(?:(false(?![a-zA-Z])))|(?:(null(?![a-zA-Z])))|(?:(any(?![a-zA-Z])))|(?:(all(?![a-zA-Z])))|(?:(within(?![a-zA-Z])))|(?:(between(?![a-zA-Z])))|(?:(and(?![a-zA-Z])))|(?:(or(?![a-zA-Z])))|(?:(on(?![a-zA-Z])))|(?:(if(?![a-zA-Z])))|(?:(match(?![a-zA-Z])))|(?:(default(?![a-zA-Z])))|(?:(in(?![a-zA-Z])))|(?:(else(?![a-zA-Z])))|(?:(for(?![a-zA-Z])))|(?:(like(?![a-zA-Z])))|(?:(not(?![a-zA-Z])))|(?:(while(?![a-zA-Z])))|(?:(until(?![a-zA-Z])))|(?:(to(?![a-zA-Z])))|(?:(do(?![a-zA-Z])))|(?:(run(?![a-zA-Z])))|(?:(return(?![a-zA-Z])))|(?:(query(?![a-zA-Z])))|(?:(scan(?![a-zA-Z])))|(?:(segment(?![a-zA-Z])))|(?:(filter(?![a-zA-Z])))|(?:(sort(?![a-zA-Z])))|(?:(aggregate(?![a-zA-Z])))|(?:(cluster(?![a-zA-Z])))|(?:(list(?![a-zA-Z])))|(?:(first(?![a-zA-Z])))|(?:("))|(?:('))|(?:(\d+))|(?:([_a-zA-Z$][_a-zA-Z$\d]*))|(?:((?:=>)))|(?:((?:!=)))|(?:((?:==)))|(?:((?:>=)))|(?:((?:<=)))|(?:((?:\+=)))|(?:((?:\-=)))|(?:((?:\/=)))|(?:((?:%=)))|(?:((?:\*=)))|(?:((?:\.\.\.)))|(?:((?:\.\.)))|(?:((?:=)))|(?:((?:>)))|(?:((?:<)))|(?:((?:\+)))|(?:((?:\-)))|(?:((?:\/)))|(?:((?:%)))|(?:((?:\*)))|(?:((?:\?)))|(?:((?:\^)))|(?:((?:;)))|(?:((?::)))|(?:((?:!)))|(?:(\.\s*[a-z][_a-zA-Z$][_a-zA-Z$\d]*))|(?:((?:\.)))|(?:((?:,)))|(?:((?:\()))|(?:((?:\))))|(?:((?:\{)))|(?:((?:\})))|(?:((?:\[)))|(?:((?:\])))|(?:(\s+)))/ym,
                    rules: [
                        { highlight: "keyword", tag: ["keyword"], when: /\@/ },
                        { highlight: "keyword", tag: ["keyword"], when: /set(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /var(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /const(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /asc(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /desc(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /function(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /true(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /false(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /null(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /any(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /all(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /within(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword","word"], when: /between(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /and(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /or(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /on(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /if(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /match(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /default(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /in(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /else(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /for(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /like(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /not(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /while(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /until(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /to(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /do(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /run(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /return(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /query(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /scan(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /segment(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /filter(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /sort(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /aggregate(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /cluster(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /list(?![a-zA-Z])/ },
                        { highlight: "keyword", tag: ["keyword"], when: /first(?![a-zA-Z])/ },
                        { goto: "dqstring", highlight: "string", tag: ["dquote"], when: /"/ },
                        { goto: "sqstring", highlight: "string", tag: ["squote"], when: /'/ },
                        { highlight: "number", tag: ["digits"], when: /\d+/ },
                        { tag: ["word"], when: /[_a-zA-Z$][_a-zA-Z$\d]*/ },
                        { highlight: "keyword", tag: ["l_arrow"], when: "=>" },
                        { highlight: "keyword", tag: ["l_arrow"], when: "!=" },
                        { highlight: "keyword", tag: ["l_eqeq"], when: "==" },
                        { highlight: "keyword", tag: ["l_gteq"], when: ">=" },
                        { highlight: "keyword", tag: ["l_lteq"], when: "<=" },
                        { highlight: "keyword", tag: ["l_add"], when: "+=" },
                        { highlight: "keyword", tag: ["l_sub"], when: "-=" },
                        { highlight: "keyword", tag: ["l_div"], when: "/=" },
                        { highlight: "keyword", tag: ["l_mod"], when: "%=" },
                        { highlight: "keyword", tag: ["l_mul"], when: "*=" },
                        { highlight: "keyword", tag: ["l_spread"], when: "..." },
                        { highlight: "keyword", tag: ["l_concat"], when: ".." },
                        { tag: ["l_eq"], when: "=" },
                        { highlight: "keyword", tag: ["l_gt"], when: ">" },
                        { highlight: "keyword", tag: ["l_lt"], when: "<" },
                        { highlight: "keyword", tag: ["l_add"], when: "+" },
                        { highlight: "keyword", tag: ["l_sub"], when: "-" },
                        { highlight: "keyword", tag: ["l_div"], when: "/" },
                        { highlight: "keyword", tag: ["l_mod"], when: "%" },
                        { highlight: "keyword", tag: ["l_mul"], when: "*" },
                        { highlight: "keyword", tag: ["l_qmark"], when: "?" },
                        { highlight: "keyword", tag: ["l_exp"], when: "^" },
                        { highlight: "keyword", tag: ["l_semi"], when: ";" },
                        { highlight: "keyword", tag: ["l_col"], when: ":" },
                        { highlight: "keyword", tag: ["l_exc"], when: "!" },
                        { before: true, goto: "dotescape", when: /\.\s*[a-z][_a-zA-Z$][_a-zA-Z$\d]*/ },
                        { tag: ["l_dot"], when: "." },
                        { highlight: "delimiter", tag: ["l_comma"], when: "," },
                        { highlight: "delimiter", inset: 1, tag: ["l_lparen"], when: "(" },
                        { highlight: "delimiter", pop: 1, tag: ["l_rparen"], when: ")" },
                        { highlight: "delimiter", inset: 1, tag: ["l_lcurly"], when: "{" },
                        { highlight: "delimiter", pop: 1, tag: ["l_rcurly"], when: "}" },
                        { highlight: "delimiter", inset: 1, tag: ["l_lbrack"], when: "[" },
                        { highlight: "delimiter", pop: 1, tag: ["l_rbrack"], when: "]" },
                        { tag: ["ws"], when: /\s+/ }
                    ]
                },
                sqstring: {
                    regex: /(?:(?:(\\[\\\/bnrft]))|(?:(\\'))|(?:(\\u[A-Fa-f\d]{4}))|(?:(\\.))|(?:([^'\\]+))|(?:((?:'))))/ym,
                    rules: [
                        { tag: ["escaped"], when: /\\[\\\/bnrft]/ },
                        { tag: ["quoteEscape"], when: /\\'/ },
                        { tag: ["escaped"], when: /\\u[A-Fa-f\d]{4}/ },
                        { tag: ["badEscape"], when: /\\./ },
                        { highlight: "string", tag: ["string"], when: /[^'\\]+/ },
                        { highlight: "string", pop: 1, tag: ["squote"], when: "'" }
                    ]
                }
            }
        }
    }
    constructor(){}
}

export default grammar;