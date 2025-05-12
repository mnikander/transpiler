# Transpiler for Symbolic Expressions

This project transpiles symbolic expressions similar to those found in Lisp and Scheme to C++.
If you are unfamiliar with symbolic expressions, you can take a look at this brief [introduction](https://github.com/mnikander/lambda/blob/main/resources/symbolic_expression_intro.md).

The aim of this project is to experiment with a few language features and learn about compilers and transpilers.
The focus of this codebase is on the _code generation_ stage of the transpiler.

Further development was paused to pursue an [interpreter](https://github.com/mnikander/interpreter) instead, which implements a [lambda language](https://github.com/mnikander/lambda).
The hope is that the interpreter and this transpiler can be merged into a single codebase in the future, so that users can select whether they want to do direct evaluation or want to generate C++ code.

## Getting Started

```bash
sudo apt install nodejs npm g++ cmake libgtest-dev
git clone git@github.com:mnikander/transpiler.git
cd transpiler/
npm run setup    # the 'setup' target ensures the 'out/' and 'out/artifacts/' directories are created
npm run build    # build the transpiler and its C++ library
npm run test     # run the transpiler unit tests
npm run test_cpp # run the tests for the C++ library
npm run main     # build and run the example
```

Both the main function and the unit tests will automatically transpile their abstract syntax trees to C++ and then compile and execute the resulting programs. 
You can find all generated source files, executables, and result text files, in the directory `out/artifacts`, and you can run execute the programs manually from there.
**If** you wish to build the main program without immediately executing it, you can: `npm run build` and then and take a look at the generated code first.

---
**Copyright (c) 2025 Marco Nikander**
