import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA5uFXkfY2DHY5DeYYb44QuyL-Xb_JtQnQ',
    libraries: 'places',
  },

});  

new Vue({
  render: h => h(App),
}).$mount('#app')
