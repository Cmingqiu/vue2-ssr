import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/foo',
    // redirect: '/',
    component: () => import('@/components/Foo')
  },
  {
    path: '/bar',
    component: () => import('@/components/Bar')
  }
]

export default () => {
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}
