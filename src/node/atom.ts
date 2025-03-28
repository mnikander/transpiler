// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Node, generate } from "../generate";

export interface Atom extends Node {
    type: 'Atom';
    value: string;
}

export function make_atom(ast: any): Atom {
    if (typeof ast === 'string') {
        if (ast === "True") {
            return {type: 'Atom', value: 'true'} as Atom;
        }
        else if (ast === "False") {
            return {type: 'Atom', value: 'false'} as Atom;
        }
        else {
            return {type: 'Atom', value: ast} as Atom;
        }
    }
    else if (ast !== Object(ast)) { // primitive data-type (not an object)
        if (typeof ast === 'number') {
            return {type: 'Atom', value: ast.toString()} as Atom;
        }
        else {
            return {type: 'Atom', value: ast.toString()} as Atom;
        }
    }
    else {
        assert(false, `invalid symbol <${ast.toString()}> of type <${typeof ast}>`);
        return {type: 'Atom', value: "/* ERROR: INVALID SYMBOL */"} as Atom;
    }
}

export function generate_atom(node: Atom): string {
    return node.value;
}
