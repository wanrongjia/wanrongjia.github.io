import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
	return defineConfig({
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
			}
		},
		base: './', // 设置打包路径
		server: {
			port: 8888, // 设置服务启动端口号d
			open: false, // 设置服务启动时是否自动打开浏览器
			cors: true, // 允许跨域
			proxy: {
				'/api': {
					target: loadEnv(mode, process.cwd()).VITE_APP_API_BASEURL,
					changeOrigin: true,
					ws: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				}
			}
		},
		build: {
			outDir: 'docs', // 指定输出路径
		},
	})
}
