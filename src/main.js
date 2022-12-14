import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Swal from 'sweetalert2';

import "@/scss/LoginStyle.scss";
import "@/scss/GlobalStyle.scss";
import "@/scss/AddClaim.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
