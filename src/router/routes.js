
export default [
    {
        // 登录
        path: "/login",
        name: "login",
        component: () => import("@/views/Login"),
    },

    {
        // 首页
        path: "/home",
        name: "home",
        component: () => import("@/views/Home"),
    },
    {
        // 欢迎
        path: "/welcome",
        name: 'welcome',
        component: () => import("@/views/Welcome"),
    },
    {
        // 家具
        path: "/classify",
        name: 'classify',
        component: () => import("@/views/Classify"),
    },
    {
        // 注册
        path: "/register",
        name: "register",
        component: () => import("@/views/Register"),
        // meta: {
        //     footerIsShow: true
        // }
    },
    {
        // 底部广场
        path: "/groom",
        name: "groom",
        component: () => import("@/views/Groom"),
    },
    {
        // 底部添加
        path: "/add",
        name: "add",
        component: () => import("@/views/Add"),
    },
    {
        // 底部消息
        path: "/msg",
        name: "msg",
        component: () => import("@/views/Msg"),
    },
    {
        // 底部我的
        path: "/main",
        name: "main",
        component: () => import("@/views/main"),
    },
    {
        // 发布商品
        path: "/releasegoods",
        name: "releasegoods",
        component: () => import("@/views/ReleaseGoods"),
    },
    {
        // 个人资料
        path: "/maindata",
        name: "maindata",
        component: () => import("@/views/MainData"),
    },
    {
        // 搜索结果
        path: "/searchresult",
        name: "searchresult",
        component: () => import("@/views/SearchResult"),
    },
    {
        // 商品下单
        path: "/ordergoods",
        name: "ordergoods",
        component: () => import("@/views/OrderGoods"),
    },
    {
        path: "",
        redirect: '/welcome',
        component: () => import("@/views/Welcome"),
    },
]

