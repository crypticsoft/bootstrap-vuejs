import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

new Vue({
  el: '#app',
  computed: {
    icon () {
      return faCoffee
    }
  },
  components: {
    FontAwesomeIcon
  },
  render: h => h(App)
})
