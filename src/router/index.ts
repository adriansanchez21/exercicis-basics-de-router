import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import ProductDetail from '../components/ProductDetail.vue'
import LlistaDeProduces from '../components/ProductList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/producte/:id',
      name: 'productdetail',
      component: ProductDetail
    },
    {
      path: '/llistaDeProduces',
      name: 'llistaDeProductes',
      component: LlistaDeProduces
    }
  ]
})

export default router
