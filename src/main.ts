import { createApp } from 'vue'
import App from './App.vue'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './styles/index.css'

library.add(faUserSecret as IconDefinition)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
