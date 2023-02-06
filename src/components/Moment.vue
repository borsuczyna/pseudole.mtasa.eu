<template>
    <div :class="['added-date', className]" :style="style">{{ computedMoment }}</div>
</template>

<style lang="scss">
.added-date {
    display: inline;
    font-size: 1em;
}
</style>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import moment from 'moment';
import 'moment/dist/locale/pl';

const props = defineProps({
    date: {
        type: Date,
        required: true
    },
    className: {
        type: String,
        required: false
    },
    style: {
        type: Object,
        required: false
    },
});

const computedMoment = computed(() => {
    return moment(props.date).locale('pl').calendar();
});
</script>