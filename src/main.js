import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VModal from 'vue-js-modal'
 
Vue.use(VModal)

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
