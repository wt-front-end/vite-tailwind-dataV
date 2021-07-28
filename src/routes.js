import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Risk from './views/Risk.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, name: 'Home', meta: { title: 'Home' } },
  { path: '/risk', component: Risk, name: 'Risk', meta: { title: 'Risk' } },
  { path: '/test', component: Test, name: 'Test', meta: { title: 'Test' } },
  { path: '/:path(.*)', name: 'NotFound', component: NotFound },
]
