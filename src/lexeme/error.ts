// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Error {
    type: 'Error';
    arg: string; // TODO: change to Expression once everything is refactored
}

export function is_error(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "error";
}

export function make_error(ast: any): Error {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'error' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Error', arg: generate(tail[0]).toString()} as Error;
}

export function generate_error(ast: Error): string {
    return `std::cerr << "Error: " << ${ast.arg} << std::endl;\nstd::abort();\n`;
}
