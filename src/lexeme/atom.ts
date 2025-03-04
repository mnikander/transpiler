// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function generate_atom(ast: any): string {
    if (typeof ast === 'string') {
        if (ast == "True") {
            return "true";
        }
        else if (ast === "False") {
            return "false";
        }
        else {
            return ast;
        }
    }
    else if (ast !== Object(ast)) { // primitive data-type (not an object)
        return ast.toString();
    }
    else {
        assert(false, `invalid symbol <${ast.toString()}> of type <${typeof ast}>`);
        return "/* ERROR: INVALID SYMBOL */";
    }
}
