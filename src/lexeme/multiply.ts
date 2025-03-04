// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_multiply(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "multiply" || head == "*";
}

export function generate_multiply(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'multiply' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::multiplies<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}
