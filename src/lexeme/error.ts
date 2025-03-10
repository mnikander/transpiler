// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document, write } from "../document";
import { generate } from "../generate";

export function is_error(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "error";
}

export function generate_error(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'error' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    doc = write(doc, 'std::cerr << "Error: " << ');
    doc = generate(doc, tail[0]);
    doc = write(doc, ' << std::endl;\nstd::abort();\n');
    return doc;
}
