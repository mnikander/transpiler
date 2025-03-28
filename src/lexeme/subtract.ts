// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Subtract {
    type: 'Subtract';
    left: string; // TODO: change to Expression once everything is refactored
    right: string;
}

export function is_subtract(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "subtract" || head == "-";
}

export function make_subtract(ast: any): Subtract {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'subtract' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Subtract', left: generate(tail[0]), right: generate(tail[1])} as Subtract;
}

export function generate_subtract(ast: Subtract): string {
    return `std::minus<>{}(${ast.left}, ${ast.right})`;
}
