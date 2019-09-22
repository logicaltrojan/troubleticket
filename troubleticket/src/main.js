import Vue from 'vue'
import App from './layouts/App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
