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
    {
      path: '/lolacloset',
      name: 'lolacloset',
      component: () => import('../store/lolacloset.vue')
    },
    {
      path: '/nurcloset',
      name: 'nurcloset',
      component: () => import('../store/nurcloset.vue')
    },
    {
      path: '/o3closet',
      name: 'o3closet',
      component: () => import('../store/oydin3closet.vue')
    },
    {
      path: '/umidcloset',
      name: 'umidcloset',
      component: () => import('../store/umidcloset.vue')
    },
    {
      path: '/u2closet',
      name: 'u2closet',
      component: () => import('../store/umid2closet.vue')
    },
    {
      path: '/xoncloset',
      name: 'xoncloset',
      component: () => import('../store/xoncloset.vue')
    },
    {
      path: '/qobilbed',
      name: 'qobilbed',
      component: () => import('../store/qobilbed.vue')
    },
    {
      path: '/q2bed',
      name: 'q2bed',
      component: () => import('../store/qobil2bed.vue')
    },
    {
      path: '/quyoshbed',
      name: 'quyoshbed',
      component: () => import('../store/quyoshbed.vue')
    },
    {
      path: '/zour2bed',
      name: 'zour2bed',
      component: () => import('../store/zourbed.vue')
    },
    {
      path: '/justchester',
      name: 'justchester',
      component: () => import('../store/justchester.vue')
    },

  ]
})

export default router
