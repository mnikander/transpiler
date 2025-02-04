// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Application, Data, Display, Float, Integer, String, Variable } from "./nodes";

export function generate(data: Data) : string {
    if (data.lexeme === "Display") {
        return generate_display(data as Display);
    }
    else if (data.lexeme === "Float") {
        return generate_float(data as Float);
    }
    else if (data.lexeme === "Integer") {
        return generate_integer(data as Integer);
    }
    else if (data.lexeme === "String") {
        return generate_string(data as String);
    }
    else if(data.lexeme === "Application") {
        return generate_application(data as Application);
    }
    else if(data.lexeme === "Variable") {
        return generate_variable(data as Variable);
    }
    else {
        assert(false,`Invalid lexeme passed to code generation: ${data.lexeme.toString()}`);
        return `" /* ERROR: INVALID LEXEME */ "`;
    }
}

function generate_display(data: Display): string {
    return `std::cout << ${generate(data.value)} << std::endl;`;
}

function generate_float(data: Float): string {
    return data.value.toString() + 'f';
}

function generate_integer(data: Integer): string {
    return data.value.toString() + 'l';
}

function generate_string(data: String): string {
    return '"' + data.value + '"';
}

function generate_variable(data: Variable): string {
    return data.value.toString();
}

function generate_application(data: Data): string {

    if(data.value instanceof Array && data.value.length > 0) {
        const [head, ...tail] = data.value;
        switch (head.value) {
            case "add":
                return `std::plus<>{}(${comma_separate(tail)})`;
            case "define":
                return generate_define(tail);
            default:
                assert(false, `Invalid application of function: '${data.value[0].toString()}'.`);
                return "";
        }
    }
    else {
        assert(false, `Invalid function application: ${data.value.toString()}`);
        return " /* ERROR: INVALID FUNCTION APPLICATION */ ";
    }
}

function generate_define(data: Data[]): string {
    let result: string = "";
    assert(data.length >= 1, "'define' has no arguments.");
    result += `auto const ${data[0].value}`;
    if (data.length == 1) {
        result += ";";
    }
    else if (data.length == 2) {
        result += ` = ${data[1].value};`;
    } else {
        assert(false, `'define' has too many arguments: ${data.length}`)
    }
    return result;
}

function comma_separate(data: Data[]): string {
    let result = "";
    if(data.length > 0) {
        result += generate(data[0]);
        for (let i = 1; i < data.length; i++) {
            result += ', ' + generate(data[i]);
        }
    }
    return result;
}
