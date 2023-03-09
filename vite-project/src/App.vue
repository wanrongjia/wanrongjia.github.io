<template>
	<el-config-provider :size="config.size" :zIndex="config.zIndex" :button="config.button">
		<router-view></router-view>
	</el-config-provider>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useStore from './store'
const { system } = useStore()

// 使用storeToRefs可以保证解构出来的数据也是响应式的
const { config } = storeToRefs(system)
</script>

<style lang="scss">
@import '@/style/style.scss';
</style>
