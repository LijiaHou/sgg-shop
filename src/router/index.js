import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect : '/msite'
  },
  {
    path: '/msite',
    name: 'MSite',
    component: () => import('views/MSite/MSite'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('views/Order/Order'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/Profile/Profile'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('views/Search/Search'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/Login/Login')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('views/Shop/Shop'),
    children: [
      {
        path: '/shop',
        redirect : '/shop/shopgoods'
      },
      {
        path: '/shop/shopgoods',
        name: 'ShopGoods',
        component: () => import('views/Shop/ShopGoods/ShopGoods')
      },
      {
        path: '/shop/shoprating',
        name: 'ShopRating',
        component: () => import('views/Shop/ShopRating/ShopRating')
      },
      {
        path: '/shop/shopinfos',
        name: 'ShopInfos',
        component: () => import('views/Shop/ShopInfos/ShopInfos')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
