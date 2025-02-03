// Copyright (c) 2025 Marco Nikander

import { cpp_toolchain } from "./utility/cpp_toolchain";

let filename: string = "main";
let content: string = 'std::cout << "Hello, world." << std::endl;';
const result: string = cpp_toolchain(filename, content);
console.log(result);
