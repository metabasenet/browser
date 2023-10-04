// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/blocks',
        name: 'blocks',
        component: () => import('@/views/blocks.vue'),
      },
      {
        path: '/block/:id',
        name: 'block',
        component: () => import('@/views/block.vue'),
      },
      {
        path: '/txs',
        name: 'txs',
        component: () => import('@/views/txs.vue'),
      },
      {
        path: '/nodes',
        name: 'nodes',
        component: () => import('@/views/nodes.vue'),
      },
      {
        path: '/tx/:id',
        name: 'tx',
        component: () => import('@/views/tx.vue'),
      },
      {
        path: '/address/:id',
        name: 'address',
        component: () => import('@/views/address.vue'),
      },
      {
        path: '/token/:id',
        name: 'token',
        component: () => import('@/views/token.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
