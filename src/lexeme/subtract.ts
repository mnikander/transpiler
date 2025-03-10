// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document } from "../document";
import { generate } from "../generate";

export function is_subtract(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "subtract" || head == "-";
}

export function generate_subtract(doc: Document, ast: any): Document {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'subtract' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    doc.text += `std::minus<>{}(`;
    doc = generate(doc, tail[0]);
    doc.text += `, `;
    doc = generate(doc, tail[1]);
    doc.text += `)`;
    return doc;
}

