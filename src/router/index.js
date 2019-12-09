import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Major from '@/page/Major'
import Team from '@/page/Team'
import Case from '@/page/Case'
import News from '@/page/News'
import About from '@/page/About'

import HonorDetails from '@/page/HonorDetails'
//案例详情
import CaseDetails from '@/components/CaseDetails'
//新闻详情
import NewsDetails from '@/components/NewsDetails'
//荣誉详情
import majorDetails from '@/components/majorDetails'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
      path: '/honorDetails',
      name: 'HonorDetails',
      component: HonorDetails,
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/case',
      name: 'Case',
      component: Case,
    },
    {
      path:'/caseDetails',
      name: 'CaseDetails',
      component: CaseDetails,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path:'/newsDetails',
      name:'NewsDetails',
      component:NewsDetails,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path:'*',
      redirect:'/'
    },
    {
      path: '/majorDetails',
      name: 'majorDetails',
      component: majorDetails
    }
  ]
})
