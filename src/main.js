import Vue from 'vue'
import VueRouter from 'vue-router'
import './assets/css/main.css'
import App from './App.vue'
import Home from '@/components/Home'
import OrderTracking from '@/components/OrderTracking'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/track_my_order/:id',
      name: 'orderTracking',
      component: OrderTracking,
    },
  ],
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// new Vue({
//   el: '#app',
//   router,
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || routes['/']
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })
