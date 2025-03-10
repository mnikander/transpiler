// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document } from "../document";
import { generate } from "../generate";

export function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define";
}

export function generate_define(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    if (tail.length == 1) {
        doc.text += "auto const ";
        doc = generate(doc, tail[0]);
        doc.text += ";";
    }
    else if (tail.length == 2) {
        doc.text += "auto const ";
        doc = generate(doc, tail[0]);
        doc.text += " = ";
        doc = generate(doc, tail[1]);
        doc.text += ";\n";
    } else {
        assert(false, `'define' requires 1 or 2 arguments, ${tail.length} provided <${tail.toString}>`);
        doc.text += " /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ";
    }
    return doc;
}
