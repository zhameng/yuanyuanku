import VueRouter from 'vue-router'
import Vue from 'vue'
import Meng from '../components/Meng'
import Yuan from "../components/Yuan";

Vue.use(VueRouter)

const router =new VueRouter({
    routes:[
        {
            path: '/meng',
            component: Meng
        },
        {
            path: '/yuan',
            component: Yuan
        }
    ]
})
export default router
