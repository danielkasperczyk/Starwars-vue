import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Hero from '../components/Hero.vue'
Vue.use(VueRouter)

const routes =  [
    {
        path: '/hero/:heroId',
        name: 'hero',
        component: Hero,
        props: true
    },
    {
        path: '/',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;