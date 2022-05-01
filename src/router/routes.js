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
    // {
    //     path:'/register',
    //     name: 'register',
    // },
    {
        path: "",
        redirect: '/welcome',
        component: () => import("@/views/Welcome"),
    },
]