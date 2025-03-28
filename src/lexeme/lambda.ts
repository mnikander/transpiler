// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Lambda {
    type: 'Lambda';
    parameters: string[]; // TODO: change to Expression once everything is refactored
    value: string;
}

export function is_lambda(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "lambda" || head == "->";
}

export function make_lambda(ast: string[] | string[][]): Lambda {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'lambda' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
    let par: string[] = [];
    if (tail[0] instanceof Array) {
        par = tail[0];
    }
    else if (typeof tail[0] === 'string') {
        par.push(tail[0]);
    }
    return {type: 'Lambda', parameters: par, value: generate(tail[1])} as Lambda;
}

export function generate_lambda(ast: Lambda): string {
    let result: string = "[](";
    result += lambda_arguments(ast.parameters);
    result += "){ return ";
    result += ast.value;
    result += "; }";
    return result;
}

function lambda_arguments(args: string[]): string {
    if (args.length == 1){
        return `auto const& ${args[0]}`;
    }
    else if (args.length >= 2) {
        let result: string = "";
        for (let i = 0; i < args.length; i++) {
            result += `auto const& ${args[i]}`;
            if ((i + 1) < args.length) {
                result += ', ';
            }
        }
        return result;
    }
    else
    {
        assert(false, `invalid function argument <${args}> of type <${typeof args}>`);
        return "/* ERROR: INVALID FUNCTION ARGUMENT */";
    }
}
