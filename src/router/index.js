import { createRouter, createWebHashHistory,createWebHistory  } from 'vue-router';
import routes from './routerMap';


const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return {
      left:0,
      top:0
    }
  }
});

export default router