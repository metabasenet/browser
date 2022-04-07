import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes
})

//设置全局守卫处理
router.beforeEach((to, from, next) => {
    let isLogin = localStorage.getItem("token");

    // 如果访问的是登录界面则直接放行
    /*if (to.path === '/login')
        return next()

    // 如果访问的是登录界面则直接放行
    if (to.path === '/stafflogin')
        return next()*/


    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.matched.length === 0) {
        next("/")
    }
    if (to.meta.needLogin) {
        if (isLogin) {
            next()
        } else if (to.meta.routerType && to.meta.routerType == "staff") {
            next({
                "path": 'stafflogin',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next({
                "path": 'login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }
    next();
})

export default router