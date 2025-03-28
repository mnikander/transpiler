// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Multiply {
    type: 'Multiply';
    left: string; // TODO: change to Expression once everything is refactored
    right: string;
}

export function is_multiply(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "multiply" || head == "*";
}

export function make_multiply(ast: any): Multiply {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'multiply' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Multiply', left: generate(tail[0]), right: generate(tail[1])} as Multiply;
}

export function generate_multiply(ast: any): string {
    return `std::multiplies<>{}(${ast.left}, ${ast.right})`;
}
