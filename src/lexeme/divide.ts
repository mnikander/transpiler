// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node, generate, parse } from "../generate";

export interface Divide extends Node {
    type: 'Divide';
    left: Expression;
    right: Expression;
}

export function is_divide(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "divide" || head == "/";
}

export function make_divide(ast: any): Divide {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'divide' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Divide', left: parse(tail[0]), right: parse(tail[1])} as Divide;
}

export function generate_divide(ast: Divide): string {
    return `std::divides<>{}(${generate(ast.left)}, ${generate(ast.right)})`;
}
