import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
