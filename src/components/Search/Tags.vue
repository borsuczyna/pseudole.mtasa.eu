<style lang="scss">
#search-tags {
    display: flex;
    flex-direction: row;
    color: rgb(92, 92, 92);
    gap: 0.6em;
    align-items: center;
    background-color: rgba(36, 50, 79, 0.341);
    padding-inline: 0.7em;
    height: 2em;
    margin-block: auto;
    border-radius: 0.5em;
    font-size: 0.8em;
    cursor: pointer;
    box-shadow: 0 0 0px rgba(36, 50, 79, 0.341);
    transition: background-color 0.1s, color 0.1s, box-shadow 0.1s;

    @media (max-width: 600px) {
        font-size: 1.2em;
    }
}

#search-tags:hover {
    background-color: rgba(36, 50, 79, 0.655);
    box-shadow: 0 0 15px rgba(36, 50, 79, 0.341);
    color: white;
}

#search-tags.active {
    background-color: rgba(44, 82, 154, 0.611) !important;
    box-shadow: 0 0 15px rgba(44, 82, 154, 0.2) !important;
    color: white !important;
}

#tags-text {
    font-size: 0.9em;

    @media (max-width: 600px) {
        display: none;
    }
}
</style>

<template>
    <div id="search-tags">
        <font-awesome-icon icon="fa-solid fa-tags" :style="{ color: 'rgb(140, 140, 140)' }" />
        <div id="tags-text">tagi</div>
        <!-- <div id="server-tags-search"></div> -->
    </div>
</template>