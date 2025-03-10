// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document } from "../document";
import { generate } from "../generate";

export function is_lambda(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "lambda" || head == "->";
}

export function generate_lambda(doc: Document, ast: string[] | string[][]): Document {
    let [head, ...tail] = ast;
    if (tail.length == 2) {
        doc.text += "[](";
        doc.text += lambda_arguments(tail[0]);
        doc.text += "){ return ";
        doc = generate(doc, tail[1]);
        doc.text += "; }";
    }
    else {
        assert(false, `'lambda' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
        doc.text += " /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ";
    }
    return doc;
}

function lambda_arguments(args: string | string[]): string {
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
