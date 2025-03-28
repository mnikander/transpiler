// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Atom, parse_atom } from "./node/atom";
import { Add, is_add, parse_add } from "./node/add";
import { Call, parse_call } from "./node/call";
import { Define, is_define, parse_define } from "./node/define";
import { Display, is_display, parse_display } from "./node/display";
import { Divide, is_divide, parse_divide } from "./node/divide";
import { Error, is_error, parse_error } from "./node/error";
import { Equal, is_equal, parse_equal } from "./node/equal";
import { If, is_if, parse_if } from "./node/if";
import { Lambda, is_lambda, parse_lambda } from "./node/lambda";
import { Multiply, is_multiply, parse_multiply } from "./node/multiply";
import { Subtract, is_subtract, parse_subtract } from "./node/subtract";
import { Expression } from "./common";

// TODO: set reasonable type information for the 'ast' parameter
export function parse(ast: any): Expression {
    if (ast instanceof Array) {
        if (is_display(ast)) {
            let node: Display = parse_display(ast);
            return node;
        }
        else if (is_error(ast)) {
            let node: Error = parse_error(ast);
            return node;
        }
        else if (is_add(ast)) {
            let node: Add = parse_add(ast);
            return node;
        }
        else if (is_subtract(ast)) {
            let node: Subtract = parse_subtract(ast);
            return node;
        }
        else if (is_multiply(ast)) {
            let node: Multiply = parse_multiply(ast);
            return node;
        }
        else if (is_divide(ast)) {
            let node: Divide = parse_divide(ast);
            return node;
        }
        else if (is_equal(ast)) {
            let node: Equal = parse_equal(ast);
            return node;
        }
        else if (is_define(ast)) {
            let node: Define = parse_define(ast);
            return node;
        }
        else if (is_lambda(ast)) {
            let node: Lambda = parse_lambda(ast);
            return node;
        }
        else if (is_if(ast)) {
            let node: If = parse_if(ast);
            return node;
        }
        else {
            let node: Call = parse_call(ast);
            return node;
        }
    }
    else if (typeof ast !== 'undefined') {
        let node: Atom = parse_atom(ast);
        return node;
    }
    else {
        assert(false, "undefined node");
    }
}
