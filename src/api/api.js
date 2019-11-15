
import {post, fetch} from '@/api/manage.js'


const queryCategoryNav = (params) => post('/manager/product/queryCategoryNav', params) // 首页分类导航
const queryNav = (params) => post('/manager/product/queryNav', params) // 查询导航
const queryNews = (params) => post('/manager/product/queryNews', params)// 首页最新产品展示
const queryProductById = (params) => fetch('/manager/product/queryProductById', params)//产品详情
const queryProductList = (params) => post('/manager/product/queryProductList', params)//查询产品列表
const queryProductListNav = (params) => fetch('/manager/product/queryProductListNav', params)//产品列表分类导航
const addConsult = (params) => post('/manager/consult/addConsult', params)//留言
const addRemoveConsult = (params) => post('/manager/consult/addRemoveConsult', params)//查询人物简历列表
const queryResumeList = (params) => post('/manager/resume/queryResumeList', params)//addRemoveConsult
const queryResumeById = (params) => fetch('/manager/resume/queryResumeById', params)//产品列表分类导航

const queryVideoList = (params) => post('/manager/video/queryVideoList', params)//查询视频列表
const queryVideoById = (params) => fetch('/manager/video/queryVideoById', params)//根据id查询视频
const queryCategoryList = (params) => fetch('/manager/category/queryArticleCategoryList', params)//查询标签列表
const articleUpDown = (params) => fetch('/manager/article/articleUpDown', params)//上下篇改
const queryArticle = (params) => fetch('/manager/article/queryArticle', params)//首页咨询查询
const queryArticleById = (params) => fetch('/manager/article/queryArticleById', params)//查询文章详情
const queryArticleList = (params) => post('/manager/article/queryArticleList', params)//查询资讯列表
const queryHome = (params) => fetch('/manager/article/queryHomeArticleAndCategory', params)//首页分类咨询查询-海外投资的下半部分
const queryHot = (params) => fetch('/manager/article/queryHotArticle', params)//新闻资讯推荐资讯
const queryInland = (params) => fetch('/manager/article/queryInlandArticle', params)//查询国内资讯
const queryInternation = (params) => fetch('/manager/article/queryInternationArticle', params)//查询国际资讯
const getArticleCategoryList = (params) => fetch('/manager/article/getArticleCategoryList', params)//查询国际资讯
const queryProductByKeyword = (params) => post('/manager/product/queryProductByKeyword', params)//搜索产品
const queryCountryList = (params) => post('/manager/country/queryCountryList', params)//首页国家展示
const queryCountryNav = (params) => fetch('/manager/country/queryCountryNav', params)//首页国旗展示洲导航
const HomeInvest = (params) => fetch('/manager/article/queryArticleInvest', params)//首页投资资讯
const queryDetailsNav = (params) => post('/manager/product/queryDetailsNav', params)//详情页分类查询



// const getNoticeTextByState = (params) => fetch('/app/index/getNoticeTextByState', params) // 获取拍卖详情倒计时
// const login1 = (params) => post('/sys/role/add', params)
// const login2 = (params) => patch('/sys/role/add', params)
// const login3 = (params) => put('/sys/role/add', params)
// const login4 = (params) => del('/sys/role/add', params)
export {
  queryCategoryNav,
  queryNav,
  queryProductListNav,
  queryNews,
  queryProductById,
  queryProductList,
  addConsult,
  addRemoveConsult,
  queryResumeList,
  queryResumeById,
  queryVideoList,
  queryVideoById,
  queryCategoryList,
  articleUpDown,
  queryArticle,
  queryArticleById,
  queryHome,
  queryHot,
  queryArticleList,
  queryInland,
  queryInternation,
  getArticleCategoryList,
  queryProductByKeyword,
  queryCountryList,
  queryCountryNav,
  HomeInvest,
  queryDetailsNav
}
