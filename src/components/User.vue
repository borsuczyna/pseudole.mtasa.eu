<template>
    <div :class="['author', className]" :id="id" :style="{
            '--rank-color': user.rank.color,
            '--size': size,
            '--icon-mult': iconMult,
            '--bold': (user.rank.bold ? '700' : '500'),
            ...style
        }">
        <img class="author-avatar" :src="user.avatar" alt="avatar"/>
        <img v-if="user.rank.icon && user.rank.icon.length > 0" class="author-rank" :src="`/Public/ranks/${user.rank.icon}.png`" :style="{
            filter: filter,
        }"/>
        <a class="author-username" :href="`/profile/${user.id}`">{{ user.username }}</a>
    </div>
</template>

<style lang="scss">
.author {
    display: inline-flex;
    font-size: var(--size);
    gap: 0.5em;
    font-weight: var(--bold);
    align-items: center;
    filter: drop-shadow(0 0 0px rgba(var(--rank-color), 0));
}

.author-avatar {
    width: 1.6em;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1px solid rgb(16, 16, 16);
    transition: 0.1s;
}

.author:hover .author-avatar {
    width: 1.9em;
}

.author-username {
    color: rgb(var(--rank-color));
    text-decoration: none;
    transition: 0.1s;
}

.author:hover .author-username, .author:hover .author-rank {
    filter: drop-shadow(0 0 4px rgba(var(--rank-color), 0.6));
}

.author:hover .author-rank {
    width: calc(var(--size) * var(--icon-mult) * 1.15);
}

.author-rank {
    width: calc(var(--size) * var(--icon-mult));
    transition: 0.1s;
}
</style>

<script setup lang="ts">
import type { Author } from '@/types/Author';
import { Color, Solver } from '../services/color';
import { computed } from '@vue/reactivity';

const props = defineProps({
    user: {
        type: Object as () => Author,
        required: true
    },
    className: {
        type: String,
        required: false,
        default: ''
    },
    id: {
        type: String,
        required: false
    },
    iconMult: {
        type: String,
        required: false,
        default: '1.3'
    },
    size: {
        type: String,
        required: false,
        default: '1em'
    },
    style: {
        type: Object,
        required: false
    },
});

const filter = computed(() => {
    const rgb = props.user.rank.color.split(',').map(e => parseInt(e.trim()));
    const color = new Color(rgb[0], rgb[1], rgb[2]);
    const solver =  new Solver(color);
    const result = solver.solve();
    
    return result.filterRaw;
});
</script>