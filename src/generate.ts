// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document } from "./document";
import { generate_atom } from "./lexeme/atom";
import { generate_function_application } from "./lexeme/application";
import { is_add, generate_add } from "./lexeme/add";
import { is_define, generate_define } from "./lexeme/define";
import { is_display, generate_display } from "./lexeme/display";
import { is_divide, generate_divide } from "./lexeme/divide";
import { is_error, generate_error } from "./lexeme/error";
import { is_multiply, generate_multiply } from "./lexeme/multiply";
import { is_subtract, generate_subtract } from "./lexeme/subtract";
import { is_equal, generate_equal } from "./lexeme/equal";
import { is_lambda, generate_lambda } from "./lexeme/lambda";
import { is_if, generate_if } from "./lexeme/if";

// TODO: set reasonable type information for the 'ast' parameter
export function generate(doc: Document, ast: any): Document {
    if (ast instanceof Array) {
        if (is_display(ast)) {
            return generate_display(doc, ast);
        }
        else if (is_error(ast)) {
            return generate_error(doc, ast);
        }
        else if (is_add(ast)) {
            return generate_add(doc, ast);
        }
        else if (is_subtract(ast)) {
            return generate_subtract(doc, ast);
        }
        else if (is_multiply(ast)) {
            return generate_multiply(doc, ast);
        }
        else if (is_divide(ast)) {
            return generate_divide(doc, ast);
        }
        else if (is_equal(ast)) {
            return generate_equal(doc, ast);
        }
        else if (is_define(ast)) {
            return generate_define(doc, ast);
        }
        else if (is_lambda(ast)) {
            return generate_lambda(doc, ast);
        }
        else if (is_if(ast)) {
            return generate_if(doc, ast);
        }
        else {
            return generate_function_application(doc, ast);
        }
    }
    else if (typeof ast !== 'undefined') {
        return generate_atom(doc, ast);
    }
    else {
        assert(false, "undefined node");
        doc.text += "/* ERROR: UNDEFINED NODE */";
        return doc;
    }
}
