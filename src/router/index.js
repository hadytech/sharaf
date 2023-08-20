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
      path: '/chester',
      name: 'chester',
      component: ()=> import('../views/ChesTer.vue')
    },
    {
      path: '/bed',
      name: 'yotoq',
      component: () => import('../views/BedThings.vue')
    },
    {
      path: '/izlagin',
      name: 'qidirvotudu',
      component: ()=> import('../views/SearchResult.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../components/NotFound.vue')
    },
    {
      path: '/bahorcloset',
      name: 'bahorcloset',
      component: () => import('../store/BahorCloset.vue')
    },
    {
      path: '/omadcloset',
      name: 'omadcloset',
      component: () => import('../store/omadcloset.vue')
    },
    {
      path: '/fayzcloset',
      name: 'fayzcloset',
      component: () => import('../store/fayzcloset.vue')
    },

  ]
})

export default router
