<template>
	<div class="box">
		<div class="content">
			<div class="info" v-for="item in list" :key="item">
			</div>
		</div>
	</div>
</template>

<script setup>
const list = new Array(5)
</script>

<style lang="scss" scoped>
.box {
	height: 100%;
	width: 100%;
}
.content {
	margin: 0 auto;
	padding: 1px 20px;
	height: 100%;
	// overflow: auto;
	background: #ffffff80;
}

.info {
	box-sizing: border-box;
	padding: 12px 0;
	height: 100px;
	margin: 20px 15px;
	transition: all .3s 0s;
	z-index: 3;
	position: relative;
	background-color: hsla(0, 0%, 100%, .8);
	overflow: hidden;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		transform: scale(1.03);
		box-shadow: 2px 2px 6px black;
	}
}

@media screen and (max-width: 700px) {
	.content {
		max-width: 100%;
	}
}

@media screen and (min-width: 700px) {
	.content {
		max-width: 1000px;
	}
}
</style>
