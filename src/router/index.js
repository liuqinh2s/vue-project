import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
  	{path: '/home', name: 'HomeView', component: HomeView},
  	{path: '/', redirect: '/home'},
  	{path: '/card', name: 'Card', component: Card}
  ]
})
