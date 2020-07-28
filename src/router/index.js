import VueRouter from 'vue-router'
import Vue from 'vue'
// import Meng from '../components/Meng'
// import Yuan from "../components/Yuan";

Vue.use(VueRouter)


const Meng = ()=>import('../components/Meng')
// const Yuan = ()=>import('../components/Yuan')
import Layout from '../layout/component/Sidebar'
const  routes=[
    {
        path:'',
        redirect: '/meng'
    },
    {
        path: '/meng',
        component: Meng,

    },
    {
        path: '/yuan',
        component: Layout,
        children:[
            {
                path:'money',
                component: ()=>import('../components/Money')
            },
            {
                path:'hua',
                component: ()=>import('../components/Hua')
            }
        ]
    }
]

const router =new VueRouter({
    routes
})
export default router
