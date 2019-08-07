import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './routes/router'
import VueTouch from 'vue-touch'
import directives from './directive/directives'

Vue.config.productionTip = false

Vue.use(VueTouch, {
  name: 'v-touch'
})
VueTouch.config.swipe = {
  threshold: 80 //手指左右滑动距离
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')