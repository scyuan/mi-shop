<template>
	<div class="search">
		<div class="app-search">
			<i class="icon back-icon" @click='$router.back()'>&#xe624;</i>
			<div class="input-wrap">
				<input type="text" placeholder="搜索商品名称">
			</div>
			<i class="icon search-icon">&#xe607;</i>
		</div>
		<p class="hot-search-title">热门搜索</p>
		<img class="hot-img" src="https://i8.mifile.cn/b2c-mimall-media/380d6e9e24df313665a1500dfa407c4d.jpg?bg=FFFFFF" alt="">
		<div class="hot-wrap"><span>红米Note 5</span><span>红米Note 5</span><span>红米Note 5</span></div>
	</div>
</template>
<script>
	export default{
		name:'Search'
	}
</script>
<style scoped>
.search{
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: #fff;
}
.app-search{
	height: 1.333333rem;
	background: #f2f2f2;
	position: relative;
}

.app-search i{
	position: absolute;
	top: 0;
	height: 1.333333rem;
	width: 1.333333rem;
	text-align: center;
	line-height: 1.333333rem;
	font-size: 0.586667rem;
	color: #999;
}
.app-search .back-icon{
	left: 0;
}
.app-search .search-icon{
	right: 0;
}
.input-wrap{
	height: 100%;
	padding: 0.293333rem 1.333333rem;
}
.input-wrap input{
	display: block;
	padding: 0 0.266667rem;
	font-size: 0.426667rem;
	height: 100%;
	width: 100%;
	outline: 0;
	box-sizing: border-box;
}
.input-wrap input::-webkit-input-placeholder{   
 /* WebKit browsers */   
color: #aaa;   
}   
.input-wrap input:-moz-placeholder{   
/* Mozilla Firefox 4 to 18 */   
color: #aaa;   
}   
.input-wrap input::-moz-placeholder{   
 /* Mozilla Firefox 19+ */   
color: #aaa;   
}   
.input-wrap input:-ms-input-placeholder{   
 /* Internet Explorer 10+ */   
color: #aaa;   
}
.hot-search-title{
	height: 1.12rem;
	line-height: 1.12rem;
	font-size: 0.32rem;
	color: #444;
	padding: 0 0.4rem;
}
.hot-img{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.hot-wrap{
	padding: 0.266667rem 0.4rem;
}
.hot-wrap span{
	font-size: 0.32rem;
	display: inline-block;
	padding: 0.133333rem 0.266667rem;
	border: 1px solid #e4e4e4;
	color: #484848;
	vertical-align: top;
	margin-right: 0.213333rem;
	background:#fff9f8;
}
</style>