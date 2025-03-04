// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function generate_function_application(ast: any[]): string {
    let [head, ...tail] = ast;
    let result = "";
    result += generate(head);
    result += "(";
    for (let i = 0; i < tail.length; i++) {
        result += `${generate(tail[i])}`;
        if ((i + 1) < tail.length) {
            result += ', ';
        }
    }
    result +=  ")";
    return result;
}
