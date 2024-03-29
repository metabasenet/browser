import { createRouter, createWebHistory } from 'vue-router';

const routes =  [

    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404/index.vue'),
      meta: {
        hideHeader: true,
        hideFooter: true,
      },
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
      path: '/block/:blockNumber',
      name: 'block',
      component: () => import('../pages/BlockDetails.vue'),
      props:true
    },
    {
      path: '/txs',
      name: 'txs',
      component: () => import('../pages/TransActions.vue')
    },
    {
      path: '/tx/:hash',
      name: 'tx',
      component: () => import('../pages/TransDetails.vue'),
      props:true
    },
    {
      path: '/tokens',
      name: 'tokens',
      component: () => import('../pages/TokenTracker.vue')
    },
    {
      path: '/token/:address',
      name: 'token',
      component: () => import('../pages/TokenBinance.vue'),
      props:true
    },
    {
      path: '/address/:address?',
      name: 'address',
      component: () => import('../pages/AddressFrom.vue'),
      props:true
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('../pages/Accounts.vue')
    },
    {
      path: '/tokentxns',
      name: 'tokentxns',
      component: () => import('../pages/TokenTransfers.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'notFound',
    }
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  scrollBehavior () {
    return {
      left:0,
      top:0
    }
  }
});

export default router