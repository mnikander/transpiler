// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Atom } from "./atom";
import { Expression, Node } from "../common";
import { generate } from "../generate";
import { parse } from "../parse";

export interface Define extends Node {
    type: 'Define';
    identifier: Atom;
    value: Expression;
}

export function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define";
}

export function parse_define(ast: any): Define {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'define' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
    return {type: 'Define', identifier: parse(tail[0]), value: parse(tail[1])} as Define;
}

export function generate_define(ast: Define): string {
    return `auto const ${generate(ast.identifier)} = ${generate(ast.value)};\n`;
}
