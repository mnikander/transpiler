// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Data, Display, Float, Integer, String } from "./nodes";

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
    else if(data.lexeme == "Application") {
        if(data.value instanceof Array && data.value.length > 0) {
            let body: string = "";
            body += generate_application(data);
            return body;
        }
        else {
            assert(false, `Invalid function application: ${data.value.toString()}`);
            return " /* ERROR: INVALID FUNCTION APPLICATION */ ";
        }
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

function generate_application(data: Data): string {
    let result: string = "";
    const [head, ...tail] = data.value;
    switch (head.value) {
        case "add":
            result += `std::plus<>{}(${comma_separate(tail)})`;
            break;
        default:
            assert(false, `Invalid application of function: '${data.value[0].toString()}'.`);
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
