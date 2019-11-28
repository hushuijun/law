<template>
  <div class="major">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>专业领域</h1>
        <p>咨询热线：4001-666-001</p>
      </div>
    </div>
    <div class="major_content" v-if="show1">
      <div class="top"></div>
      <section id="cd-timeline" class="cd-container">
        <div class="major_left">
          <ul>
            <li v-for="(item,index) of list1" :key="index" class="major_card">
              <div class="card_icon">
                <img src="" alt="img">
              </div>
              <h4>{{item.title}}</h4>
              <ul class="card_content">
                <li v-for="(item1,index) of item.childrenList">
                  <span></span>
                  {{item1.item}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="major_right">
          <ul>
            <li v-for="(item,index) of list2" :key="index" class="major_card">
              <div class="card_icon">
                 <img src="" alt="img">
              </div>
              <h4>{{item.title}}</h4>
              <ul class="card_content">
                <li v-for="(item2,index) of item.childrenList">
                  <span></span>
                  {{item2.item}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div v-if="show2">
       <section id="cd-timeline" class="cd-container">
        <div class="major_left">
          <ul>
            <li v-for="(item,index) of list1" :key="index" class="major_card">
              <div class="card_icon">
                <img src="" alt="img">
              </div>
              <h4>{{item.title}}</h4>
              <ul class="card_content">
                <li v-for="(item1,index) of item.childrenList">
                  <span></span>
                  {{item1.item}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="major_right">
          <ul>
            <li v-for="(item,index) of list2" :key="index" class="major_card">
              <div class="card_icon">
                 <img src="" alt="img">
              </div>
              <h4>{{item.title}}</h4>
              <ul class="card_content">
                <li v-for="(item2,index) of item.childrenList">
                  <span></span>
                  {{item2.item}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import {queryTerritoryList} from '@/api/api'
export default {
  data() {
    return {
      show1:true,
      show2:false,
      list1: [
        {
          title: "诉讼、仲裁",
          childrenList: [
            {
              item: "商事1"
            },
            {
              item: "法律文书"
            },
             {
              item: "商事1"
            },
            {
              item: "法律文书"
            },
            
          ]
        },
        {
          title: "国际法务",
          childrenList: [
            {
              item: "商事2"
            },
            {
              item: "法律文书"
            },
             {
              item: "商事1"
            },
            {
              item: "法律文书"
            }
          ]
        }
      ],
      list2: [
        {
          title: "公司法律",
          childrenList: [
            {
              item: "中小股东1"
            },
            {
              item: "公司股权重组"
            },
            {
              item: "中小股东1"
            },
            {
              item: "公司股权重组"
            }
          ]
        },
        {
          title: "金融资本",
          childrenList: [
            {
              item: "中小股东2"
            },
            {
              item: "公司股权重组"
            },
            {
              item: "中小股东1"
            },
            {
              item: "公司股权重组"
            }
          ]
        }
      ]
    };
  },
  created(){
     //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示	
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;		
    if(w <= 1024){			
      this.show1 = false;		
      this.show2 = true;	
    }
    this.fieldList();
  },
  methods:{
    fieldList(){
        queryTerritoryList().then(res=>{
          console.log(res.data)
          let territoryList1 = res.data.territoryList1;
          let territoryList2 = res.data.territoryList2;
            for(var i=0;i<territoryList1.length;i++){
                console.log(territoryList1[i])
            }
            for(var i=0;i<territoryList2.length;i++){
              console.log(territoryList2[i])
            }
        })
    }
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.major {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.major .hearder_bg {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url("../assets/major_bg.jpg") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.major .hearder_bg img {
  max-width: 100%;
}
.major .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 40%;
  left: 50%;
  margin-left: -95px;
}
.major .major_content {
  width: 1200px;
  margin: auto;
  margin-top: -80px;
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}

.major .major_center {
  margin-left: 45.5%;
}
.major .top {
  border-bottom: 1px solid #b8131b;
  width: 90%;
  height: 50px;
  margin: 20px auto;
}
.major .top:before {
  content: "";
  width: 0px;
  height: 0px;
  border-top: 10px solid #b8131b;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -10px;
}

.cd-container {
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
}
.cd-container::after {
  /* clearfix */
  content: "";
  display: table;
  clear: both;
}

/* -------------------------------- 

Main components 

-------------------------------- */

#cd-timeline {
  position: relative;
  margin-top: 2em;
  margin-bottom: 2em;
}
.major .major_left::before{
  /* this is the vertical line */
  content: "";
  position: absolute;
  top: 0;
  left: 18px;
  height: 75%;
  width: 4px;
  background: #d7e4ed;
  left: 50%;
  margin-left: -2px;
}

.major ul,
li,
h4 {
  margin: 0;
  padding: 0;
}
.major .major_left {
  float: left;
  width: 47%;
  padding: 0 20px;
  box-sizing: border-box;
}
.major .major_left .major_card {
  border: 1px solid #ECECEC;
  margin-top: 20px;
  position: relative;
}
.major .major_left .major_card .card_icon{
  position: absolute;
  right: -82px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #b8131b;
   border: 4px solid white;
}
.major .major_left .major_card:first-child {
  margin-top: 0px;
}
.major .major_right {
  float: right;
  width: 47%;
  padding: 0 20px;
  box-sizing: border-box;
}
.major .major_right .major_card {
  border: 1px solid #ECECEC;
  margin-top: 20px;
  position: relative;
}
.major .major_right .major_card .card_icon{
  position: absolute;
  left: -84px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #b8131b;
  border: 4px solid white;
}
.major .major_right .major_card:first-child {
  margin-top: 100px;
}
.major .major_card h4{
  height: 50px;
  background: #ECECEC;
  font-size: 16px;
  line-height: 50px;
  padding-left: 20px;
}
.major .major_card .card_content{
  padding-bottom: 30px;
}
.major .major_card .card_content li{
  display: inline-block;
  width: 50%;
  padding-top: 15px;
  padding-left: 20px;
  box-sizing: border-box;
}
.major .major_card .card_content li span{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: black;
}
@media screen and (max-width: 1024px) {
.major .major_left{
  float: initial;
  width: auto;
}
.major .major_right{
float: initial;
width: auto;
}
.major .major_left .major_card .card_icon{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  left: 5px;
}
.major .major_right .major_card .card_icon{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  left: 5px;
}
.major .major_left::before{
  height: 0;
}
.major .major_right .major_card:first-child {
  margin-top: 20px;
}
.major .major_card h4{
   padding-left: 60px;
}
}
</style>