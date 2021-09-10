
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import VueIntro from 'vue-introjs';
Vue.use(VueIntro);
import 'intro.js/introjs.css';
import './plugins/element.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
