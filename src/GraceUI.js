import config from "@/config"
import api from '@/api'
import tool from '@/utils/tool'
import * as elIcons from '@element-plus/icons-vue'

export default {
	install(app) {
		//挂载全局对象
		app.config.globalProperties.$CONFIG = config;
		app.config.globalProperties.$TOOL = tool;
		app.config.globalProperties.$API = api;


		app.provide('$CONFIG', config);
		app.provide('$API', api);
		app.provide('$TOOL', tool);

		//统一注册el-icon图标
		for(let icon in elIcons){
			app.component(`ElIcon${icon}`, elIcons[icon])
		}
		//关闭async-validator全局控制台警告
		window.ASYNC_VALIDATOR_NO_WARNING = 1
	}
}
