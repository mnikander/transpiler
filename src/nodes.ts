// Copyright (c) 2025 Marco Nikander

export interface Data {
    readonly lexeme: string;
    value: any;
}

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
