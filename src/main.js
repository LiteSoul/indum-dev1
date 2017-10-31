import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuefire from 'vuefire'
import App from './App'
import router from './router'

Vue.use(Vuefire)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
