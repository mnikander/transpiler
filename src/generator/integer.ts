// Copyright (c) 2025 Marco Nikander

export interface Integer {
    readonly $type: 'Integer';
    value: number;
}

export function generate_integer(node: Integer): string {
    return node.value.toString();
}
