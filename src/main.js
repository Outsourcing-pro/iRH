// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import {UserLogin} from './api/interface';

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// reuqire styles
import 'swiper/dist/css/swiper.css'
// 引入自定义插件及组件
import VuePlugin from './plugin';

Vue.use(VueAwesomeSwiper, {
  pagination: '.swiper-pagination'
})
Vue.use(VuePlugin, {
    router: router,
    store: store
});

console.log('main.js>>>>>>>>>>>>>>>', store, router);

Vue.config.productionTip = false


UserLogin({
    name: 'hhjhy',
    pwd: '111'
}).then(res => {
    store.commit('set_token', res.data.token);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
