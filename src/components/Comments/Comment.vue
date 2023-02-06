<template>
    <div class="comment">
        <div class="comment-data">
            <div class="comment-top">
                <User :user="comment.author" size="0.9em"/>
                <Moment :date="new Date(comment.addedAt)" :style="{
                    fontSize: '0.8em',
                    color: 'rgba(255, 255, 255, 0.5)'
                }"/>
            </div>
            <div class="comment-content" v-html="description"></div>
            <div class="comment-attachments">
                <img v-for="attachment in comment.attachments" :src="`${apiURI}/Public/uploads/${attachment}`" alt="Załącznik"/>
            </div>
        </div>
        <div class="comment-options">
           <img src="/Public/trashwhite.png"/>
        </div>
    </div>
</template>

<style lang="scss">
.comment {
    background-color: rgba(35, 39, 46, 0.3);
    border: 1px solid rgba(32, 37, 50, 0.7);
    padding: 0.5em;
    border-radius: 0.25em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.comment-data {
    flex-grow: 1;
}

.comment-top {
    display: flex;
    gap: 0.4em;
    align-items: center;
}

.comment-content {
    font-size: 0.85em;
    padding: 0.3em;
    color: rgb(175,175,175);
    font-weight: 500;
}

.comment-content .emoji {
    width: 1.5em;
}

.comment-attachments {
    display: flex;
    gap: 0.5em;
}

.comment-attachments img {
    margin-top: 0.5em;
    padding: 0.25em;
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.02);
    max-width: 7em;
    max-height: 4em;
    width: auto;
    height: auto;
    border-radius: 0.4em;
    cursor: zoom-in;
    transition: 0.1s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
}

.comment-options {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0.4em;
    gap: 0.5em;

    & img {
        width: 1.2em;
        opacity: 0.2;
        transition: 0.1s;
        cursor: pointer;

        &:hover {
            width: 1.2em;
            opacity: 0.5;
            filter: drop-shadow(0 0 7px rgba(255, 255, 255, 0.25));
        }
    }
}
</style>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import Twemoji from 'twemoji';
import type { Comment } from '@/types/Comment';
import User from '../User.vue';
import Moment from '../Moment.vue';
import { apiURI } from '@/services/main';

const props = defineProps({
    comment: {
        type: Object as () => Comment,
        required: true
    }
});

const description = computed(() => {
    return Twemoji.parse(props.comment.content);
});
</script>