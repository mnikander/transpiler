// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node, generate, parse } from "../generate";

export interface Application extends Node {
    type: 'Application';
    func: Expression;
    args: Expression[];
}

export function make_application(ast: any[]): Application {
    let [head, ...tail] = ast;
    let f: Expression = parse(head);
    let a : Expression[] = [];
    for (let i = 0; i < tail.length; i++) {
        a.push(parse(tail[i]));
    }
    return {type: 'Application', func: f, args: a} as Application;
}

export function generate_function_application(ast: Application): string {
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
