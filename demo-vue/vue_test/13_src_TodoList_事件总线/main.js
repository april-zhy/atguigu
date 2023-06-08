/*
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 19:03:09
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-15 13:54:16
 */
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  },
})