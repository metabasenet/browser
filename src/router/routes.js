//import routesChild from "./routes_child";

const routes = [
    {
        path: "/",
        name: "Home",
        meta: {
            parent: "",
            needLogin: false,
            title: "区块链浏览器"
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
                    title: "区块链浏览器-首页"
                },
                component: () => import("../views/Home/Index.vue")
            },
            {
                path: "/blocklist",
                name: "blocklist",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-区块"
                },
                component: () => import("../views/Home/BlockList.vue")
            },
            {
                path: "/pending",
                name: "pending",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-交易"
                },
                component: () => import("../views/Home/Pending.vue")
            },
            {
                path: "/block",
                name: "block",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-区块"
                },
                component: () => import("../views/Home/Block.vue")
            },
            {
                path: "/address",
                name: "address",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-地址"
                },
                component: () => import("../views/Home/Address.vue")
            },
            {
                path: "/tx",
                name: "tx",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-交易信息"
                },
                component: () => import("../views/Home/Tx.vue")
            },
            {
                path: "/rank",
                name: "rank",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-排行"
                },
                component: () => import("../views/Home/Rank.vue")
            },
            {
                path: "/dpos",
                name: "dpos",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-dpos"
                },
                component: () => import("../views/Home/dpos.vue")
            },
            {
                path: "/main",
                name: "main",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-main"
                },
                component: () => import("../views/Home/main.vue")
            },
            {
                path: "/dposDetail",
                name: "dposDetail",
                meta: {
                    parent: "home",
                    needLogin: false,
                    title: "区块链浏览器-dposDetail"
                },
                component: () => import("../views/Home/dposDetail.vue")
            },
           
          
        ]
    }
]
export default routes;