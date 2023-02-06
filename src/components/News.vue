<template>
    <div v-if="news.length > 0" id="news">
        <div id="news-top-text">NOWOŚCI!</div>
        <div class="news-item" v-for="item in news">
            <div class="news-title">• {{ item.title }}</div>
            <div class="news-description">{{ item.description }}</div>
        </div>
    </div>
</template>

<style langs="scss">
@keyframes moving-gradient {
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

#news {
    width: calc(100% - 1em);
    max-width: 80em;
    margin-inline: auto;

    text-align: left;
    color: white;
    padding: 1em;
    margin-bottom: 0.5em;
    box-sizing: border-box;

    background: linear-gradient(90deg, rgba(97, 255, 0, 0.03) 0%, rgba(255, 245, 0, 0.03) 100%);
    background: linear-gradient(-45deg, rgba(97, 255, 0, 0.03), rgba(255, 245, 0, 0.03), rgba(97, 255, 0, 0.03));
    background-size: 400% 400%;
    border: 2px solid rgba(97, 255, 0, 0.01);
    box-shadow: 0px 0px 22px rgba(97, 255, 0, 0.05);
    border-radius: 8px;

    animation: moving-gradient linear infinite 8s;
}

#news-top-text {
    font-weight: bold;
    text-shadow: 0px 0px 11px rgba(255, 255, 255, 0.15);
    letter-spacing: 0.06em;
    font-size: 1.2em;
}

.news-title {
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.7);
}

.news-description {
    font-size: 0.7em;
    color: rgba(255, 255, 255, 0.5);
    margin-left: 0.9em;
}
</style>

<script setup lang="ts">
import type { News } from '../types/News';

defineProps({
    news: {
        type: Array as () => News[],
        default: []
    }
});
</script>