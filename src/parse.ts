// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Atom, make_atom } from "./node/atom";
import { Add, is_add, make_add } from "./node/add";
import { Call, make_call } from "./node/call";
import { Define, is_define, make_define } from "./node/define";
import { Display, is_display, make_display } from "./node/display";
import { Divide, is_divide, make_divide } from "./node/divide";
import { Error, is_error, make_error } from "./node/error";
import { Equal, is_equal, make_equal } from "./node/equal";
import { If, is_if, make_if } from "./node/if";
import { Lambda, is_lambda, make_lambda } from "./node/lambda";
import { Multiply, is_multiply, make_multiply } from "./node/multiply";
import { Subtract, is_subtract, make_subtract } from "./node/subtract";
import { Expression } from "./common";

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
