/**
 * @description 自动import导入所有 api 模块
*/
const importModules = import.meta.globEager('./model/*.js');
// 对批量导入存放模块的对象进行处理
// 先获取其全部属性
const keys = Object.keys(importModules);
// 执行批量替换操作
for (let path of keys) {
	// 裁剪字符串方式得到路径中的文件名（无扩展名）
	let name = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.js'));
	// 对原对象执行添加新的属性并删除旧属性达到处理效果
	importModules[name] = importModules[path].default;
	delete importModules[path];
}

export default importModules