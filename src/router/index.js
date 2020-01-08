/*
 * @Author: your name
 * @Date: 2019-12-28 15:51:48
 * @LastEditTime : 2020-01-02 14:40:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\router\index.js
 */
import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)





const Index=()=>import("@/pages/index")
const Sort=()=>import("@/pages/sort")
const Cellphone=()=>import("@/pages/cellphone")
const Service=()=>import("@/pages/service")
const Personal=()=>import("@/pages/personal")

// import Index from '@/pages/index'


export default new Router ({
    routes:[
        {name:"Index",path:"/index",component:Index},
        {
            name:"Sort",
            path:"/sort",
            component:Sort,
        },
        {name:"Cellphone",path:"/cellphone",component:Cellphone},
        {name:"Service",path:"/service",component:Service},
        {name:"Personal",path:"/personal",component:Personal},
        {path: '/*', redirect: '/index'}
    ]
})