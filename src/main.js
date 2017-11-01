import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuefire from 'vuefire'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'

Vue.use(Vuefire)
Vue.use(Vuetify)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
