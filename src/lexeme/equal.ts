// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document } from "../document";
import { generate } from "../generate";

export function is_equal(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "equal" || head == "==";
}

export function generate_equal(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'equal' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    doc.text += `std::equal_to<>{}(`;
    doc = generate(doc, tail[0]);
    doc.text += `, `;
    doc = generate(doc, tail[1]);
    doc.text += `)`;
    return doc;
}
