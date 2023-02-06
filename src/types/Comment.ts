import type { Author } from "./Author";

export interface Comment {
    id: number;
    author: Author;
    content: string;
    addedAt: string;
    plus: number;
    attachments: string[];
};