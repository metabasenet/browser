import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/HomeMain.vue')
    },
    {
      path: '/blocks',
      name: 'blocks',
      component: () => import('../pages/BlocksMain.vue')
    },{
      path: '/block',
      name: 'block',
      component: () => import('../pages/BlockDetails.vue')
    },
    {
      path: '/txs',
      name: 'txs',
      component: () => import('../pages/TransActions.vue')
    },
    {
      path: '/tx',
      name: 'tx',
      component: () => import('../pages/TransDetails.vue')
    },
    {
      path: '/tokens',
      name: 'tokens',
      component: () => import('../pages/TokenTracker.vue')
    },
    {
      path: '/token',
      name: 'token',
      component: () => import('../pages/TokenBinance.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../pages/AddressFrom.vue')
    }
  ]
})

export default router