import config from "@/config"
//系统路由
const routes = [
	{
		path: "/",
		component: () => import('@/views/list/index.vue'),
		meta: {
			title: "home"
		},
	}
	// {
	// 	path: "/",
	// 	component: () => import('@/views/index/index.vue'),
	// 	redirect: config.DASHBOARD_URL || '/index',
	// 	meta: {
	// 		title: "home"
	// 	},
	// 	children: [{
	// 		path: "/index",
	// 		component: () => import('@/views/index/BlogList/index.vue'),
	// 		meta: {
	// 			title: "列表"
	// 		},

	// 	}, {
	// 		path: "/message",
	// 		component: () => import('@/views/index/BlogMessage/index.vue'),
	// 		meta: {
	// 			title: "留言板"
	// 		},

	// 	}]
	// },
]

export default routes;
