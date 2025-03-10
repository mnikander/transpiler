// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document, write } from "../document";
import { generate } from "../generate";

export function generate_function_application(doc: Document, ast: any[]): Document {
    let [head, ...tail] = ast;
    doc = generate(doc, head);
    doc = write(doc, '(');
    for (let i = 0; i < tail.length; i++) {
        doc = generate(doc, tail[i]);
        if ((i + 1) < tail.length) {
            doc = write(doc, ', ');
        }
    }
    doc = write(doc, ')');
    return doc;
}
