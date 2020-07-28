import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import HeyUI from 'heyui';


Vue.use(HeyUI);
Vue.use(Vuex)
Vue.use(ElementUI);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
