// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { Document } from "../src/document";

describe('C++ Toolchain', () => {

    // TODO: figure out why part of the error message still makes it through to the Vitest console
    //       maybe it's printing some stuff to stdout before the process exits with the error
    it('error message', () => {
        let doc: Document = {
            filename: "test_cpp_error",
            text: "",
            lambda_counter: 0
        };
        doc.text = 'provoke_error; // use an unknown variable name to cause a compilation error';
        const result: string = cpp_toolchain(doc).split('\n')[0];
        expect(result).toBe("Error while executing C++ toolchain:");
    });

    it('hello world', () => {
        let doc: Document = {
            filename: "test_cpp_hello",
            text: "",
            lambda_counter: 0
        };
        doc.text = 'std::cout << "Hello, world" << std::endl;';
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("Hello, world\n");
    });
});
