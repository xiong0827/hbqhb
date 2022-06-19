export default [  
     {
    // 底部广场
    path: "/groom",
    name: "groom",
    component: () => import("@/views/Groom"),
    meta: {
        titletext: '广场'
    }
},
    {
        path: "",
        redirect: '/groom',
        component: () => import("@/views/Groom"),
    },

]