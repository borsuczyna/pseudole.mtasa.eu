<template>
    <div id="server-list">
        <!-- if it's still loading, display loading -->
        <Loading v-if="loading"/>

        <!-- otherwise, display servers -->
        <div v-for="server in servers" :key="server.id">
            <Server :server="server" :account="account"/>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

#server-list {
    background-color: $server-list-color;
    margin-inline: auto;
    width: calc(100% - 1em);
    max-width: 80em;
    padding: 0.5em;
    display: flex;
    color: white;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    border-radius: 0.2em;
    flex-direction: column;
    gap: 0.5em;
}
</style>

<script setup lang="ts">
import Server from "./Server/Main.vue";
import Loading from './Loading.vue';

import type { Server as ServerType } from "@/types/Server";
import type { Author } from "@/types/Author";

defineProps({
    servers: {
        type: Array as () => ServerType[],
        required: true,
        default: []
    },
    loading: {
        type: Boolean,
        default: false,
    },
    account: {
        type: Object as () => Author,
        required: false
    }
});
</script>