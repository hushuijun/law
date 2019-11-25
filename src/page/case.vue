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
     <div>

     </div>
     <div>
       <div class="text_nav">
           <router-link :class="{active:shows==1}" @click.native="show1()" tag="a" to="/case/">最高院案例</router-link>
           <router-link :class="{active:shows==2}" @click.native="show2()" tag="a" to="/litigation">诉讼案例</router-link>
           <router-link :class="{active:shows==3}" @click.native="show3()" tag="a" to="/nolitigation">非诉讼案例</router-link> 
       </div>
       <div>
         <router-view>

         </router-view>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
import {queryCaseList} from '@/api/api'
export default {
  name: 'case',
  data() {
    return {
      CaseList:'',
      CaseId:'',
      shows:'1',
    };
  },
  created(){
    this.clickCase()
  },
  methods: {
    clickCase(){
      var _this= this
      _this.CaseId ={categoryId:this.$route.query.id,
                      pageNo:'1',
                      pageSize:'10'} 
      queryCaseList(_this.CaseId).then(res=>{
        console.log(res.data)
       })
    },
    // this.CaseId= this.$route.query.id
    show1:function(){
      this.shows=1
    },
     show2:function(){
      this.shows=2
    },
     show3:function(){
      this.shows=3
    }
  }
  
};
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
  margin-left: -95px;
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
.case .text_nav{
  text-align: center;
}
.case .text_nav a{
 display: inline-block;
 padding: 10px 20px;
}
.case .text_nav a:hover{
 background: #b8131b;
 color: white;
}
.case .active{
   background: #b8131b;
 color: white;
}
</style>