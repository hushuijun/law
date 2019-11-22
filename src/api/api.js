
import {post, fetch} from '@/api/manage.js'


const queryTerritoryDet = (params) => fetch('/manager/territory/queryTerritoryDet', params) // 专业领域详情
const queryTerritoryList = (params) => fetch('/manager/territory/queryTerritoryList', params) // 查询专业领域列表
const addConsult = (params) => post('/manager/consult/addConsult', params)// 咨询、添加
const queryResumeById = (params) => fetch('/manager/resume/queryResumeById', params)//查询人履历
const queryResumeList = (params) => fetch('/manager/resume/queryResumeList', params)//查询人物简历列表
const queryVideoById = (params) => fetch('/manager/video/queryVideoById', params)//根据id查询视频
const queryVideoList = (params) => post('/manager/video/queryVideoList', params)//查询视频列表
const queryArticleById = (params) => fetch('/manager/article/queryArticleById', params)//查询文章详情
const queryArticleList = (params) => post('/manager/article/queryArticleList', params)//查询资讯列表
const queryCaseDet = (params) => fetch('/manager/case/queryCaseDet', params)//查询经典详情
const queryCaseList = (params) => post('/manager/case/queryCaseList', params)//查询经典案例列表
const queryCase = (params) => fetch('/manager/home/queryCase', params)//经典案例列表



// const login1 = (params) => post('/sys/role/add', params)
// const login2 = (params) => patch('/sys/role/add', params)
// const login3 = (params) => put('/sys/role/add', params)
// const login4 = (params) => del('/sys/role/add', params)
export {
  queryTerritoryDet,
  queryTerritoryList,
  addConsult,
  queryResumeById,
  queryResumeList,
  queryVideoById,
  queryVideoList,
  queryArticleById,
  queryArticleList,
  queryCaseDet,
  queryCaseList,
  queryCase
}
