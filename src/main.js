import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuefire from 'vuefire'
import VueFirestore from 'vue-firestore'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
// require('firebase/firestore')

// checking
import { auth } from './firebase'

Vue.use(Vuefire)
Vue.use(VueFirestore)
Vue.use(Vuetify)
Vue.use(VeeValidate)

Vue.config.productionTip = false

let app
// firebase.auth().onAuthStateChanged(function(user) {
auth.onAuthStateChanged(function(user) {
	if (!app) {
		/* eslint-disable no-new */
		app = new Vue({
			el: '#app',
			router,
			render: h => h(App)
		})
	}
})

// new Vue({
// 	el: '#app',
// 	router,
// 	render: h => h(App)
// })
