// Copyright (c) 2025 Marco Nikander

export interface Data {
    readonly lexeme: string;
    value: any;
}

// Unit testing of the C++ toolchain depends on 'display' for every test.
// Display will be treated separately from all other functions for the time
// being, so that its implementation stays as simple and reliable as possible.
export interface Display extends Data {
    value: Data;
}

export interface Float extends Data {
    value: number;
}

export interface Integer extends Data {
    value: number;
}

export interface String extends Data {
    value: string;
}

export interface Application extends Data {
    value: any[];
}

export interface Variable extends Data {
    value: string;
}
