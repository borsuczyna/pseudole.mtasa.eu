<template>
    <div class="server-background" :style="{
            '--bg-color': server.backgroundColor
        }">
        <div :class="['server', expanded ? 'expanded' : null]" :style="{'--banner': banner}">
            <Top :server="server"/>
            <Description :description="server.description"/>
            <Tags :tags="server.tags"/>
            <AddedBy :server="server" :style="{
                display: 'flex',
                alignItems: 'center'
            }"/>
            <Reactions :reactions="server.reactions" :can-add="true"/>
            <Comments :comments="server.comments" :can-add="true" :account="account"/>
            <Expand :click="expandServer"/>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.server-background {
    padding: 0.1em;
    background-image: linear-gradient(to top, rgba(var(--bg-color), 0.2), transparent 80%);
    border-radius: 0.5em;
}

.server {
    padding: 1em;
    background-color: $server-color;
    width: calc(100% - 2em);
    border-radius: 0.5em;
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0) -800px, rgb(22, 24, 29) 200px), var(--banner);
    background-size: 100%;
    overflow: hidden;
    text-align: center;
}
</style>

<script setup lang="ts">
import Top from './Top.vue';
import Description from './Description.vue';
import Tags from './Tags.vue';
import AddedBy from './AddedBy.vue';
import Reactions from '../Reactions/List.vue';
import Comments from '../Comments/Main.vue';
import Expand from './Expand.vue';

import { computed } from '@vue/reactivity';
import { ref } from 'vue';

import type { Server } from '@/types/Server';
import type { Author } from '@/types/Author';

const expanded = ref(false);

function expandServer() {
    expanded.value = !expanded.value;
}

const props = defineProps({
    server: {
        type: Object as () => Server,
        required: true
    },
    account: {
        type: Object as () => Author,
        required: false
    }
});

const banner = computed(() => {
    return `url("${props.server.banner}")`;
})
</script>