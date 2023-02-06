<style lang="scss">
::placeholder {
    color: rgb(65,65,65);
    font-weight: 500;
    font-family: 'Whitney', sans-serif;
    opacity: 1;
}
  
:-ms-input-placeholder {
    color: rgb(65,65,65);
    font-weight: 500;
    font-family: 'Whitney', sans-serif;
    opacity: 1;
}
  
::-ms-input-placeholder {
    color: rgb(65,65,65);
    font-weight: 500;
    font-family: 'Whitney', sans-serif;
    opacity: 1;
}

#search-bar {
    background-color: rgba(36, 50, 79, 0.341);
    color: white;
    height: 2.5em;
    width: 80%;
    max-width: 20em;
    border-radius: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
}

#search-bar input {
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    width: calc(100% - 5em);
    color: rgb(200,200,200);
    font-family: 'Whitney', sans-serif;
    font-weight: 500;
}
</style>

<template>
    <div id="search-bar">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" :style="{ color: 'rgb(140, 140, 140)' }" />
        <input type="search" name="" id="search" placeholder="Wyszukaj serwer..."/>
    </div>
</template>