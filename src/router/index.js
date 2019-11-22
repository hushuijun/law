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
import Litigation from '@/page/case_sort/Litigation'
import Nolitigation from '@/page/case_sort/Nolitigation'
// 新闻资讯
import Jingshi_news from '@/page/news_sort/Jingshi_news'
import Jingshi_party from '@/page/news_sort/Jingshi_party'
import PublicWelfare from '@/page/news_sort/PublicWelfare'
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
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/case',
      name: 'Case',
      component: Case,
      children:[{
        path:'/',
        name: 'SupremeCourt',
        component: SupremeCourt,
      },
      {
        path:'/litigation',
        name: 'Litigation',
        component: Litigation,
      },
      {
        path:'/nolitigation',
        name: 'Nolitigation',
        component: Nolitigation,
      }
    ]
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
