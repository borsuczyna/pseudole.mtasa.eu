<script setup lang="ts">
import Input from './Input.vue';
import Tags from './Tags.vue';
</script>

<style lang="scss">
#search-box {
    display: flex;
    flex-grow: 1;
    max-width: 20em;
    gap: 0.5em;
    color: rgb(70, 70, 70);
}
</style>

<template>
    <div id="search-box">
        <Input/>
        <Tags/>
    </div>
</template>