const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            {
                path:'/home',
                component: (resolve) => require(['./views/home/index.vue'], resolve)
            },
            {
                path:'/list',
                component: (resolve) => require(['./views/list/index.vue'], resolve)
            },
            {
                path:'/shopping',
                component: (resolve) => require(['./views/shopping/index.vue'], resolve)
            },
            {
                path:'/mine',
                component: (resolve) => require(['./views/mine/index.vue'], resolve)
            },
        ]
    },
    {
        path:'/car',
        component: (resolve) => require(['./views/car/index.vue'], resolve)
    }
];
export default routers;