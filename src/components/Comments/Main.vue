<template>
    <div class="comments">
        Komentarze
        <div class="comments-list">
            <Comment v-for="comment in computedComments" :comment="comment"/>
            <Add v-if="canAdd" :account="account"/>
        </div>
    </div>
</template>

<style lang="scss">
.comments {
    margin-top: 1.5em;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8em;
    background-color: rgba(26, 31, 42, 0.3);
    border: 1px solid rgba(32, 37, 50, 0.5);
    padding: 0.5em;
    border-radius: 0.25em;
}

.comments-list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    color: #aaa;
    max-height: 200px;
    overflow-y: scroll;
    margin-top: 0.4em;
}
</style>

<script setup lang="ts">
import Comment from './Comment.vue';
import Add from './Add.vue';

import { computed } from '@vue/reactivity';

import type { Comment as CommentType } from '@/types/Comment';
import type { Author } from '@/types/Author';

const props = defineProps({
    comments: {
        type: Array as () => CommentType[],
        required: true
    },
    canAdd: {
        type: Boolean,
        default: false
    },
    account: {
        type: Object as () => Author,
        required: false
    }
});

const computedComments = computed(() => {
    return props.comments.sort((a: CommentType, b: CommentType) => {
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
    })
});
</script>