// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Application {
    type: 'Application';
    func: string; // TODO: change to Expression once everything is refactored
    args: string[];
}

export function make_application(ast: any[]): Application {
    let [head, ...tail] = ast;
    let f: string = generate(head);
    let a : string[] = [];
    for (let i = 0; i < tail.length; i++) {
        a.push(generate(tail[i]));
    }
    return {type: 'Application', func: f, args: a} as Application;
}

export function generate_function_application(ast: Application): string {
    let result = "";
    result += ast.func;
    result += "(";
    for (let i = 0; i < ast.args.length; i++) {
        result += `${ast.args[i]}`
        if ((i + 1) < ast.args.length) {
            result += ', ';
        }
    }
    result +=  ")";
    return result;
}
