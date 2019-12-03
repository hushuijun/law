import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Major from '@/page/Major'
import Team from '@/page/Team'
import Case from '@/page/Case'
import News from '@/page/News'
import About from '@/page/About'
// 经典案例
import SupremeCourt from '@/page/case_sort/SupremeCourt'
//案例详情
import CaseDetails from '@/components/CaseDetails'
// 新闻资讯
import Jingshi_news from '@/page/news_sort/Jingshi_news'
import Jingshi_party from '@/page/news_sort/Jingshi_party'
import PublicWelfare from '@/page/news_sort/PublicWelfare'
//新闻详情
import NewsDetails from '@/components/NewsDetails'
//荣誉详情
import honorDetails from '@/page/honorDetails'

Vue.use(Router)

export default new Router({
  // model: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/honorDetails',
      name: 'honorDetails',
      component: honorDetails
    },
    {
      path: '/major',
      name: 'Major',
      component: Major
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
      children:[{
        path:'/',
        name: 'SupremeCourt',
        component: SupremeCourt,
      }
    ]
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
      children:[
        {
          path:'/',
          name:'Jingshi_news',
          component:Jingshi_news,
        },
        {
          path:'/jingshi_party',
          name:'Jingshi_party',
          component:Jingshi_party,
        },
        {
          path:'/publicWelfare',
          name:'PublicWelfare',
          component:PublicWelfare,
        }
      ]
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
    }
  ]
})
