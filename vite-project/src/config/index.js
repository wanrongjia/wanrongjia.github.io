const DEFAULT_CONFIG = {
	//标题
	APP_NAME: import.meta.env.VITE_APP_TITLE,

	//首页地址
	DASHBOARD_URL: "/index",

	//版本号
	APP_VER: "1.6.7",

	//内核版本号
	CORE_VER: "1.6.7",

	//接口地址
	API_URL: import.meta.env.MODE === 'development' && import.meta.env.VITE_APP_PROXY === 'true' ? "/api" : import.meta.env.VITE_APP_API_BASEURL,

	//请求超时
	TIMEOUT: 10000,

	//TokenName
	TOKEN_NAME: "Authorization",

	//Token前缀，注意最后有个空格，如不需要需设置空字符串
	TOKEN_PREFIX: "",

	//追加其他头
	HEADERS: {},

	//请求是否开启缓存
	REQUEST_CACHE: false,

	//布局 默认：default | 通栏：header | 经典：menu | 功能坞：dock
	//dock将关闭标签和面包屑栏
	LAYOUT: 'menu',

	//菜单是否折叠
	MENU_IS_COLLAPSE: false,

	//菜单是否启用手风琴效果
	MENU_UNIQUE_OPENED: false,

	//是否开启多标签
	LAYOUT_TAGS: true,

	//语言
	LANG: 'zh-cn',

	//主题颜色
	COLOR: '#23994a',

	//是否加密localStorage, 为空不加密，可填写AES(模式ECB,移位Pkcs7)加密
	LS_ENCRYPTION: '',

	//localStorageAES加密秘钥，位数建议填写8的倍数
	LS_ENCRYPTION_key: '2XNN4K8LC0ELVWN4',
}

// 如果生产模式，就合并动态的APP_CONFIG
// public/config.js
if(import.meta.env.MODE === 'production'){
	Object.assign(DEFAULT_CONFIG, APP_CONFIG)
}

export default DEFAULT_CONFIG
