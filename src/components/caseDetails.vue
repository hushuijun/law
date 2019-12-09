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
           {{Title}}
           </h3>
           <p>
              {{Time}}
           </p>
        </div>
        <div class="Desc" v-html="Desc"></div>
    </div>
  </div>
</template>
<script>
import { queryCaseDet } from "@/api/api";
export default {
  name: "caseDetails",
  data() {
    return {
      DetailList:'',
      Time:'',
      Title:'',
      Desc:''
    };
  },
  created() {
    this.Detail()
  },
  mounted() {
  },
  methods: { 
    Detail(){
      console.log(this.$route.query)
      queryCaseDet(this.$route.query).then(res=>{
          console.log(res.data)
          this.Time = res.data.createTime
          this.Title = res.data.caseTitle
          this.Desc = res.data.catDesc
      })
    }
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.Desc >>> img{
  display: block;
  width: 80%!important;
  margin: 20px auto;
}
.Desc{
  width: 1096px;
  margin: auto;
  font-size: 16px;
  color: #505050;
  padding-top: 48px;
  line-height: 30px;
}
.caseDetails {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.caseDetails .hearder_bg {
  width: 100%;
  height: 620px;
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
  top: 50%;
  left: 50%;
  margin-left: -133px;
  margin-top: -47px;
}
.caseDetails .header_title h1 {
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
}
.caseDetails .header_title p {
  font-size: 28px;
}
.caseDetails .caseDetails_content {
  width: 1200px;
  margin: auto;
  margin-top: -97px;
  /* min-height: 500px; */
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
}
.caseDetails .caseDetails_title {
  width: 1096px;
  height: 200px;
  margin: auto;
  /* padding: 20px 0; */
  text-align: center;
  border-bottom: 1px solid #efefef;
}
.caseDetails .caseDetails_title h3 {
  font-size: 30px;
  margin: 0;
  padding-top: 75px;
  padding-bottom: 30px;
}
.caseDetails .caseDetails_title p {
  font-size: 16px;
  color: #707070;
}
@media screen and (max-width: 1024px) {
  .caseDetails  .hearder_bg{
      height: 250px;
  }
  .caseDetails .caseDetails_content{
    width:100%;
    margin-top:0;
  }
  .caseDetails .header_title h1{
      font-size: 18px;
  }
  .caseDetails .header_title p{
    font-size: 14px;
  }
  .caseDetails .header_title{
    margin-left:-66px ;
  }
  .Desc >>> img{
    width:100%!important;
  }
  .caseDetails{
    padding-bottom:0 ;
    min-height:100%;
  }
}

</style>