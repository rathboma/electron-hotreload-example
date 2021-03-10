import Vue from 'vue'
import App from './App.vue'
import sqlite3 from 'sqlite3'

Vue.config.productionTip = false

console.log("foo")
const db = new sqlite3.Database('./foo.db')

new Vue({
  render: h => h(App),
}).$mount('#app')
