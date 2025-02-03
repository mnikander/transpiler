// Copyright (c) 2025 Marco Nikander

export interface Node {
    readonly lexeme: string;
    value: any;
    generate(): string;
}
