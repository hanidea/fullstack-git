//import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import Todolist from './Todolist'
//import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:'#app',
  components:{
    Todolist
  },
  template:'<Todolist/>'
})
