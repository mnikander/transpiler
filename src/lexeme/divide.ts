// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Divide {
    type: 'Divide';
    left: string; // TODO: change to Expression once everything is refactored
    right: string;
}

export function is_divide(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "divide" || head == "/";
}

export function make_divide(ast: any): Divide {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'divide' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Divide', left: generate(tail[0]), right: generate(tail[1])} as Divide;
}

export function generate_divide(ast: Divide): string {
    return `std::divides<>{}(${ast.left}, ${ast.right})`;
}
