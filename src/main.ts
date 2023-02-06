import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus, faMagnifyingGlass, faTags, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faMagnifyingGlass, faTags, faBars);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')