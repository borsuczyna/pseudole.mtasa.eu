import type { Author } from "./Author";

export interface Reaction {
    usersReacted: Author[];
    reaction: string;
}