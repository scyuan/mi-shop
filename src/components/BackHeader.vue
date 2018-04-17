<template>
	<transition name='header-slide'>
	<div class="backheader" v-show='show'>
		<div class="category-title">
			<i class="icon icon-back" @click='$router.back()'>&#xe624;</i>
			<p>{{title}}</p>
			<i class="icon icon-search" @click='$router.push({path:"/search"})'>&#xe607;</i>
		</div>
	</div>
	</transition>
</template>
<script>
	export default{
		props:["title"],
		data(){
			return{
				show:false
			}
		},
		methods:{
			showMe(){
				
				this.show = true;
			},
			hideMe(){
			
				setTimeout(function(){this.show = false;},10);
				
			}
		}
	}
</script>
<style scoped>
.header-slide-enter,.header-slide-leave-to{
	transform: translateY(-100%);
}
.header-slide-enter-to,.header-slide-leave{
	transform: translateY(0);
}
.header-slide-enter-active,.header-slide-leave-active{
	transition: all .5s;
}
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