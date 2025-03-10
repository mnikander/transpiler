// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document, write } from "../document";
import { generate } from "../generate";

export function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define";
}

export function generate_define(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    if (tail.length == 1) {
        doc = write(doc, 'auto const ');
        doc = generate(doc, tail[0]);
        doc = write(doc, ';');
    }
    else if (tail.length == 2) {
        doc = write(doc, 'auto const ');
        doc = generate(doc, tail[0]);
        doc = write(doc, ' = ');
        doc = generate(doc, tail[1]);
        doc = write(doc, ';\n');
    } else {
        assert(false, `'define' requires 1 or 2 arguments, ${tail.length} provided <${tail.toString}>`);
        doc = write(doc, ' /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ');
    }
    return doc;
}
