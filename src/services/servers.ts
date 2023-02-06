import type { Server } from "@/types/Server";
import { apiURI } from "./main";

export async function fetchServers(): Promise<Server[]> {
    let result = await fetch(`${apiURI}/fetch/servers`);
    let servers = await result.json();
    return servers as Server[];
}