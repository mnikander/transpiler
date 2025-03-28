// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node } from "../common";
import { generate } from "../generate";
import { parse } from "../parse";

export interface Error extends Node {
    type: 'Error';
    arg: Expression;
}

export function is_error(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "error";
}

export function parse_error(ast: any): Error {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'error' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Error', arg: parse(tail[0])} as Error;
}

export function generate_error(ast: Error): string {
    return `std::cerr << "Error: " << ${generate(ast.arg)} << std::endl;\nstd::abort();\n`;
}
