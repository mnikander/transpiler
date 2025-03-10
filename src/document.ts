// Copyright (c) 2025 Marco Nikander

export interface Document {
    filename: string;
    text: string;
    lambda_counter: number;
};

export function write(doc: Document, text: string): Document {
    doc.text += text;
    return doc;
}
