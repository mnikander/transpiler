// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_subtract(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "subtract" || head == "-";
}

export function generate_subtract(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'subtract' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::minus<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}

