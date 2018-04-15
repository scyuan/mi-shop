<template>
	<div class="backheader">
		<div class="category-title">
			<i class="icon icon-back">&#xe624;</i>
			<p>{{title}}</p>
			<i class="icon icon-search">&#xe607;</i>
		</div>
	</div>
</template>
<script>
	export default{
		props:["title"]
	}
</script>
<style scoped>
.category-title{
	height: 1.5rem;
	background: #f2f2f2;
	color: #666;
	display: flex;
	font-size: 0.426667rem;
}
.category-title p{
	margin:0;
	flex: 1;
	text-align: center;
	line-height: 1.5rem;
}
.icon-back,.icon-search{
	height: 1.5rem;
	width: 1.5rem;
	text-align: center;
	line-height: 1.5rem;
	font-size: 0.586667rem;
}
</style>