// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Atom, generate_atom, make_atom } from "./node/atom";
import { Add, is_add, generate_add, make_add } from "./node/add";
import { Call, generate_call, make_call } from "./node/call";
import { Define, is_define, generate_define, make_define } from "./node/define";
import { Display, is_display, generate_display, make_display } from "./node/display";
import { Divide, is_divide, generate_divide, make_divide } from "./node/divide";
import { Error, is_error, generate_error, make_error } from "./node/error";
import { Multiply, is_multiply, generate_multiply, make_multiply } from "./node/multiply";
import { Subtract, is_subtract, generate_subtract, make_subtract } from "./node/subtract";
import { Equal, is_equal, generate_equal, make_equal } from "./node/equal";
import { Lambda, is_lambda, generate_lambda, make_lambda } from "./node/lambda";
import { If, is_if, generate_if, make_if } from "./node/if";

export interface Node {
    type: string;
}

export type Expression = Add | Atom | Call | Define | Display | Divide | Equal | Error | If | Lambda | Multiply | Subtract;

// TODO: set reasonable type information for the 'ast' parameter
export function parse(ast: any): Expression {
    if (ast instanceof Array) {
        if (is_display(ast)) {
            let node: Display = make_display(ast);
            return node;
        }
        else if (is_error(ast)) {
            let node: Error = make_error(ast);
            return node;
        }
        else if (is_add(ast)) {
            let node: Add = make_add(ast);
            return node;
        }
        else if (is_subtract(ast)) {
            let node: Subtract = make_subtract(ast);
            return node;
        }
        else if (is_multiply(ast)) {
            let node: Multiply = make_multiply(ast);
            return node;
        }
        else if (is_divide(ast)) {
            let node: Divide = make_divide(ast);
            return node;
        }
        else if (is_equal(ast)) {
            let node: Equal = make_equal(ast);
            return node;
        }
        else if (is_define(ast)) {
            let node: Define = make_define(ast);
            return node;
        }
        else if (is_lambda(ast)) {
            let node: Lambda = make_lambda(ast);
            return node;
        }
        else if (is_if(ast)) {
            let node: If = make_if(ast);
            return node;
        }
        else {
            let node: Call = make_call(ast);
            return node;
        }
    }
    else if (typeof ast !== 'undefined') {
        let node: Atom = make_atom(ast);
        return node;
    }
    else {
        assert(false, "undefined node");
    }
}

export function generate<T extends Expression>(node: T): string {
    if (node.type == 'Display') {
        return generate_display(node as Display);
    }
    else if (node.type == 'Error') {
        return generate_error(node as Error);
    }
    else if (node.type == 'Add') {
        return generate_add(node as Add);
    }
    else if (node.type == 'Subtract') {
        return generate_subtract(node as Subtract);
    }
    else if (node.type == 'Multiply') {
        return generate_multiply(node as Multiply);
    }
    else if (node.type == 'Divide') {
        return generate_divide(node as Divide);
    }
    else if (node.type == 'Equal') {
        return generate_equal(node as Equal);
    }
    else if (node.type == 'Define') {
        return generate_define(node as Define);
    }
    else if (node.type == 'Lambda') {
        return generate_lambda(node as Lambda);
    }
    else if (node.type == 'If') {
        return generate_if(node as If);
    }
    else if (node.type == 'Call') {
        return generate_call(node as Call);
    }
    else if (node.type == 'Atom') {
        return generate_atom(node as Atom);
    }
    else {
        assert(false, "undefined node");
        return "/* ERROR: UNDEFINED NODE */";
    }
}
