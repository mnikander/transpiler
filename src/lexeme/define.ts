// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Define {
    type: 'Define';
    identifier: string; // TODO: change to Expression once everything is refactored
    value: string;
}

export function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define";
}

export function make_define(ast: any): Define {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'define' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
    return {type: 'Define', identifier: generate(tail[0]), value: generate(tail[1])} as Define;
}

export function generate_define(ast: Define): string {
    return `auto const ${ast.identifier} = ${ast.value};\n`;
}
