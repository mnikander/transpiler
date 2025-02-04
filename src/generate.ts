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
    else {
        assert(false,"Invalid lexeme passed to code generation.");
        return `" ERROR: INVALID LEXEME "`;
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
