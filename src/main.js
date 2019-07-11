import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import './registerServiceWorker'

import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueSocketio, io('https://socket.digitalseat.io'))

//Vue.use(VueSocketio, io('http://localhost:4444'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
