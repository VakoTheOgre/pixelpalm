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
const SingleProduct = () => import('./views/shop/SingleProduct.vue')
const CategoryPage = () => import('./views/shop/CategoryPage.vue')

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
    {
      path: '/shop/:category',
      component: CategoryPage
    },
    {
      path: '/shop/:category/:id',
      component: SingleProduct
    }
  ]
})
