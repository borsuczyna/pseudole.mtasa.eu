<template>
    <div class="reactions">
        <Reaction v-for="reaction in computedReactions" :reaction="reaction"/>
        <Add v-if="canAdd"/>
    </div>
</template>

<style lang="scss">
.reactions {
    display: flex;
    gap: 0.3em;
    margin-top: 0.6em;
    flex-wrap: wrap;
}
</style>

<script setup lang="ts">
import Reaction from './Reaction.vue';
import Add from './Add.vue';
import { computed } from '@vue/reactivity';
import type { Reaction as ReactionType } from '@/types/Reaction';

const props = defineProps({
    reactions: {
        type: Array as () => ReactionType[],
        required: true
    },
    canAdd: {
        type: Boolean,
        default: false
    }
});

const computedReactions = computed(() => {
    return props.reactions.sort((a, b) => {
        return b.usersReacted.length - a.usersReacted.length;
    });
});
</script>