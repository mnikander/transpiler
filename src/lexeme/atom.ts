// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Document, write } from "../document";

export function generate_atom(doc: Document, ast: any): Document {
    if (typeof ast === 'string') {
        if (ast == "True") {
            doc = write(doc, 'true');
        }
        else if (ast === "False") {
            doc = write(doc, 'false');
        }
        else {
            doc = write(doc, ast);
        }
    }
    else if (ast !== Object(ast)) { // primitive data-type (not an object)
        doc = write(doc, ast.toString());
    }
    else {
        assert(false, `invalid symbol <${ast.toString()}> of type <${typeof ast}>`);
        doc = write(doc, '/* ERROR: INVALID SYMBOL */');
    }
    return doc;
}
