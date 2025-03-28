// Copyright (c) 2025 Marco Nikander

import { cpp_toolchain } from "./cpp_toolchain";
import { generate } from "./generate";
import { parse } from "./parse";

// (display "Hello, world.")
let text = ["display", "\"Hello, world.\""];

// (display (add 1 2))
let addition = ["display", ["add", 1, 2]];

let filename: string = "main";
let content: string = generate(parse(text)) + generate(parse(addition));
const result: string = cpp_toolchain(filename, content);
console.log(result);
