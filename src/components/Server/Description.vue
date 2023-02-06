<template>
    <div class="server-description">{{ description }}</div>
</template>

<style lang="scss">
.server-description {
    margin-top: 0.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 0.8em;
    max-height: 5em;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: 1s;
    color: rgb(175, 175, 175);
    text-align: left;
    margin-top: 1.5em;
}

.server.expanded .server-description {
    max-height: 70em;
}
</style>

<script setup lang="ts">
import type { Server } from '@/types/Server';

defineProps({
    description: {
        type: String,
        required: true
    }
});
</script>