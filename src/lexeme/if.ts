// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_if(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "if"; // || head == "?";
}

export function generate_if(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 3, `'if' requires 3 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `((${generate(tail[0])}) ? (${generate(tail[1])}) : (${generate(tail[2])}))`;
}
