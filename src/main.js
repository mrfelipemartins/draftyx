// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import '@mdi/font/css/materialdesignicons.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Buefy)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
  rolesVar: 'role',
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
