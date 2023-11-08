import Vue from 'vue'
import Router from 'vue-router'
import UserLocation from '@/components/UserLocation'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component:UserLocation
    }]
})