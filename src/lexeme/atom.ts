// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export interface Atom {
    type: string;
    value: string;
}

export function make_atom(ast: any): Atom {
    if (typeof ast === 'string') {
        if (ast === "True") {
            return {type: 'Boolean', value: 'true'} as Atom;
        }
        else if (ast === "False") {
            return {type: 'Boolean', value: 'false'} as Atom;
        }
        else {
            return {type: 'Other', value: ast} as Atom;
        }
    }
    else if (ast !== Object(ast)) { // primitive data-type (not an object)
        if (typeof ast === 'number') {
            return {type: 'Number', value: ast.toString()} as Atom;
        }
        else {
            return {type: 'OtherPrimitive', value: ast.toString()} as Atom;
        }
    }
    assert(false, `invalid symbol <${ast.toString()}> of type <${typeof ast}>`);
    return {type: 'Undefined', value: "/* ERROR: INVALID SYMBOL */"} as Atom;
}

export function generate_atom(node: Atom): string {
    return node.value;
}
