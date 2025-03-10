// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document } from "../document";

export function generate_atom(doc: Document, ast: any): Document {
    if (typeof ast === 'string') {
        if (ast == "True") {
            doc.text += "true";
        }
        else if (ast === "False") {
            doc.text += "false";
        }
        else {
            doc.text += ast;
        }
    }
    else if (ast !== Object(ast)) { // primitive data-type (not an object)
        doc.text += ast.toString();
    }
    else {
        assert(false, `invalid symbol <${ast.toString()}> of type <${typeof ast}>`);
        doc.text += "/* ERROR: INVALID SYMBOL */";
    }
    return doc;
}
