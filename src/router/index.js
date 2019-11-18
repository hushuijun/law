import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Major from '@/page/Major'
import Team from '@/page/Team'
import Case from '@/page/Case'
import News from '@/page/News'
import About from '@/page/About'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/major',
      name: 'Major',
      component: Major
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
