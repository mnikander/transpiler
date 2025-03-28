// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node, generate, parse } from "../generate";
import { Atom } from "./atom";

export interface Lambda extends Node {
    type: 'Lambda';
    parameters: Atom[];
    value: Expression;
}

export function is_lambda(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "lambda" || head == "->";
}

export function make_lambda(ast: string[] | string[][]): Lambda {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'lambda' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
    let param: Expression[] = [];
    if (tail[0] instanceof Array) {
        for (let i = 0; i < tail[0].length; i++) {
            param[i] = parse(tail[0][i]);
        }
    }
    else if (typeof tail[0] === 'string') {
        param.push(parse(tail[0]));
    }
    return {type: 'Lambda', parameters: param, value: parse(tail[1])} as Lambda;
}

export function generate_lambda(ast: Lambda): string {
    let result: string = "[](";
    result += lambda_arguments(ast.parameters);
    result += "){ return ";
    result += generate(ast.value);
    result += "; }";
    return result;
}

function lambda_arguments(args: Expression[]): string {
    if (args.length == 1){
        return `auto const& ${generate(args[0])}`;
    }
    else if (args.length >= 2) {
        let result: string = "";
        for (let i = 0; i < args.length; i++) {
            result += `auto const& ${generate(args[i])}`;
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
