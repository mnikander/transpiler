// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_divide(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "divide" || head == "/";
}

export function generate_divide(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'divide' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::divides<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}
