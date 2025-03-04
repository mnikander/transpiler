// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define";
}

export function generate_define(ast: any): string {
    let [head, ...tail] = ast;
    if (tail.length == 1) {
        return `auto const ${generate(tail[0])};`;
    }
    else if (tail.length == 2) {
        return `auto const ${generate(tail[0])} = ${generate(tail[1])};\n`;
    } else {
        assert(false, `'define' requires 1 or 2 arguments, ${tail.length} provided <${tail.toString}>`);
        return " /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ";
    }
}
