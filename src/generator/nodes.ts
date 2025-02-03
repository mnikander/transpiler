// Copyright (c) 2025 Marco Nikander

export interface Node {
    readonly $type: string;
    value: any;
    generate(): string;
}
