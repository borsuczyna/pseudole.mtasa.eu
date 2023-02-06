<template>
    <div class="added-by" :style="style">
        <div class="added-by-text">dodane przez</div>
        <User :user="server.addedBy"/>
        <Moment :date="new Date(server.addedAt)"/>
    </div>
</template>

<style lang="scss">
.added-by {
    margin-top: 0.8em;
    display: flex;
    gap: 0.6em;
    font-size: 0.65em;
    font-family: 'Poppins', sans-serif;
    color: gray;
    flex-wrap: wrap;
}
</style>

<script setup lang="ts">
import type { Server } from '@/types/Server';
import User from '../User.vue';
import Moment from '../Moment.vue';

defineProps({
    server: {
        type: Object as () => Server,
        required: true
    },
    style: {
        type: Object,
        required: false
    }
});
</script>