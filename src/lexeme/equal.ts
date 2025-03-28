// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Equal {
    type: 'Equal';
    left: string; // TODO: change to Expression once everything is refactored
    right: string;
}

export function is_equal(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "equal" || head == "==";
}

export function make_equal(ast: any): Equal {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'equal' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Equal', left: generate(tail[0]), right: generate(tail[1])} as Equal;
}

export function generate_equal(ast: Equal): string {
    return `std::equal_to<>{}(${ast.left}, ${ast.right})`;
}
