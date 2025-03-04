// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_add(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "add" || head == "+";
}

export function generate_add(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'add' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::plus<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}
