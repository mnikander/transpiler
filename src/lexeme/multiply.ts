// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document, write } from "../document";
import { generate } from "../generate";

export function is_multiply(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "multiply" || head == "*";
}

export function generate_multiply(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'multiply' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    doc = write(doc, 'std::multiplies<>{}(');
    doc = generate(doc, tail[0]);
    doc = write(doc, ', ');
    doc = generate(doc, tail[1]);
    doc = write(doc, ')');
    return doc;
}
