import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Admin from '@/components/Admin/Admin'
import CreateTeam from '@/components/CreateTeam'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        auth: false
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        auth: true
      }
    },
    {
      path: '/create-team',
      name: 'CreateTeam',
      component: CreateTeam,
      meta: {
        auth: true
      }
    }
  ]
})
