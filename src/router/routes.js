export default [{
    path: "/register",
    name: "register",
    component: () => import("@/views/Register"),
    // meta: {
    //     footerIsShow: true
    // }
},
{
    path: "/Groom",
    name: "Groom",
    component: () => import("@/views/Groom"),
}
]



// export default[    {
//     path: "/list",
//     name: "list",
//     component: () => import("@/views/List"),
//     meta:{
//         footerIsShow:true
//     }
// },
// {
//     path: "/home",
//     name: "home",
//     component: () => import("@/views/Home"),
//     meta:{
//         footerIsShow:true
//     }
// },
// {
//     path: "/cart",
//     name: "cart",
//     component: () => import("@/views/Cart"),
//     meta:{
//         footerIsShow:true
//     }
// },
// {
//     path: "/my",
//     name: "my",
//     component: () => import("@/views/My"),
//     meta:{
//         footerIsShow:true
//     }
// },
// {
//     path: "*",
//     redirect: '/home',
//     meta: {
//         footerIsShow: true
//     }
// },
// ]