import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/category/:slug', name: 'Category', component: () => import('../views/CategoryView.vue') },
  { path: '/post/:id', name: 'Post', component: () => import('../views/PostView.vue') },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
