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
export default GWLanguage;
declare function GWLanguage(): {
    grammar: {
        start: string;
        rules: {
            MC_Body: ({
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
            MC_Statements: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Statement: ({
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
            MC_Assignment: {
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
            MC_DeclareVar: {
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
            MC_Return: {
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
            MC_DeclareFunction: {
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
            MC_IfBlock: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_ScanBlock: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_KVInIterator: {
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
            MC_ConditionLoop: {
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
            MC_LoopBlock: {
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
            MC_Block: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Exp_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Exp_ss: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Exp: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_ExpOr: ({
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
            MC_ExpAnd: ({
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
            MC_ExpCompare: ({
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
            MC_ExpConcat: ({
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
            MC_ExpSum: ({
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
            MC_ExpProduct: ({
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
            MC_ExpUnary: ({
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
            MC_ExpPower: ({
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
            MC_Atom: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Constant: {
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
            MC_Reference: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => {
                    type: string;
                    path: any;
                };
            }[];
            MC_Path: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Word: {
                name: string;
                symbols: {
                    token: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Group: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Number: ({
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
            MC_NegativeNumber: {
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
            MC_String: {
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
            MC_StringInner: {
                name: string;
                symbols: (string | {
                    token: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_StringEscape: {
                name: string;
                symbols: {
                    token: string;
                }[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Array: {
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
            MC_Object: {
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
            MC_Prop_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Prop: ({
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
            MC_Query$RPT01x1$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            MC_Query$RPT01x1: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Query$RPT01x2$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            MC_Query$RPT01x2: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Query$RPT01x3$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            MC_Query$RPT01x3: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Query$RPT01x4$SUBx1: {
                name: string;
                symbols: string[];
            }[];
            MC_Query$RPT01x4: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Query: {
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
            MC_QQuery: {
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
            MC_QSort$RPT01x1$SUBx1: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
            }[];
            MC_QSort$RPT01x1: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_QSort: {
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
            MC_QFilter: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_QYield: {
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
            MC_QCluster: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_QSlice: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Range: {
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
            MC_Alias: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Alias_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Lambda: {
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
            MC_FunctionArg: ({
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
            MC_FunctionArg_list: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_PropName: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_FunctionCall: {
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
            MC_VariadicLogic$RPT01x1$SUBx1: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
            }[];
            MC_VariadicLogic$RPT01x1: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_VariadicLogic: {
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
            MC_VariadicLogic$RPT01x2$SUBx1: {
                name: string;
                symbols: (string | {
                    literal: string;
                })[];
            }[];
            MC_VariadicLogic$RPT01x2: {
                name: string;
                symbols: string[];
                postprocess: ({ data }: {
                    data: any;
                }) => any;
            }[];
            MC_Match: {
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
            MC_MatchStatement: ({
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
            MC_MatchStatement_list: {
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
            mc_root: {
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
                    goto: string;
                    import?: undefined;
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
            mc_keywords: {
                name: string;
                rules: {
                    when: RegExp;
                    tag: string[];
                    highlight: string;
                }[];
            };
            mc_dqstring: {
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
            mc_sqstring: {
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
