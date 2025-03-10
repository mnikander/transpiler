// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document } from "../document";
import { generate } from "../generate";

export function is_if(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "if"; // || head == "?";
}

export function generate_if(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    assert(tail.length == 3, `'if' requires 3 arguments, ${tail.length} provided: <${tail.toString()}>`);
    doc.text += `((`;
    doc = generate(doc, tail[0]);
    doc.text += `) ? (`;
    doc = generate(doc, tail[1]);
    doc.text += `) : (`;
    doc = generate(doc, tail[2]);
    doc.text += `))`;
    return doc;
}
