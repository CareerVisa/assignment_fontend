import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
Vue.use(BootstrapVue)

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify)
import '@mdi/font/css/materialdesignicons.css' //required for get list mdi Icon





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),

  el: '#app',
  vuetify: new Vuetify(),
 


}).$mount('#app')


