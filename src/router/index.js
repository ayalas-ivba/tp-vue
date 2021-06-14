import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestComponent from '../views/TestComponent.vue'
import Museos from '../views/Museos.vue'
import Organismos from '../views/Organismos.vue'
import Tramites from '../views/Tramites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
},
    {path:'/test', name: 'TestComponent', component: TestComponent},
    {path:'/museos', name: 'Museos', component: Museos},
    {path:'/organismos', name: 'Organismos', component: Organismos},
    {path:'/tramites', name: 'Tramites', component: Tramites}
]

const router = new VueRouter({
  routes
})

export default router