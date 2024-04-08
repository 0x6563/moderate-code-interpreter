export default GWLanguage;
declare function GWLanguage(): {
    grammar: {
        start: string;
        rules: {
            Chunk: ({
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    statements: any;
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    expression: any;
                };
            })[];
            Statements: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Statement: ({
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            } | {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    statements: any;
                };
            } | {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    expression: any;
                };
            })[];
            Assignment: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    reference: any;
                    value: any;
                };
            }[];
            DeclareVar: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    name: any;
                    value: any;
                };
            }[];
            Return: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    value: any;
                };
            }[];
            DeclareFunction: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    name: any;
                    args: any;
                    statements: any;
                };
            }[];
            IfBlock: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            ScanBlock: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            KVInIterator: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    v: any;
                    iterable: any;
                };
            }[];
            ConditionLoop: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    condition: any;
                    statements: any;
                };
            }[];
            LoopBlock: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
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
            }[];
            Block: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Exp_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Exp_ss: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Exp: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            ExpOr: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: string;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            ExpAnd: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: string;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            ExpCompare: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: any;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            ExpConcat: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: any;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            ExpSum: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: any;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            ExpProduct: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: any;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            ExpUnary: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: string;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            ExpPower: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: any;
                    operands: any[];
                };
            } | {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            })[];
            Atom: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Constant: {
                name: string;
                symbols: {
                    literal: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    value: any;
                };
            }[];
            Reference: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    path: any;
                };
            }[];
            Path: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Word: {
                name: string;
                symbols: {
                    token: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Group: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Number: ({
                name: string;
                symbols: ({
                    token: string;
                    literal?: undefined;
                } | {
                    literal: string;
                    token?: undefined;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    value: string;
                };
            } | {
                name: string;
                symbols: {
                    token: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    value: any;
                };
            })[];
            NegativeNumber: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    value: string;
                };
            }[];
            String: {
                name: string;
                symbols: (string | {
                    token: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: string;
                    value: any;
                };
            }[];
            stringInner: {
                name: string;
                symbols: (string | {
                    token: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            stringEscape: {
                name: string;
                symbols: {
                    token: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Array: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    items: any;
                };
            }[];
            Object: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    properties: any;
                };
            }[];
            Prop_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Prop: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    key: any;
                    value: any;
                };
            } | {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    value: any;
                };
            })[];
            Query$RPT01x1$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            Query$RPT01x1: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Query$RPT01x2$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            Query$RPT01x2: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Query$RPT01x3$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            Query$RPT01x3: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Query$RPT01x4$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            Query$RPT01x4: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Query: {
                name: string;
                symbols: string[];
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
            }[];
            QQuery: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    kind: any;
                    iterable: any;
                };
            }[];
            QSort$RPT01x1$SUBx1: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
            }[];
            QSort$RPT01x1: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            QSort: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    expression: any;
                    direction: any;
                };
            }[];
            QFilter: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            QYield: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    kind: any;
                    value: any;
                };
            }[];
            QCluster: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            QSlice: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Range: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    low: any;
                    high: any;
                };
            }[];
            Alias: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Alias_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Lambda: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    arguments: any;
                    expression: any;
                };
            }[];
            FunctionArg: ({
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    name: any;
                };
            } | {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    name: any;
                    default: any;
                };
            })[];
            FunctionArg_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            PropName: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            FunctionCall: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    name: any;
                    args: any;
                };
            }[];
            VariadicLogic$RPT01x1$SUBx1: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
            }[];
            VariadicLogic$RPT01x1: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            VariadicLogic: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    operator: any;
                    operands: any;
                };
            }[];
            VariadicLogic$RPT01x2$SUBx1: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
            }[];
            VariadicLogic$RPT01x2: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            Match: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    statements: any;
                };
            }[];
            MatchStatement: ({
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    condition: any;
                    value: any;
                };
            } | {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    value: any;
                };
            })[];
            MatchStatement_list: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            _$RPT01x1: {
                name: string;
                symbols: {
                    token: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            _: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            __: {
                name: string;
                symbols: {
                    token: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
        };
    };
    lexer: {
        start: string;
        states: {
            root: {
                name: string;
                rules: ({
                    import: string[];
                    when?: undefined;
                    tag?: undefined;
                    highlight?: undefined;
                    goto?: undefined;
                    inset?: undefined;
                    pop?: undefined;
                } | {
                    when: RegExp;
                    tag: string[];
                    highlight: string;
                    import?: undefined;
                    goto?: undefined;
                    inset?: undefined;
                    pop?: undefined;
                } | {
                    when: RegExp;
                    tag: string[];
                    highlight: string;
                    goto: string;
                    import?: undefined;
                    inset?: undefined;
                    pop?: undefined;
                } | {
                    when: RegExp;
                    tag: string[];
                    import?: undefined;
                    highlight?: undefined;
                    goto?: undefined;
                    inset?: undefined;
                    pop?: undefined;
                } | {
                    when: string;
                    tag: string[];
                    highlight: string;
                    import?: undefined;
                    goto?: undefined;
                    inset?: undefined;
                    pop?: undefined;
                } | {
                    when: string;
                    tag: string[];
                    import?: undefined;
                    highlight?: undefined;
                    goto?: undefined;
                    inset?: undefined;
                    pop?: undefined;
                } | {
                    when: string;
                    tag: string[];
                    highlight: string;
                    inset: number;
                    import?: undefined;
                    goto?: undefined;
                    pop?: undefined;
                } | {
                    when: string;
                    tag: string[];
                    pop: number;
                    highlight: string;
                    import?: undefined;
                    goto?: undefined;
                    inset?: undefined;
                })[];
            };
            keywords: {
                name: string;
                rules: {
                    when: RegExp;
                    tag: string[];
                    highlight: string;
                }[];
            };
            dstring: {
                name: string;
                rules: ({
                    when: RegExp;
                    tag: string[];
                    highlight: string;
                    pop?: undefined;
                } | {
                    when: RegExp;
                    tag: string[];
                    highlight?: undefined;
                    pop?: undefined;
                } | {
                    when: string;
                    tag: string[];
                    pop: number;
                    highlight: string;
                })[];
            };
            sstring: {
                name: string;
                rules: ({
                    when: RegExp;
                    tag: string[];
                    highlight?: undefined;
                    pop?: undefined;
                } | {
                    when: RegExp;
                    tag: string[];
                    highlight: string;
                    pop?: undefined;
                } | {
                    when: string;
                    tag: string[];
                    pop: number;
                    highlight: string;
                })[];
            };
        };
    };
};
