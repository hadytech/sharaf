import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: ()=> import('../views/MainPage.vue')
    },
    {
      path: '/products',
      name: 'mahsulot',
      component: ()=> import('../views/ThatProduct.vue')
    },
    {
      path: '/serve',
      name: 'serve',
      component: () => import('../views/ServicesYeah.vue')
    },
 
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutNews.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../components/HeaderView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../components/NotFound.vue')
    },

  ]
})

export default router
