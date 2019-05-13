// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//包引用------start
//1.引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//2.引入axios
import axios from 'axios';
Vue.prototype.$http=axios;//将axios改写到vue原型属性,调用方式例如this.$http.post(xxx)
//3.引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//4.引入ckeditor
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'

//包引用------end

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
