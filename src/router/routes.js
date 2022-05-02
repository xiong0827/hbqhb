
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
    //他人主页
    {
        path: "/personal",
        name: 'personal',
        component: () => import("@/views/Personal"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register"),
        // meta: {
        //     footerIsShow: true
        // }
    },
    //广场推荐
    {
        path: "/groom",
        name: "groom",
        component: () => import("@/views/Groom"),
        meta:{
            titletext:'广场'
        }
    }, 
    {
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
        path:'/search',
        name:'search',
        component: () => import("@/views/Search"),
    },
    {
        path: "/main",
        name: "main",
        component: () => import("@/views/Main"),
    },
    //关于我d
    {
    path:'/aboutmain',
    name:'aboutmain',
    component:()=>import("@/views/Aboutmain"),
    children:[
        {
            path:'publish',
            name:'publish',
            component:()=>import("@/views/Aboutmain/Publish"),
            meta:{
                titletext:'我的发布'
            }
        },
        {
            path:'buyout',
            name:'buyout',
            component:()=>import("@/views/Aboutmain/Buyout"),
            meta:{
                titletext:'我的购买'
            }
        },
        {
            path:'sell',
            name:'sell',
            component:()=>import("@/views/Aboutmain/Sell"),
            meta:{
                titletext:'我的收藏'
            }
        },
    ]
    
    
    },
    {
        path: "",
        redirect: '/welcome',
        component: () => import("@/views/Welcome"),
    },

]

