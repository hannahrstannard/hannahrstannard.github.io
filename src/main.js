import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { router } from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
//TODO: Import individual components.
Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
