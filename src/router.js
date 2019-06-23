import VueRouter from 'vue-router'
import Home from '@/components/pages/Home'
import AbouteMe from '@/components/pages/about-me/AboutMe'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about-me',
    component: AbouteMe
  },
]

export const router = new VueRouter({
  routes
})