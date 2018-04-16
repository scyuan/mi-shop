<template>
	<div class="cart">

		<back-header :title='title'></back-header>

		<div class="cart-content">
			
			<a class="not-login"><p class="lowprice">登陆后享受更多优惠</p><p class="tologin">去登录<i class="icon">&#xe64a;</i></p></a>
			
			<div class="enpty-cart">
				<a><span><i class="icon">&#xe680;</i>购物车还是空的</span><span class="guang">去逛逛</span></a>
			</div>
			
			<div class="guess">
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
			</div>
			<div class="tj clearfix">
				<div class="tj-items" v-for='(item,index) in tj_items' :class="{'left':index%2===0,'right':index%2!==0}">
					<img :src="item.src" alt="">
					<p class="title">{{item.title}}</p>
					<p class="con">{{item.con}}</p>
					<p class="price">￥{{item.money}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BackHeader from '@/components/BackHeader'
	export default{
		data(){
			return{
				title:'购物车',
				tj_items:[
				{
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
		            title: '13.3"笔记本i5 独显',
		            con: '指纹解锁，全金属机身',
		            money: 5199,
		            href: '/detail/1006'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
		            title: '13.3"笔记本i5 独显',
		            con: '指纹解锁，全金属机身',
		            money: 5199,
		            href: '/detail/1006'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
		            title: '13.3"笔记本i5 独显',
		            con: '指纹解锁，全金属机身',
		            money: 5199,
		            href: '/detail/1006'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
		            title: '13.3"笔记本i5 独显',
		            con: '指纹解锁，全金属机身',
		            money: 5199,
		            href: '/detail/1006'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
		            title: '13.3"笔记本i5 独显',
		            con: '指纹解锁，全金属机身',
		            money: 5199,
		            href: '/detail/1006'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
		            title: '13.3"笔记本i5 独显',
		            con: '指纹解锁，全金属机身',
		            money: 5199,
		            href: '/detail/1006'
		          }
				]
			}
		},
		components:{
			BackHeader
		}
	}
</script>
<style scoped>
/*.cart{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}*/
.cart-content{
	background: #fff;
	position: absolute;
	left: 0;
	right: 0;
	top: 1.5rem;
	bottom: 1.43rem;
	overflow-y: auto;
}
.not-login{
	display: flex;
	height: 1.466667rem;
	background: #fff;
	line-height: 1.466667rem;
	padding: 0 0.533333rem;
	align-items: center;
	justify-content: center;
}
.lowprice{
	font-size: 0.48rem;
	flex: 1;
	color: #222;
}
.tologin{
	width:2.133333rem;
	text-align: right;
	font-size: 0.373333rem;
	color: #757575;
}
.enpty-cart{
	height: 1.6rem;
	background: #ebebeb;
	text-align: center;
	line-height: 1.6rem;
	font-size: 0.373333rem;
	color: #ababab;
}
.enpty-cart i{
	font-size: 0.693333rem;
	vertical-align: bottom;
	margin-right: 0.266667rem;
}
.enpty-cart .guang{
	color: #1e1e1e;
	border: 1px solid #ababab;
	padding: 0.08rem 0.266667rem;
	margin-left: 0.133333rem;
}
.guess{
	margin-bottom: 5px;
}
.guess img{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.tj{
	margin-top: 0.16rem;
}
.tj img{
	width: 100%;
	height: auto;
	vertical-align: middle;
}
.tj-items{
	width: 50%;
	float: left;
	text-align: left;
	margin-bottom: 20px;
	box-sizing: border-box;
}
.tj-items img{
	width: 100%;
	height: auto;
}
.left{
	padding-right: 0.05rem;
}
.right{
	padding-left: 0.05rem;
}
.tj-items p{
	padding-left: 10px;
	margin: 0;
	font-size: 0.373333rem;
}
.tj-items .title{
	margin-top: 0.133333rem;
}
.tj-items .con{
	font-size: 0.32rem;
	color: #a2a2a2;
}
.tj-items .price{
	color: #ea625b;
	font-weight: bold;
}
</style>