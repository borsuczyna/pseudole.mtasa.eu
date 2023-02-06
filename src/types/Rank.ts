export interface Rank {
    id: number;
    name: string;
    color: string;
    bold: boolean;
    icon: string | null;
    priority: number;
    permissions: string[];
};