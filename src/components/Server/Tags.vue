<template>
    <div class="server-tags">
        <div class="server-tag noselect" v-for="tag in tags">
            <img class="server-tag-icon" :src="`Public/icons/${(<TagList>tagList)[tag].icon}`" alt="tag icon">
            <div class="server-tag-name">{{ tag }}</div>
        </div>
    </div>
</template>

<style lang="scss">
.server-tags {
    margin-top: 1em;
    display: flex;
    gap: 0.3em;
    flex-wrap: wrap;
}

.server-tag {
    background-color: rgb(24, 31, 41);
    border: 1px solid rgba(33, 47, 67, 0.3);
    padding: 0.4em 0.6em;
    font-size: 0.8em;
    border-radius: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4em;
    color: rgb(150, 150, 150);
    transition: 0.1s;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: white;
        background-color: rgb(24, 36, 53);
        border: 1px solid rgba(36, 56, 83, 0.3);
    }

    &.active {
        background-color: rgb(33, 65, 107);
        color: white;
        text-shadow: 1px 1px 2px black;
        box-shadow: 0 0 15px rgba(33, 65, 107, 0.4);
    }
}

.server-tag-icon {
    width: 1em;
    aspect-ratio: 1/1;
}
</style>

<script setup lang="ts">
import { tags as tagList } from '@/data/tags';
type TagList = {[tag: string]: {
    icon: string
}};

defineProps({
    tags: {
        type: Array<string>,
        required: true
    }
});
</script>