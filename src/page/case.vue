<template>
  <div class="case">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>CLASSIC&nbsp;CASE</h1>
        <p>经典案例</p>
      </div>
    </div>
    <div class="case_content">
      <div class="top"></div>
      <div class="case_title">
        <p>经过京师律师事务所全体律师的努力，已取得了令人瞩目的成绩，有多名律师先后为数百家知名企业提供了公司债券、股票发行相关的法律服务，为公司上市、私募等相关事宜提供了强有力的法律支持，并且担任多家知名企业、事业单位、政府机关的常年法律顾问。</p>
        <p>京师律师成功代理了数百起有影响的合同纠纷、股权纠纷、劳动纠纷、侵权诉讼、房地产纠纷、招标投标、知识产权纠纷、刑事辩护等方面的诉讼、非诉讼案件，并且获得了客户的广泛好评。</p>
      </div>
      <div>
        <div class="text_nav">
          <a v-for="(item,index) in caseList" :key="index"
             :class="{active:index == isSelect}"
             @click="selectNav(item.id,index)">
            {{item.name}}
          </a>
        </div>
        <div>
          <SupremeCourt v-bind:SupremeId = "remeId"></SupremeCourt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryCaseList } from "@/api/api";
import SupremeCourt from '@/page/case_sort/supremeCourt'
export default {
  name: "case",
  components: {SupremeCourt},
  data() {
    return {
      CaseList: "",
      CaseId: "",
      isSelect:0,
      title: "",
      caseList:[{id:'1',name:'最高院案例'},{id:'2',name:'诉讼案例'},{id:'3',name:'非诉讼案例'}],
      remeId:''
    };
  },
  created() {
    this.selectNav(1,0);
  },
  mounted() {
    // this.selectNav(id,index);
  },
  methods: {
    selectNav(id,index){
      var _this = this;
      _this.isSelect = index;
      this.remeId = id;
      // _this.CaseId = {
      //   categoryId:id,
      //   pageNo: "1",
      //   pageSize: "10"
      // }
      // console.log( _this.CaseId)
      // queryCaseList(_this.CaseId).then(res => {
      //   _this.supremeCourtList = res.data.list
      // })
    }
  },
  watch: {
      '$route' (to, from) {
          this.selectNav(id,index);
      }
  }
}
</script>
<style scoped>
@import "../assets/css/base.css";
.case {
  /* min-height: 1500px; */
  background: #f9f9f9;
  padding-bottom: 80px;
}
.case .hearder_bg {
  width: 100%;
  height: 620px;
  overflow: hidden;
  position: relative;
  background: url("../assets/case_bg.jpg") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.case .hearder_bg img {
  max-width: 100%;
}
.case .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  left: 50%;
  margin-left: -155px;
  margin-top: -47px;
}
.case .header_title h1{
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  letter-spacing: 4px;
}
.case .header_title p{
  font-size: 28px;
}
.case .case_content {
  width: 1200px;
  margin: auto;
  margin-top: -95px;
  padding-bottom: 90px;
  background: white;
  position: relative;
  z-index: 1;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12); */
}
.case .top {
  border-bottom: 2px solid #b8131b;
  width: 1120px;
  height: 94px;
  margin: auto;
}
.case .text_nav {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
}
.case .text_nav a {
  display: inline-block;
  padding: 12px 50px;
  cursor: pointer;
  margin: 5px;
}
.case .text_nav a:hover {
  background: #b8131b;
  color: white;
}
.case .active {
  background: #b8131b;
  color: white;
}
.case .case_title {
  width: 90%;
  margin: auto;
  margin-top: 50px;
}
.case .case_title p {
  line-height: 30px;
  margin-top: 10px;
  text-indent: 2rem;
}
@media screen and (max-width: 1024px) {
  .case{
    padding-bottom: 0;
  }
  .case .hearder_bg{
    height: 250px;
  }
  .case .header_title h1{
    font-size: 18px;
  }
  .case .header_title{
    margin-left: -84.5px;
    margin-top: -26.5px;
  }
  .case .header_title p{
    font-size: 14px;
  }
  .case .case_content{
    width:100%;
    margin-top:0;
  }
  .case .top{
    width: 90%;
    height: 30px;
  }
  .case .text_nav {
  margin-top: 30px;
  margin-bottom: 20px;
}
.case .text_nav a {
  padding: 12px 10px;
  font-size: 16px;
  margin-left: 10px;
}
.case .case_content{
  padding-bottom: 30px;
}
}
</style>