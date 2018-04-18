<template>
	<div class="me">
		<header class="me-header">
			<div class="avator">
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/normal-face.png" alt="">
			</div>
			<span class="name-notlogin">登录/注册</span>

		</header>

		<div class="my-order">
			<p>我的订单</p>
			<p>全部订单<i class="icon">&#xe64a;</i></p>
		</div>
		<div class="my-order detail">
			<span><i class="icon">&#xe627;</i>待付款</span>
			<span><i class="icon">&#xe662;</i>待收货</span>
			<span><i class="icon">&#xe60b;</i>退换修</span>
		</div>

		<div class="me-item border">
			<i class="icon color1">&#xe654;</i>
			<p>会员中心<i class="icon">&#xe64a;</i></p>
		</div>
		<div class="me-item">
			<i class="icon color2">&#xe681;</i>
			<p>我的优惠<i class="icon">&#xe64a;</i></p>
		</div>

		<div class="me-item border">
			<i class="icon color3">&#xe601;</i>
			<p>服务中心<i class="icon">&#xe64a;</i></p>
		</div>
		<div class="me-item">
			<i class="icon color4">&#xe633;</i>
			<p>小米之家<i class="icon">&#xe64a;</i></p>
		</div>
		<div class="me-item">
			<i class="icon color5">&#xe600;</i>
			<p>F码通道<i class="icon">&#xe64a;</i></p>
		</div>
		<div class="me-item">
			<i class="icon color6">&#xe60e;</i>
			<p>设置<i class="icon">&#xe64a;</i></p>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Personal'
	}
</script>
<style scoped>
.me{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 1.43rem;
	overflow-y: auto;
}
.me-header{
	height: 2.266667rem;
	background-color: #f37d0f;
	background-image: url('../assets/img/bg.63c8e19.png');
	background-size: contain;
	padding: 0.4rem 0.533333rem;
}
.avator{
	height: 1.466667rem;
	width: 1.466667rem;
	border-radius: 50%;
	background: rgba(255,255,255,0.5);
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	float: left;
}
.avator img{
	width: 92%;
	height: 92%;
	display: inline-block;
	vertical-align: middle;
}
.name-notlogin{
	font-size: 0.373333rem;
	color: #fff;
	line-height: 1.466667rem;
	vertical-align: middle;
	margin-left: 0.266667rem;
}
.my-order{
	padding: 0 0.533333rem;
	height: 1.12rem;
	font-size: 0.426667rem;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #d9d9d9;
	background: #fff;
}
.my-order p:nth-child(1){
	flex: 1;
	text-align: left;
}
.my-order p:nth-child(2){
	width: 3.2rem;
	text-align: right;
}
.detail{
	height: 2.346667rem;
	border: 0;
	margin-bottom: 0.266667rem;
}
.detail span{
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 0.32rem;
}
.detail span i{
	font-size: 0.693333rem;
	margin-bottom: 0.133333rem;
	color: #b2b2b2;
}
.me-item{
	height: 1.44rem;
	padding-left: 0.133333rem;
	display: flex;
	background: #fff;
	margin-bottom: 0.266667rem;
}
.border{
	margin-bottom: 0;
}
.me-item>i{
	width: 1.44rem;
	height: 1.44rem;
	text-align: center;
	line-height: 1.44rem;
	font-size: 0.693333rem;
}
.me-item>p{
	flex: 1;
	padding-right: 0.533333rem;
	font-size: 0.426667rem;
	line-height: 1.44rem;
}
.border>p{
	border-bottom: 1px solid #d9d9d9;
}
.me-item>p>i{
	float: right;
}
.color1{
	color: #fdbf2d;
}
.color2{
	color: #51bbe0;
}
.color3{
	color: #f96c53;
}
.color4{
	color: #ff8b43;
}
.color5{
	color: #ffb302;
}
.color6{
	color: #818c99;
}
</style>