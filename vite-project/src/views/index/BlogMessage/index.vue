<template>
	<div class="box">
		<div class="content">
			<div class="messageBox">
				<div class="info add" :style="{ '--random': `5deg` }">
					点击此处留下你宝贵的建议或者想要留下的话<span style="color: red">(本站不易请 不要打广告)</span>
				</div>
				<div v-for="(item, index) in list" class="info"
					:style="{ '--random': `${(index % 2 === 1 ? 1 : -1) * 5}deg` }" @click="detail(item)" :key="item">
				</div>
			</div>
		</div>
	</div>
	<div v-if="open" class="log" @click="closeDialog">
		<div class="panel" @click.stop=""></div>
	</div>
</template>

<script setup>
import { ref } from "vue"
const list = ref([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
let open = ref(false)
const detail = (data) => {
	console.log(data)
	open.value = true
}
const closeDialog = () => {
	if (open.value) open.value = false
}
</script>

<style lang="scss" scoped>
.box {
	height: 100%;
	width: 100%;
}

.content {
	margin: 0 auto;
	padding: 1px 20px;
	min-height: 100%;
	// overflow: auto;
	background: #ffffff80;
}

.messageBox {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

.info {
	box-sizing: border-box;
	padding: 12px 0;
	height: 200px;
	margin: 20px 15px;
	transition: all .3s 0s;
	z-index: 3;
	position: relative;
	background-color: hsla(0, 0%, 100%, .8);
	overflow: hidden;
	border-radius: 16px;
	cursor: pointer;
	transform: rotate(var(--random));

	&:hover {
		transform: scale(1.03);
		box-shadow: 2px 2px 6px black;
	}
}

.add {
	padding: 24px;
	font-size: 18px;
	font-family: cursive;
	font-weight: bold;
	line-height: 35px;
}

.log {
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #00000030;
	animation-name: showLog;
	animation-duration: .8s;
}

@keyframes showLog {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.panel {
	background: #fff;
	width: 50%;
	height: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

@media screen and (max-width: 700px) {
	.content {
		max-width: 100%;
	}

	.info {

		width: calc(100% - 30px);
	}
}

@media screen and (min-width: 700px) {
	.content {
		max-width: 1000px;
	}

	.info {

		width: calc(25% - 30px);
	}
}
</style>
