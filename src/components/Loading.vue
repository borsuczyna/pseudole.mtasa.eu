<style lang="scss">
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #888;
}

.loading-image {
    width: 3em;
    aspect-ratio: 1/1;
}

.loading-servers {
    padding: 5em;
}
</style>

<template>
    <div class="loading">
        <div class="loading-text">Wczytywanie...</div>
        <img src="/Public/loading.svg" class="loading-image"/>
    </div>
</template>