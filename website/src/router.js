import VueRouter from 'vue-router'

import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about-me',
    component: AboutMe,
  },
]

export default new VueRouter({
  routes
});