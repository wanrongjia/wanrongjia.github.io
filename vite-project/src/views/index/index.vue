<template>
	<el-container>
		<el-header>
			<div class="title">Grace UI</div>
			<div class="menu">
				<div :class="{ 'label': true, 'active': item.path === route.path }" v-for="item, index in menu" :key="index"
					@click="comePath(item)">{{ item.label }}</div>
			</div>
		</el-header>
		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
const route = new useRoute()
const router = new useRouter()
const menu = ref([{
	label: "首页",
	path: "/index"
}, {
	label: "留言板",
	path: "/message"
}, {
	label: "账号",
	path: "/account"
}])
const comePath = (item) => {
	if (!item.path) return false;
	router.push(item.path)
}
</script>

<style lang="scss">
.el-container {
	height: 100%;
	width: 100%;
	background: url("@/assets/background.jpg") no-repeat;
	background-size: cover;

	.el-header {
		border-bottom: 1px solid #e2e2e2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
	}

	.el-main {
		padding: 0;

		&::-webkit-scrollbar {
			width: 4px;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
			opacity: 0.2;
			background: skyblue;
		}

		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
			border-radius: 0;
			background: #e2e2e260;
		}
	}
}


.title {
	padding: 0 10px;
	font-size: 18px;
	font-family: cursive;
	font-weight: bold;
	user-select: none;
}

.menu {
	display: flex;
	align-items: center;

	.label {
		padding: 0 20px;
		font-size: 16px;
		font-family: cursive;
		font-weight: bold;
		user-select: none;
		cursor: pointer;

		&:hover {
			transform: scale(1.5);
			color: skyblue;
		}
	}

	.active {
		transform: scale(1.5);
		color: skyblue;
	}
}
</style>
<style lang="scss" scoped></style>
