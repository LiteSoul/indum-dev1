import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Login from '@/components/Login'

const routerOptions = [
	// { path: '*', redirect: '/', component: 'Landing' },
	{ path: '/', component: 'Landing' },
	{ path: '/home', component: 'Home', meta: { requiresAuth: true } },
	{ path: '/users', component: 'Users' },
	{ path: '/fireusers', component: 'Fireusers' },
	{
		path: '/storeusers',
		component: 'Storeusers',
		meta: { requiresAuth: true }
	},
	{ path: '/newuser', component: 'Newuser' },
	{ path: '/newmember', component: 'Newmember', meta: { requiresAuth: true } },
	{ path: '/login', component: 'Login' },
	{ path: '/logout', component: 'Logout' },
	{ path: '/signup', component: 'Signup' },
	{ path: '/:id', component: 'Membertest' }
]

const routes = routerOptions.map(route => {
	return {
		path: route.path,
		component: () => import(`@/components/${route.component}.vue`)
	}
})

Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes
})

// export default new Router({
// 	mode: 'history',
// 	routes
// })

// router.beforeEach((to, from, next) => {
// 	let currentUser = firebase.auth().currentUser
// 	let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
// 	if (to.path !== '/login' && requiresAuth && !currentUser) next('/login')
// 	else if (to.path !== '/home' && !requiresAuth && currentUser) next('home')
// 	else next()
// })

export default router
