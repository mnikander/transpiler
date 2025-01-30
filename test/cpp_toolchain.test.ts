import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/utility/cpp_toolchain'

describe('C++ Toolchain', () => {

    it('hello world', () => {
        let filename: string = "hello";
        let content: string = 'std::cout << "Hello, world" << std::endl;';
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("Hello, world\n");
    });
});
