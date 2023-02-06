<template>
    <div class="reaction-add">
        +
    </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.reaction-add {
    background-color: $add-reaction-color;
    border: $add-reaction-border;
    border-radius: $reaction-border-radius;
    padding: $reaction-padding;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    aspect-ratio: 1/1;
    width: 1.2em;
    height: 1.2em;
    color: rgba(255, 255, 255, 0.5);
}

.reaction-add img {
    width: 2.5em;
}

.reaction-add:hover {
    background-color: $add-reaction-color-hover;
    border: $add-reaction-border-hover;
    color: rgba(255, 255, 255, 1);
}
</style>