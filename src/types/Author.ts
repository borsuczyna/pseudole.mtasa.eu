import type { Rank } from "./Rank";

export interface Author {
    username: string;
    avatar: string;
    id: string;
    rank: Rank;
};