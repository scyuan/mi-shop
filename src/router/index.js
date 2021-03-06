import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import ('@/views/Home')
const Category = () => import('@/views/Category')
const ShopCart = () => import ('@/views/ShopCart')
const Personal = () => import ('@/views/Personal')
const Product = () => import ('@/views/Product')
const Search = () => import ('@/views/Search')
// import Home from '@/views/Home'
// import Category from '@/views/Category'
// import ShopCart from '@/views/ShopCart'
// import Personal from '@/views/Personal'
// import Product from '@/views/Product'
// import Search from '@/views/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/category',
    	name:'Category',
    	component:Category
    },
    {
      path:'/shopcart',
      name:'ShopCart',
      component:ShopCart
    },
    {
      path:'/me',
      name:'Personal',
      component:Personal
    },
    {
      path:"/product/:productId",
      name:'Product',
      component:Product
    },
    {
      path:"/search",
      name:'Search',
      component:Search
    }
  ]
})
