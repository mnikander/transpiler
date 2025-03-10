// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document, write } from "../document";
import { generate } from "../generate";

export function is_add(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "add" || head == "+";
}

export function generate_add(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'add' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    doc = write(doc, 'std::plus<>{}(');
    doc = generate(doc, tail[0]);
    doc = write(doc, ', ');
    doc = generate(doc, tail[1]);
    doc = write(doc, ')');
    return doc;
}
