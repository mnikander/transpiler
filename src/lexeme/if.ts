// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface If {
    type: 'If';
    condition: string; // TODO: change to Expression once everything is refactored
    trueExpr: string;
    falseExpr: string;
}

export function is_if(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "if"; // || head == "?";
}

export function make_if(ast: any): If {
    let [head, ...tail] = ast;
    assert(tail.length == 3, `'if' requires 3 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'If', condition: generate(tail[0]), trueExpr: generate(tail[1]), falseExpr: generate(tail[2])} as If;
}

export function generate_if(ast: If): string {
    return `((${ast.condition}) ? (${ast.trueExpr}) : (${ast.falseExpr}))`;
}