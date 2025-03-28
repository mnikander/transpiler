// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node, generate, parse } from "../generate";

export interface Call extends Node {
    type: 'Call';
    func: Expression;
    args: Expression[];
}

export function make_call(ast: any[]): Call {
    let [head, ...tail] = ast;
    let f: Expression = parse(head);
    let a : Expression[] = [];
    for (let i = 0; i < tail.length; i++) {
        a.push(parse(tail[i]));
    }
    return {type: 'Call', func: f, args: a} as Call;
}

export function generate_call(ast: Call): string {
    let result = "";
    result += generate(ast.func);
    result += "(";
    for (let i = 0; i < ast.args.length; i++) {
        result += `${generate(ast.args[i])}`
        if ((i + 1) < ast.args.length) {
            result += ', ';
        }
    }
    result +=  ")";
    return result;
}
