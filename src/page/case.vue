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
          @click="selectNav(item.id,index)"
          >
            {{item.caseTitle}}
          </a>
        </div>
        <div>
          <SupremeCourt :supremeId.sync = "SupremeId"></SupremeCourt>
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
      caseList:[{id:'0',name:'最高院案例'},{id:'1',name:'诉讼案例'},{id:'2',name:'非诉讼案例'}],
      SupremeId:''
    };
  },
  created() {
    this.clickCase();
  },
  mounted() {
    this.isSelect = this.$route.name;
  },
  methods: {
    clickCase() {
      var _this = this;
      _this.CaseId = {
        categoryId: this.$route.query.id,
        pageNo: "1",
        pageSize: "10"
      };
      queryCaseList(_this.CaseId).then(res => {
        this.caseList = res.data.list
      });
    },
    selectNav(id,index) {
      this.isSelect = index;
      this.SupremeId = id;
      console.log( this.SupremeId)
      console.log( this.isSelect)
    }
  }
}
</script>
<style scoped>
@import "../assets/css/base.css";
.case {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.case .hearder_bg {
  width: 100%;
  height: 500px;
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
  top: 40%;
  left: 50%;
  margin-left: -109px;
}
.case .header_title h1 {
  font-weight: 500;
}
.case .header_title p {
  font-size: 28px;
}
.case .case_content {
  width: 70%;
  margin: auto;
  margin-top: -80px;
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
.case .case_center {
  margin-left: 45.5%;
}
.case .top {
  border-bottom: 2px solid #b8131b;
  width: 90%;
  height: 50px;
  margin: 20px auto;
}
.case .text_nav {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
}
.case .text_nav a {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px 10px;
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
</style>