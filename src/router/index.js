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
      path: '/closet',
      name: 'shkaf',
      component: ()=> import('../views/ClosetThings.vue')
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
      path: '/bed',
      name: 'yotoq',
      component: () => import('../views/BedThings.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../components/NotFound.vue')
    },

  ]
})

export default router
