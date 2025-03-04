// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_error(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "error";
}

export function generate_error(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'error' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return `std::cerr << "Error: " << ${generate(tail[0])} << std::endl;\nstd::abort();\n`;
}
