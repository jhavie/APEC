import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import axios from 'axios';
import 'iview/dist/styles/iview.css';
import './assets/public.css'
import './mock.js'
import '@/common/config'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
