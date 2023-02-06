<template>
    <div class="add-comment">
        <div class="add-comment-inner">
            <img :src="account?.avatar" class="avatar"/>
            <textarea type="text" placeholder="Dodaj komentarz..." maxlength="250" rows="1" onKeyUp="updateCharsLimit(this)"></textarea>

            <div class="chars-left">-250</div>

            <div class="buttons">
                <img src="/Public/attachment.png"/>
                <img src="/Public/emote.png"/>
                <img src="/Public/send.png"/>
            </div>
        </div>
        
        <div class="comment-add-attachments"></div>
    </div>
</template>

<style lang="scss">
.add-comment {
    margin-top: 0.5em;
    background-color: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.02);
    padding: 0.5em;
    border-radius: 0.25em;
    display: flex;
    flex-direction: column;

    & .avatar {
        border-radius: 50%;
        border: 1px solid rgb(21, 21, 21);
        width: 2em;
    }

    & textarea {
        background: none;
        border: none;
        outline: none;
        resize: none;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 0.9em;
        flex-grow: 1;
        height: max-content;

        &::placeholder {
            color: rgb(78, 78, 78);
        }
    }
}

.chars-left {
    font-size: 0.8em;
}

.add-comment-inner {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-inline: 0.2em;

    & .buttons {
        display: flex;
        gap: 0.9em;
        margin-left: 0.5em;
    }

    & .buttons img {
        width: 1.2em;
        height: 1.2em;
        cursor: pointer;
        opacity: 0.2;
        transition: 0.2s;

        &:hover {
            opacity: 0.5;
        }
    }
}
</style>

<script setup lang="ts">
import type { Author } from '@/types/Author';

defineProps({
    account: {
        type: Object as () => Author,
        required: false
    }
});
</script>