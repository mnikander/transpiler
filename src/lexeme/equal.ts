// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_equal(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "equal" || head == "==";
}

export function generate_equal(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'equal' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::equal_to<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}
