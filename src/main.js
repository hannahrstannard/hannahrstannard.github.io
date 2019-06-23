import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons'
import { faJs, faVuejs, faAngular, faNodeJs, faLinux } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import { router } from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
//TODO: Import individual components.
Vue.use(VueMaterial)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faCode, faBars, faJs, faVuejs, faAngular, faNodeJs, faLinux)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
