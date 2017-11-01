import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
	{ path: '/', component: 'Landing' },
	{ path: '/home', component: 'Home' },
	{ path: '/users', component: 'Users' },
	{ path: '/fireusers', component: 'Fireusers' },
	{ path: '/newuser', component: 'Newuser' },
	{ path: '/newuser2', component: 'Newuser2' },
	{ path: '/login', component: 'Login' },
	{ path: '/signup', component: 'Signup' },
	{ path: '/:id', component: 'User' }
]

const routes = routerOptions.map(route => {
	return {
		path: route.path,
		component: () => import(`@/components/${route.component}.vue`)
	}
})

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes
})
