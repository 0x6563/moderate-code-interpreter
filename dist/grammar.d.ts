export namespace TYPES {
    let Operation: string;
    let Default: string;
    let Logical: string;
    let Assignment: string;
    let Declare: string;
    let Control: string;
    let Conditional: string;
    let Loop: string;
    let Literal: string;
    let Array: string;
    let Object: string;
    let Lambda: string;
    let Reference: string;
    let Query: string;
    let Run: string;
    let Call: string;
    let Match: string;
    let Spread: string;
    let Cluster: string;
    let Constant: string;
    let Wildcard: string;
    let Yield: string;
    let Word: string;
}
export default grammar;
declare class grammar {
    artifacts: {
        grammar: {
            rules: {
                Alias: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Alias_list: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Array: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        items: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Assignment: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        reference: any;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Atom: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                Block: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Body: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        statements: any;
                    };
                    symbols: string[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        expression: any;
                    };
                    symbols: string[];
                })[];
                ConditionLoop: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        condition: any;
                        statements: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Constant: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        value: any;
                    };
                    symbols: {
                        literal: string;
                    }[];
                }[];
                DeclareFunction: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        name: any;
                        args: any;
                        statements: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                DeclareVar: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        name: any;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Exp: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                ExpAnd: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: string;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                ExpCompare: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: any;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                ExpConcat: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: any;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                ExpOr: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: string;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                ExpPower: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: any;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                ExpProduct: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: any;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                ExpSum: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: any;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                ExpUnary: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: string;
                        operands: any[];
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                })[];
                Exp_list: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Exp_ss: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                FunctionArg: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        name: any;
                    };
                    symbols: string[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        name: any;
                        default: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                })[];
                FunctionArg_list: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                FunctionCall: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        name: any;
                        args: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Group: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                IfBlock: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                KVInIterator: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        v: any;
                        iterable: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Lambda: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        arguments: any;
                        expression: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                LoopBlock: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        base: any;
                        step: any;
                        condition: any;
                        statements: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Match: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        statements: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                MatchStatement: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        condition: any;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                })[];
                MatchStatement_list: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                NegativeNumber: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        value: string;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Number: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        value: string;
                    };
                    symbols: ({
                        token: string;
                        literal?: undefined;
                    } | {
                        literal: string;
                        token?: undefined;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        value: any;
                    };
                    symbols: {
                        token: string;
                    }[];
                })[];
                Object: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        properties: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Path: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Prop: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        key: any;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                })[];
                PropName: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                Prop_list: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                QCluster: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                QFilter: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                QQuery: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        kind: any;
                        iterable: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                QSlice: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                QSort: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        expression: any;
                        direction: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                "QSort.RPT01x1": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "QSort.RPT01x1.SUBx1": {
                    name: string;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                QYield: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: any;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Query: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        source: any;
                        filter: any;
                        yield: any;
                        cluster: any;
                        sort: any;
                        slice: any;
                    };
                    symbols: string[];
                }[];
                "Query.RPT01x1": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "Query.RPT01x1.SUBx1": {
                    name: string;
                    symbols: string[];
                }[];
                "Query.RPT01x2": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "Query.RPT01x2.SUBx1": {
                    name: string;
                    symbols: string[];
                }[];
                "Query.RPT01x3": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "Query.RPT01x3.SUBx1": {
                    name: string;
                    symbols: string[];
                }[];
                "Query.RPT01x4": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "Query.RPT01x4.SUBx1": {
                    name: string;
                    symbols: string[];
                }[];
                Range: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        low: any;
                        high: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Reference: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        path: any;
                    };
                    symbols: string[];
                }[];
                Return: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        value: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                ScanBlock: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Statement: ({
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        statements: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                } | {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        expression: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                })[];
                Statements: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                String: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        kind: string;
                        value: any;
                    };
                    symbols: (string | {
                        token: string;
                    })[];
                }[];
                StringEscape: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: {
                        token: string;
                    }[];
                }[];
                StringInner: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: (string | {
                        token: string;
                    })[];
                }[];
                VariadicLogic: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => {
                        type: string;
                        operator: any;
                        operands: any;
                    };
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                "VariadicLogic.RPT01x1": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "VariadicLogic.RPT01x1.SUBx1": {
                    name: string;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                "VariadicLogic.RPT01x2": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "VariadicLogic.RPT01x2.SUBx1": {
                    name: string;
                    symbols: (string | {
                        literal: string;
                    })[];
                }[];
                Word: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: {
                        token: string;
                    }[];
                }[];
                _: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: string[];
                }[];
                "_.RPT01x1": {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: {
                        token: string;
                    }[];
                }[];
                __: {
                    name: string;
                    postprocess: ({ data }: {
                        data: any;
                    }) => any;
                    symbols: {
                        token: string;
                    }[];
                }[];
            };
            start: string;
        };
        lexer: {
            start: string;
            states: {
                dotescape: {
                    regex: RegExp;
                    rules: ({
                        tag: string[];
                        when: string;
                        pop?: undefined;
                    } | {
                        tag: string[];
                        when: RegExp;
                        pop?: undefined;
                    } | {
                        pop: number;
                        tag: string[];
                        when: RegExp;
                    })[];
                };
                dqstring: {
                    regex: RegExp;
                    rules: ({
                        highlight: string;
                        tag: string[];
                        when: RegExp;
                        pop?: undefined;
                    } | {
                        tag: string[];
                        when: RegExp;
                        highlight?: undefined;
                        pop?: undefined;
                    } | {
                        highlight: string;
                        pop: number;
                        tag: string[];
                        when: string;
                    })[];
                };
                keywords: {
                    regex: RegExp;
                    rules: {
                        highlight: string;
                        tag: string[];
                        when: RegExp;
                    }[];
                };
                root: {
                    regex: RegExp;
                    rules: ({
                        highlight: string;
                        tag: string[];
                        when: RegExp;
                        goto?: undefined;
                        before?: undefined;
                        inset?: undefined;
                        pop?: undefined;
                    } | {
                        goto: string;
                        highlight: string;
                        tag: string[];
                        when: RegExp;
                        before?: undefined;
                        inset?: undefined;
                        pop?: undefined;
                    } | {
                        tag: string[];
                        when: RegExp;
                        highlight?: undefined;
                        goto?: undefined;
                        before?: undefined;
                        inset?: undefined;
                        pop?: undefined;
                    } | {
                        highlight: string;
                        tag: string[];
                        when: string;
                        goto?: undefined;
                        before?: undefined;
                        inset?: undefined;
                        pop?: undefined;
                    } | {
                        tag: string[];
                        when: string;
                        highlight?: undefined;
                        goto?: undefined;
                        before?: undefined;
                        inset?: undefined;
                        pop?: undefined;
                    } | {
                        before: boolean;
                        goto: string;
                        when: RegExp;
                        highlight?: undefined;
                        tag?: undefined;
                        inset?: undefined;
                        pop?: undefined;
                    } | {
                        highlight: string;
                        inset: number;
                        tag: string[];
                        when: string;
                        goto?: undefined;
                        before?: undefined;
                        pop?: undefined;
                    } | {
                        highlight: string;
                        pop: number;
                        tag: string[];
                        when: string;
                        goto?: undefined;
                        before?: undefined;
                        inset?: undefined;
                    })[];
                };
                sqstring: {
                    regex: RegExp;
                    rules: ({
                        tag: string[];
                        when: RegExp;
                        highlight?: undefined;
                        pop?: undefined;
                    } | {
                        highlight: string;
                        tag: string[];
                        when: RegExp;
                        pop?: undefined;
                    } | {
                        highlight: string;
                        pop: number;
                        tag: string[];
                        when: string;
                    })[];
                };
            };
        };
    };
}
