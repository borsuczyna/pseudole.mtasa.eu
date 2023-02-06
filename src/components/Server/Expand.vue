<template>
    <div class="expand" @click="click">
        Rozwiń
    </div>
</template>

<style lang="scss">
.expand {
    color: rgba(155, 155, 155, 0.7);
    background-color: rgba(26, 31, 42, 0.5);
    border: 1px solid rgba(32, 37, 50, 0.5);
    border-bottom: none;
    border-radius: 0.2em 0.2em 0 0;
    display: inline-block;
    margin-inline: auto;
    padding: 0.3em 0.6em;
    cursor: pointer;
    font-size: 0.9em;
    transition: 0.1s;
    transform: translateY(1.1em);

    &:hover {
        background-color: rgba(38, 51, 81, 0.5);
        color: rgba(225, 225, 225, 0.812);
    }
}
</style>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    click: {
        type: Function as PropType<() => void>,
        default: () => {},
    }
});
function test(){
    console.log('test')
}
</script>