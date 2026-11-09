import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Properties from '../views/Properties.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/About', component: About },
  { path: '/Contact', component: Contact },
  { path: '/Properties', component: Properties }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router