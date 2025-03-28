// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node } from "../common";
import { generate } from "../generate";
import { parse } from "../parse";

export interface Subtract {
    type: 'Subtract';
    left: Expression;
    right: Expression;
}

export function is_subtract(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "subtract" || head == "-";
}

export function make_subtract(ast: any): Subtract {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'subtract' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Subtract', left: parse(tail[0]), right: parse(tail[1])} as Subtract;
}

export function generate_subtract(ast: Subtract): string {
    return `std::minus<>{}(${generate(ast.left)}, ${generate(ast.right)})`;
}
