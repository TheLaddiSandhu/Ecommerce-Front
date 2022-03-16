import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'products',
  },
  {
    path: '/products',
    name: 'icons',
    component: () => import('@/views/pages/Products.vue'),
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/pages/Cart.vue'),
  },
  {
    path: '/product-details/:id',
    name: 'product-details',
    component: () => import('@/views/pages/ProductDetails.vue'),
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/pages/profile/ProfileSettings.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('@/views/pages/PurchaseConfirmation.vue'),
  },
  {
    path: '/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
