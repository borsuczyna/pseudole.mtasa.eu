import type { Author } from "./Author";

export const Tags = [
    'RPG', 'RP', 'Race', 'Freeroam', 'DayZ',
    'Autorskie zasoby', 'Autorskie modele',
    'Wysokie zarobki', 'Średnie zarobki', 'Niskie zarobki',
    'Gangi', 'Organizacje', 'Bojówka', 'Strefy', 'Biznesy', 'Zrzuty zaopatrzenia',
    'Pseudol', 'Rekrutacja do administracji', 'Darmowe premium',
    'W trakcie prac', 'Rozwinięte frakcje', 'Niedługo start',
    'pystories', 'Navaxa', 'Nitro', 'direct'
];

export interface Comment {
    id: number;
    author: Author;
    content: string;
    addedAt: string;
    plus: number;
    attachments: string[];
};

interface Reaction {
    usersReacted: Author[];
    reaction: string;
}

export type Game = 'MTA' | 'FiveM';

interface APIPlayers {
    players: number;
    maxPlayers: number;
};

export interface Server {
    id: number;
    game: Game;
    name: string;
    logo: string;
    description: string;
    banner?: string;
    addedAt: Date | number;
    ip: string;
    addedBy: Author;
    tags: string[];
    backgroundColor?: string;
    images: string[];
    players: APIPlayers;
    comments: Comment[];
    reactions: Reaction[];
};