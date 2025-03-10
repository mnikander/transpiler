// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document, write } from "../document";
import { generate } from "../generate";

export function is_display(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "display";
}

export function generate_display(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'display' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    doc = write(doc, 'std::cout << ');
    doc = generate(doc, tail[0]);
    doc = write(doc, ' << std::endl;\n');
    return doc;
}
