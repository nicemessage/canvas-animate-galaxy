
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ppp from '@/components/TablePanel/columns.js'
Vue.config.productionTip = false

const context = require.context('@/components', true, /\.vue$/);
// 获取文件路径
const fileList = context.keys();

console.log(context(fileList[0]),'mm');




import VueIntro from 'vue-introjs';
Vue.use(VueIntro);
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

import 'intro.js/introjs.css';
import './plugins/element.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
