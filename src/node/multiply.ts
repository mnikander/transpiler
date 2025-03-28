// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node } from "../common";
import { generate } from "../generate";
import { parse } from "../parse";

export interface Multiply extends Node {
    type: 'Multiply';
    left: Expression;
    right: Expression;
}

export function is_multiply(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "multiply" || head == "*";
}

export function make_multiply(ast: any): Multiply {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'multiply' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Multiply', left: parse(tail[0]), right: parse(tail[1])} as Multiply;
}

export function generate_multiply(ast: Multiply): string {
    return `std::multiplies<>{}(${generate(ast.left)}, ${generate(ast.right)})`;
}
