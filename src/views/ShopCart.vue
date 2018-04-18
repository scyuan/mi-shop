<template>
	<div class="cart">

		<back-header :title='title' ref='backHeader'></back-header>

		<div class="cart-content">
			
			<a class="not-login" v-if='$store.state.shopcart.list.length === 0'><p class="lowprice">登陆后享受更多优惠</p><p class="tologin">去登录<i class="icon">&#xe64a;</i></p></a>
			
			<div class="enpty-cart" v-if='$store.state.shopcart.list.length === 0'>
				<a><span><i class="icon">&#xe680;</i>购物车还是空的</span><span class="guang">去逛逛</span></a>
			</div>
			<div class="list-content">
				<div class="list-item" v-for='(item,index) in $store.state.shopcart.list'>
					<div class="img">
						<img :src="item.href" alt="">
					</div>
					<div class="wenzi">
						<p>{{item.name}}</p>
						<p>售价：{{item.price}}元</p>
						<div class="add-delete">
							<p><span class="reduce-span" @click='reduce(index)'>-</span><span>{{item.count}}</span><span class="add-span" @click='add(index)'>+</span></p>
							<i class="icon delete-icon" @click='deleteOne(index)'>&#xe619;</i>
						</div>
					</div>
				</div>
			</div>
			<div class="guess">
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
			</div>
			<div class="tj clearfix">
				<div class="tj-items" v-for='(item,index) in tj_items' :class="{'left':index%2===0,'right':index%2!==0}" @click='$router.push({path:"/product/1001"})'>
					<img :src="item.src" alt="">
					<p class="title">{{item.title}}</p>
					<p class="con">{{item.con}}</p>
					<p class="price">￥{{item.money}}</p>
				</div>
			</div>
		</div>

		<div class="cart-bottom" v-if='$store.state.shopcart.list.length !== 0'>
			<div class="sum">
				<p>共{{count}}件 金额</p>
				<p><span class="price">{{allprice}}</span>元</p>
			</div>
			<div class="go-on">继续购物</div>
			<div class="go-pay">去结算</div>
		</div>
	</div>
</template>
<script>
import BackHeader from '@/components/BackHeader'
	export default{
		name:'ShopCart',
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
		computed:{
			count(){
				var sum = 0;
				for(let i=0;i<this.$store.state.shopcart.list.length;i++){
					sum = sum + this.$store.state.shopcart.list[i].count;
				}
				return sum;
			},
			allprice(){
				var sum = 0;
				for(let i=0;i<this.$store.state.shopcart.list.length;i++){
					sum = sum + this.$store.state.shopcart.list[i].price*this.$store.state.shopcart.list[i].count;
				}
				return sum;
			}
		},
		components:{
			BackHeader
		},
		methods:{
			reduce(index){
				if(this.$store.state.shopcart.list[index].count === 1){
					// 再次-1的话 则相当于删除该商品
					this.deleteOne(index);
				}else{
					this.$store.commit('reduceOne',this.$store.state.shopcart.list[index]);
				}
			},
			add(index){
				this.$store.commit('addOne',this.$store.state.shopcart.list[index]);
			},
			deleteOne(index){
				this.$store.commit('deleteOne',this.$store.state.shopcart.list[index]);
				// 显示底部菜单栏
				this.$emit('openbottom');
			}
		},
		beforeRouteEnter(to, from, next){
			next(vm=>{
				vm.$refs.backHeader.showMe();
			});

		},
		beforeRouteLeave(to, from, next){
			this.$refs.backHeader.hideMe();
			next();
		},
	}
</script>
<style scoped>
.cart{
	background: #fff;
}
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
.cart-bottom{
	height: 1.44rem;
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
}
.cart-bottom div{
	float: left;
	height: 100%;
	width: 33.3333333333%;
	font-size: 0.373333rem;
	text-align: center;
}
.go-on,.go-pay{
	line-height: 1.44rem;	
}
.go-on{
	background: #eee;
	color: #555;
}
.go-pay{
	background: rgb(255,74,0);
	color: #fff;
}
.cart-bottom .sum{
	padding-top: 0.266667rem;
	color: #aaa;
	font-size: 0.32rem;
}
.sum .price{
	font-size: 0.426667rem;
	color: rgb(255,74,0);
	margin-right: 2px;
	font-weight: bold;
}
.list-item{
	height: 3.466667rem;
	padding: 0.4rem;
	background: #fff;
	border-bottom: 1px solid #ddd;
}
.img{
	float: left;
	width: 2.666667rem;
	height: 2.666667rem;

}
.img img{
	height: 100%;
	width: auto;
	border:1px solid #ccc;
}
.wenzi{
	height: 100%;
	width: 100%;
	padding-left: 2.933333rem;
	font-size: 0.373333rem;
}
.wenzi>p:nth-child(1){
	font-size: 0.426667rem;
	color: #444;
}
.wenzi>p:nth-child(2){
	
	color: #aaa;
	margin: 0.133333rem 0;
}
.add-delete{
	height: 0.853333rem;
	position: relative;
}
.add-delete i{
	position: absolute;
	right: 0;
	top: 0;
	width: 0.853333rem;
	height: 0.853333rem;
	text-align: center;
	line-height: 0.853333rem;
	font-size: 0.533333rem;
}
.add-delete>p{
	width: 2.666667rem;
	height: 100%;
	text-align: center;
	line-height: 0.8rem;
	border: 1px solid #eee;
}
.add-delete>p span{
	width: 33.3333%;
	height: 100%;
	float: left;
}
.add-span,.reduce-span{
	background: #eee;
	font-size: 0.533333rem;
}
</style>