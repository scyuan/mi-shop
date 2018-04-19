// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex'

Vue.config.productionTip = false

// axios
import axios from 'axios'
Vue.prototype.$http = axios

router.beforeEach((to, from, next)=>{
	
	setTimeout(function(){store.commit('routerstatus','loading');},50)

	next();
})

router.afterEach((to, from, next)=>{

	setTimeout(function(){store.commit('routerstatus','hide');},800)

})

import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
