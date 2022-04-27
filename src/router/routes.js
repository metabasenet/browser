import i18n from "../lang/index"

const routes = [
    {
        path: "/",
        name: "Home",
        meta: {
            parent: "",
            needLogin: false,
            title: "$t('routes.browser')"
        },
        component: () =>
            import("../views/Home.vue"),
        children: [
            {
                path: "/",
                name: "index",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.home')
                },
                component: () => import("../views/Home/Index.vue")
            },
            {
                path: "/blocklist",
                name: "blocklist",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.blockList')
                },
                component: () => import("../views/Home/BlockList.vue")
            },
            {
                path: "/pending",
                name: "pending",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.txList')
                },
                component: () => import("../views/Home/Pending.vue")
            },
            {
                path: "/block",
                name: "block",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.block')
                },
                component: () => import("../views/Home/Block.vue")
            },
            {
                path: "/address",
                name: "address",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.address')
                },
                component: () => import("../views/Home/Address.vue")
            },
            {
                path: "/tx",
                name: "tx",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.tx')
                },
                component: () => import("../views/Home/Tx.vue")
            },
            {
                path: "/rank",
                name: "rank",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.rank')
                },
                component: () => import("../views/Home/Rank.vue")
            },
            {
                path: "/dpos",
                name: "dpos",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.dpos')
                },
                component: () => import("../views/Home/dpos.vue")
            },           
            {
                path: "/dposDetail",
                name: "dposDetail",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: i18n.t('routes.dposDetail')
                },
                component: () => import("../views/Home/dposDetail.vue")
            },           
            {
                path: "/main",
                name: "main",
                meta: {
                    parent: "",
                    needLogin: false,
                    title: i18n.t('routes.main')
                },
                component: () => import("../views/Home/main.vue")
            }
            
            
          
        ]
    }
]
export default routes;