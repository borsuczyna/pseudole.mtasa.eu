<template>
    <button v-if="text" :style="style" :id="id" :class="class">{{ text }}</button>
    <button v-if="icon" :style="style" :id="id" :class="class">
        <font-awesome-icon :icon="icon" :size="size" />
    </button>
</template>

<style lang="scss">
@import '../assets/variables.scss';

button {
    color: $button-text-color;
    background-color: $button-color;
    border-radius: $button-radius;
    padding: $button-padding;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: 'Whitney', sans-serif;
    transition: 0.2s;
    max-height: 3em;
    align-items: center;
    overflow: hidden;
}

button:hover {
    color: $button-text-color-hover;
    background-color: $button-color-hover;
    box-shadow: 0 0 20px $button-glow-hover;
    text-shadow: 0 0 4px black;
}
</style>
  
<script lang="ts" setup>
defineProps({
    text: String,
    icon: String,
    class: String,
    id: String,
    size: String,
    style: Object
});
</script>