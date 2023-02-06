<template>
    <Navigation :account="account"/>

    <div id="content">
        <div :style="{
            marginTop: '3em'
        }"></div>

        <News :news="[
            // {
            //     title: 'Nowy silnik renderowania',
            //     description: 'Nowy rok - nowi my, zastosowaliśmy się do tej złotej zasady zmieniając nasz silnik renderowania na Vue, z wcześniejszego Vanilla.js',
            // }
        ]"/>
        <ServerList :servers="servers" :loading="loading" :account="account"/>
    </div>
</template>

<style lang="scss">
    #content {
        text-align: center;
    }
</style>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue';
import ServerList from '../components/ServerList.vue';
import News from '../components/News.vue';

import { ref, onMounted } from 'vue';
import { fetchServers } from '@/services/servers';
import type { Ref } from 'vue'

import type { Server } from '@/types/Server';
import type { Author } from '@/types/Author';

const servers: Ref<Server[]> = ref([]);
const loading: Ref<boolean> = ref(true);
const account: Ref<Author | boolean> = ref(false);

// const account: Author = {"username":"borsuk#2115","avatar":"https://cdn.discordapp.com/avatars/952969319741001798/a_8b196d1bf71289fa723971855bdf6902?size=128","id":"952969319741001798","rank":{"id":3,"name":"Właściciel","color":"255, 0, 76","bold":true,"icon":"shield","priority":11,"permissions":["remove-comments"]}};

onMounted(async () => {
    servers.value = await fetchServers();
    loading.value = false;
});
</script>