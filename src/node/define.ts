// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node, generate, parse } from "../generate";
import { Atom } from "./atom";

export interface Define extends Node {
    type: 'Define';
    identifier: Atom;
    value: Expression;
}

export function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define";
}

export function make_define(ast: any): Define {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'define' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
    return {type: 'Define', identifier: parse(tail[0]), value: parse(tail[1])} as Define;
}

export function generate_define(ast: Define): string {
    return `auto const ${generate(ast.identifier)} = ${generate(ast.value)};\n`;
}
