// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import db from './firebase'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Buefy)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const currentUser = db.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

/* eslint-disable no-new */
db.auth().onAuthStateChanged(function (user) {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
