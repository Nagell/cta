import { createApp } from 'vue'
import App from './App.vue'

/* Container Query Helper */
import loadCQ from './helpers/loadCQ'

import './styles/index.pcss'

createApp(App).mount('#app')
loadCQ()