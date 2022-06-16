export default [{
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
        // 分类
        path: "/classify",
        name: 'classify',
        component: () => import("@/views/Classify"),
    },
    //他人主页
    {
        path: "/personal",
        name: 'personal',
        component: () => import("@/views/Personal"),
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next(false)
            } else {
                next()
            }
        }
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
    //广场推荐
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
        //搜索
        path: '/search',
        name: 'search',
        component: () => import("@/views/Search"),
    },
    {

        // 底部我的
        path: "/main",
        name: "main",
        component: () => import("@/views/Main"),
        // meta: { editShow: true }
    },
    //关于我d
    {
        path: '/aboutmain',
        name: 'aboutmain',
        component: () => import("@/views/Aboutmain"),
        children: [{
                path: 'publish',
                name: 'publish',
                component: () => import("@/views/Aboutmain/Publish"),
                meta: {
                    titletext: '我的发布'
                }
            },
            {
                path: 'buyout',
                name: 'buyout',
                component: () => import("@/views/Aboutmain/Buyout"),
                meta: {
                    titletext: '我的购买'
                }
            },
            {
                path: 'sell',
                name: 'sell',
                component: () => import("@/views/Aboutmain/Sell"),
                meta: {
                    titletext: '我的收藏'
                }
            },
        ],
        beforeEnter: (to, from, next) => {
            if (from.name != 'main') {
                next(false)
            } else {
                next()
            }
        }
    },

    {
        // 聊天
        path: "/chat",
        name: "chat",
        component: () => import("@/views/Chat"),
    },

    {
        //粉丝
        path: "/fans",
        name: "fans",
        component: () => import("@/views/Fans"),
        beforeEnter: (to, from, next) => {
            console.log(from.name);
            if (from.name != 'main') {
                next({
                    name: from.name
                })
            } else {
                next()
            }
        }
    },
    {
        // 发布商品
        path: "/releasegoods",
        name: "releasegoods",
        component: () => import("@/views/ReleaseGoods"),
        beforeEnter: (to, from, next) => {
            console.log(from.name);
            if (from.name != 'add') {
                next({
                    name: from.name
                })
            } else {
                next()
            }
        }
    },
    {
        // 个人资料
        path: "/maindata",
        name: "maindata",
        component: () => import("@/views/MainData"),
        meta: {
            titletext: '个人资料'
        },
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
                next(false)
            } else {
                next()
            }
        }
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
        // 收货地址信息
        path: "/address",
        name: "address",
        component: () => import("@/views/Address"),
        meta: {
            titletext: '编辑地址'
        }
    },
    {
        // 修改密码
        path: "/resetpassword",
        name: "resetpassword",
        component: () => import("@/views/ResetPassword"),
        beforeEnter: (to, from, next) => {
            console.log(from.name);
            if (from.name != 'main') {
                next(false)
            } else {
                next()
            }
        }
    },

    {
        // 商品详情
        path: "/goodsinfo",
        name: "goodsinfo",
        component: () => import("@/views/GoodsInfo"),
    },
    {
        // 提交订单详情
        path: "/orderinfo",
        name: "orderinfo",
        component: () => import("@/views/OrderInfo"),
    },
    {
        // 订单详情
        path: "/order",
        name: "order",
        component: () => import("@/views/Order"),
    },
    {
        path: "",
        redirect: '/welcome',
        component: () => import("@/views/Welcome"),
    },

]