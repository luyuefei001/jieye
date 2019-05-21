// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**
 * 解决移动端300毫秒点击延迟
 * 步骤 终端输入 npm install fastclick --save 安装fastclick
 * 重启 npm  终端输入 npm run start
 */
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 1像素边框
import './assets/styles/border.css'


Vue.config.productionTip = false
//使用fastClick 
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
