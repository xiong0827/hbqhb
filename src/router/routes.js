
export default [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login"),
    },

    {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home"),
    },
    {
        path: "/welcome",
        name: 'welcome',
        component: () => import("@/views/Welcome"),
    },
    {
        path: "/classify",
        name: 'classify',
        component: () => import("@/views/Classify"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register"),
        // meta: {
        //     footerIsShow: true
        // }
    },
    {
        path: "/groom",
        name: "groom",
        component: () => import("@/views/Groom"),
    }, {
        path: "/add",
        name: "add",
        component: () => import("@/views/Add"),
    },
    {
        path: "/msg",
        name: "msg",
        component: () => import("@/views/Msg"),
    },
    {
        path: "/main",
        name: "main",
        component: () => import("@/views/main"),
    },
    {
        path: "",
        redirect: '/welcome',
        component: () => import("@/views/Welcome"),
    },
]

