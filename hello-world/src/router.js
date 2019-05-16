import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Admin = () => import('./views/admin/Admin.vue')
const Legal = () => import('./views/gray-area/Legal.vue')
const Payment = () => import('./views/gray-area/Payment.vue')
const Policies = () => import('./views/gray-area/Policies.vue')
const Returns = () => import('./views/gray-area/Returns.vue')
const Shipping = () => import('./views/gray-area/Shipping.vue')
const About = () => import('./views/studio/About.vue')
const Projects = () => import('./views/studio/Projects.vue')
const Blog = () => import('./views/studio/Blog.vue')
const Contact = () => import('./views/studio/Contact.vue')
const SingleProduct = () => import('./views/shop/SingleProduct.vue')
const CategoryPage = () => import('./views/shop/CategoryPage.vue')
const CheckoutPage = () => import('./views/shop/CheckoutPage.vue')
const Shop = () => import('./views/shop/Shop.vue')
const Confirm = () => import('./views/account/confirm.vue')
const ResetPassword = () => import('./views/account/reset-password.vue')
const ForgotPassword = () => import('./views/account/forgot-password.vue')


Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: '/grayarea/legal',
      name: 'legal',
      component: Legal
    },
    {
      path: '/grayarea/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/grayarea/policies',
      name: 'policies',
      component: Policies
    },
    {
      path: '/grayarea/returns',
      name: 'returns',
      component: Returns
    },
    {
      path: '/grayarea/shipping',
      name: 'shipping',
      component: Shipping
    },
    {
      path: '/studio/about',
      name: 'about',
      component: About
    },
    {
      path: '/studio/Projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/studio/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/studio/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/shop/:category',
      name: 'shopCat',
      component: CategoryPage
    },  
    {
      path: '/shop/:category/:id',
      name: 'shopProd',
      component: SingleProduct
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage
    },
    {
      path: '/users/verify/:token',
      component: Confirm
    },
    {
      path: '/users/reset/:token',
      component: ResetPassword
    },
    {
      path: '/users/forgot-password',
      component: ForgotPassword
    }
  ]
})
