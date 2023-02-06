<script setup lang="ts">
import type { Author } from '@/types/Author';
import Button from './Button.vue';
import Search from './Search/Main.vue';

defineProps({
    account: {
        type: Object as () => Author | boolean,
        required: true
    }
})
</script>

<style lang="scss">
@import '@/assets/variables.scss';
#navigation-bar {
    background-color: $navigation-color;
    width: 100vw;
    height: 3.5em;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000 !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

#navigation-inner {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    max-width: 79em;
    flex-grow: 1;
    margin-inline: 1em 1.5em;
}

.add-button svg {
    transform: rotate(0deg);
    transition: 0.2s;
}

.add-button:hover svg {
    transform: rotate(90deg);
}
</style>

<template>
    <div id="navigation-bar">
        <div id="navigation-inner">
            <Button icon="fa-solid fa-plus" size="xl" :style="{
                width: '3em',
                height: '3em',
            }" class="add-button"></Button>
            <Search/>
            
            <!-- Desktop button -->
            <div v-if="account">
                <Button text="Zaloguj sie" class="desktop-button" :style="{
                    borderRadius: '1.5em',
                    padding: '1em 2em'
                }"></Button>

                <!-- Mobile hamburger menu button -->
                <Button icon="fa-solid fa-bars" class="mobile-button" size="xl" :style="{
                    width: '3em',
                    height: '3em',
                }"></Button>
            </div>
            <div: v-else>
                siema
            </div:>
        </div>
    </div>
</template>