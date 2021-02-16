const routes = [
	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/',
		component: () => import('pages/home'),
	},
	{
		path: '/politica-de-privacidade',
		component: () => import('pages/privacy-policy'),
	},
	{
		path: '/termo-de-uso',
		component: () => import('pages/terms-of-use'),
	},
	{
		path: '*',
		component: () => import('pages/Error404.vue'),
	},
]

export default routes
