import { createRouter, createWebHashHistory } from 'vue-router';
import { ElNotification } from 'element-plus';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { beforeEach, afterEach } from './scrollBehavior';
import systemRouter from './systemRouter';
//系统路由
const routes = systemRouter

//系统特殊路由
let routes_404_r = () => { }

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

router.beforeEach(async (to, from, next) => {

	NProgress.start()
	//动态标题
	// document.title = to.meta.title ? `${to.meta.title}` : ``

	// if(to.matched.length === 0){
	// 	next({path: from.path || "/index"})
	// 	return false
	// }

	beforeEach(to, from)
	next();
});

router.afterEach((to, from) => {
	afterEach(to, from)
	NProgress.done()
});

router.onError((error) => {
	NProgress.done();
	ElNotification.error({
		title: '路由错误',
		message: error.message
	});
});

export default router
