import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Legal = () => import('./views/gray-area/Legal.vue')
const Payment = () => import('./views/gray-area/Payment.vue')
const Policies = () => import('./views/gray-area/Policies.vue')
const Returns = () => import('./views/gray-area/Returns.vue')
const Shipping = () => import('./views/gray-area/Shipping.vue')
const Sitemap = () => import('./views/gray-area/Sitemap.vue')
const About = () => import('./views/studio/About.vue')
const Projects = () => import('./views/studio/Projects.vue')
const Blog = () => import('./views/studio/Blog.vue')
const Contact = () => import('./views/studio/Contact.vue')
const Tshirts = () => import('./views/shop/categories/T-shirts.vue')
const Tanktops = () => import('./views/shop/categories/Tanktops.vue')
const Hoodies = () => import('./views/shop/categories/Hoodies.vue')
const Sweaters = () => import('./views/shop/categories/Sweaters.vue')
const HatsnCaps = () => import('./views/shop/categories/HatsnCaps.vue')
const Beanies = () => import('./views/shop/categories/Beanies.vue')
const SingleProduct = () => import('./views/shop/SingleProduct.vue')


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
      path: '/grayarea/sitemap',
      name: 'sitemap',
      component: Sitemap
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
    // {
    //   path: '/shop/:category',
    //   component: 
    // }
    {
      path: '/shop/:category/:id',
      component: SingleProduct
    },
    {
      path: '/shop/tanktops',
      name: 'tanktops',
      component: Tanktops
    },
    {
      path: '/shop/hoodies',
      name: 'hoodies',
      component: Hoodies
    },
    {
      path: '/shop/sweaters',
      name: 'sweaters',
      component: Sweaters
    },
    {
      path: '/shop/hats&caps',
      name: 'hatsncaps',
      component: HatsnCaps
    },
    {
      path: '/shop/beanies',
      name: 'beanies',
      component: Beanies
    }
  ]
})
