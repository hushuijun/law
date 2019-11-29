<template>
  <div class="caseDetails">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>CLASSIC&nbsp;CASE</h1>
        <p>经典案例</p>
      </div>
    </div>
    <div class="caseDetails_content">
        <div class="caseDetails_title">
           <h3>
           李某与某企业贷款纠纷案
           </h3>
           <p>
              2019年10月19日
           </p>
        </div>
    </div>
  </div>
</template>
<script>
import { querycaseDetailsList } from "@/api/api";
export default {
  name: "caseDetails",
  data() {
    return {
     
    };
  },
  created() {
  },
  mounted() {
  },
  methods: { 
   
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.caseDetails {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.caseDetails .hearder_bg {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url("../assets/case_bg.jpg") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.caseDetails .hearder_bg img {
  max-width: 100%;
}
.caseDetails .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 40%;
  left: 50%;
  margin-left: -109px;
}
.caseDetails .header_title h1 {
  font-weight: 500;
}
.caseDetails .header_title p {
  font-size: 28px;
}
.caseDetails .caseDetails_content {
  width: 70%;
  margin: auto;
  margin-top: -80px;
  min-height: 500px;
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
.caseDetails .caseDetails_title{
  width: 90%;
  margin:auto;
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid #efefef;
}


</style>