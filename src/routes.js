import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, name: 'Home', meta: { title: 'Home' } },
  { path: '/about', component: About, name: 'About', meta: { title: 'About' } },
  { path: '/:path(.*)', name: 'NotFound', component: NotFound },
]
