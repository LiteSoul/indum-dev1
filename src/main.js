import Vue from 'vue'
import Vuetify from 'vuetify'
// import Firebase from 'firebase'
import Vuefire from 'vuefire'
import VueFirestore from 'vue-firestore'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
// require('firebase/firestore')

Vue.use(Vuefire)
Vue.use(VueFirestore)
Vue.use(Vuetify)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
