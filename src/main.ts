// Copyright (c) 2025 Marco Nikander

import { cpp_toolchain } from "./cpp_toolchain";
import { Document } from "./document";
import { generate } from './generate';

// (display "Hello, world.")
let text = ["display", "\"Hello, world.\""];

// (display (add 1 2))
let addition = ["display", ["add", 1, 2]];
let doc: Document = {
    filename: "main",
    main: "",
    lambda_counter: 0
};
doc = generate(doc, text);
doc = generate(doc, addition);
const result: string = cpp_toolchain(doc);
console.log(result);
