// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Atom, generate_atom, make_atom } from "./lexeme/atom";
import { Application, generate_function_application, make_application } from "./lexeme/application";
import { Add, is_add, generate_add, make_add } from "./lexeme/add";
import { Define, is_define, generate_define, make_define } from "./lexeme/define";
import { Display, is_display, generate_display, make_display } from "./lexeme/display";
import { Divide, is_divide, generate_divide, make_divide } from "./lexeme/divide";
import { Error, is_error, generate_error, make_error } from "./lexeme/error";
import { Multiply, is_multiply, generate_multiply, make_multiply } from "./lexeme/multiply";
import { Subtract, is_subtract, generate_subtract, make_subtract } from "./lexeme/subtract";
import { Equal, is_equal, generate_equal, make_equal } from "./lexeme/equal";
import { Lambda, is_lambda, generate_lambda, make_lambda } from "./lexeme/lambda";
import { If, is_if, generate_if, make_if } from "./lexeme/if";

export type Expression = Add | Application | Atom | Define | Display | Divide | Equal | Error | If | Lambda | Multiply | Subtract;

// TODO: set reasonable type information for the 'ast' parameter
export function generate(ast: any): string {
    if (ast instanceof Array) {
        if (is_display(ast)) {
            let node: Display = make_display(ast);
            return generate_display(node);
        }
        else if (is_error(ast)) {
            let node: Error = make_error(ast);
            return generate_error(node);
        }
        else if (is_add(ast)) {
            let node: Add = make_add(ast);
            return generate_add(node);
        }
        else if (is_subtract(ast)) {
            let node: Subtract = make_subtract(ast);
            return generate_subtract(node);
        }
        else if (is_multiply(ast)) {
            let node: Multiply = make_multiply(ast);
            return generate_multiply(node);
        }
        else if (is_divide(ast)) {
            let node: Divide = make_divide(ast);
            return generate_divide(node);
        }
        else if (is_equal(ast)) {
            let node: Equal = make_equal(ast);
            return generate_equal(node);
        }
        else if (is_define(ast)) {
            let node: Define = make_define(ast);
            return generate_define(node);
        }
        else if (is_lambda(ast)) {
            let node: Lambda = make_lambda(ast);
            return generate_lambda(node);
        }
        else if (is_if(ast)) {
            let node: If = make_if(ast);
            return generate_if(node);
        }
        else {
            let node: Application = make_application(ast);
            return generate_function_application(node);
        }
    }
    else if (typeof ast !== 'undefined') {
        let node: Atom = make_atom(ast);
        return generate_atom(node);
    }
    else {
        assert(false, "undefined node");
        return "/* ERROR: UNDEFINED NODE */";
    }
}
