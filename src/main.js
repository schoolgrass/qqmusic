import Vue from "vue"
import App from "./components/app.vue"
import Vuex from "vuex"
import router from './components/router'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        list: []
    },
    
    mutations: {
       
    },
    actions: {
      
    },
})

Vue.config.productionTip = false

new Vue({
  router,
    store,
    render: h => h(App),
}).$mount("#app")