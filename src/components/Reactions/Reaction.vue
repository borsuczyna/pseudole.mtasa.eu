<template>
    <div
        :reaction="reaction"
        :class="['reaction']"
    >
        <img class="emoji" draggable="false" :alt="reaction.reaction" :src="emojiImage"/>
        <div class="reaction-count">{{ reaction.usersReacted.length }}</div>
    </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.reaction {
    background-color: $reaction-color;
    border: $reaction-border;
    border-radius: $reaction-border-radius;
    padding: $reaction-padding;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9em;

    &:hover {
        background-color: $reaction-color-hover;
        border: $reaction-border-hover;
        color: rgba(255, 255, 255, 1);
    }

    & .emoji {
        width: 1em;
    }
}
</style>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import Twemoji from 'twemoji';
import type { Reaction as ReactionType } from '@/types/Reaction';

const props = defineProps({
    reaction: {
        type: Object as () => ReactionType,
        required: true
    }
});

const emojiImage = computed(() => {
    let DOMCode: string = Twemoji.parse(props.reaction.reaction);
    let regex = /src="([^"]+)"/.exec(DOMCode);
    return (regex && regex[1]) ? regex[1] : '';
});
</script>