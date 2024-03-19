import { createRouter, createWebHistory } from 'vue-router';

const routes =  [

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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/Register.vue')
    }
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router