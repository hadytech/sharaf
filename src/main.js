import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// here goes fontawesome configurations

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

// End zone for fontawesome

const app = createApp(App)

app.use(router)

app.mount('#app')


