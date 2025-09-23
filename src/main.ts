import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, type IconPack } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './styles/index.css'

library.add(fas as IconPack)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
