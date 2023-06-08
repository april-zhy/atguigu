/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2021-07-12 11:25:56
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-04 15:09:22
 */
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入store
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  // store,
  beforeCreate () {
    console.error(store);
    Vue.prototype.$bus = this
  }
})
