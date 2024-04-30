const routes =  [

    {
      path: '/',
      redirect: '/'
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
      path: '',
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
      path: '/txs/:block',
      name: 'txs',
      component: () => import('../pages/TransActions.vue'),
      props: true,
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
      path: '/verifyContract/:address',
      name: 'verifyContract',
      component: () => import('../views/verifyContract/index.vue'),
      props:true
    },
    {
      path: '/verifyContractSolc/:address',
      name: 'verifyContractSolc',
      component: () => import('../views/verifyContractSolc/index.vue'),
      props:true
    },
    {
      path: '/bytecode/:address',
      name: 'bytecode',
      component: () => import('../views/bytecode/index.vue'),
      props:true
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'notFound',
    }
];
export default routes