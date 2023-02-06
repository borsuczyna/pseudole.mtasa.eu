<template>
    <div class="server-top">
        <img class="server-logo" :src="server.logo" alt="logo">
        <div class="server-info">
            <div class="server-name">{{ server.name }}</div>
            <div class="server-players">
                <img src="/Public/group.png" :style="{width: '15px', height: '14px'}" alt="players icon"/>
                <!-- if server is offline, display offline text -->
                <b v-if="server.players.players == 0" class="server-offline">Offline</b>

                <!-- if is online, display players -->
                <div v-if="server.players.players > 0">
                    <b>{{ server.players.players }}/{{ server.players.maxPlayers }}</b> Online
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.server-top {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

.server-logo {
    height: 2.8em;
    aspect-ratio: 1/1;
    background-color: $server-logo-background;
    border-radius: $server-logo-border-radius;
    border: $server-logo-border;
    transition: 0.2s;

    &:hover {
        height: 3.3em;
    }
}

.server-name {
    font-family: 'Whitney', sans-serif;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-align: left;
}

.server-players {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.3em;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8em;
    color: rgba(255,255,255,0.7);

    & b {
        color: rgb(0, 255, 183);
        text-shadow: 0 0 15px rgba(0, 255, 183, 0.471);
        letter-spacing: 0.04em;
    }
}

.server-offline, .server-offline b {
    color: rgb(168, 50, 50) !important;
    text-shadow: 0 0 15px rgba(168, 50, 50, 0.471) !important;
    letter-spacing: 0.04em;
}
</style>

<script setup lang="ts">
import type { Server } from '@/types/Server';

defineProps({
    server: {
        type: Object as () => Server,
        required: true
    }
});
</script>