// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_lambda(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "lambda" || head == "->";
}

export function generate_lambda(ast: string[] | string[][]): string {
    let [head, ...tail] = ast;
    if (tail.length == 2) {
        let result: string = "[](";
        result += generate_lambda_arguments(tail[0]);
        result += "){ return ";
        result += generate(tail[1]);
        result += "; }";
        return result;
    }
    else {
        assert(false, `'lambda' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
        return " /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ";
    }
}

function generate_lambda_arguments(args: string | string[]): string {
    if (args instanceof Array) {
        let result: string = "";
        for (let i = 0; i < args.length; i++) {
            result += `auto const& ${args[i]}`;
            if ((i + 1) < args.length) {
                result += ', ';
            }
        }
        return result;
    }
    else if (typeof args === 'string') {
        return `auto const& ${args}`;
    }
    else
    {
        assert(false, `invalid function argument <${args}> of type <${typeof args}>`);
        return "/* ERROR: INVALID FUNCTION ARGUMENT */";
    }
}
