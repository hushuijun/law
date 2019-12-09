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
                <img :src="item.imageUrl" alt="img" />
              </div>
              <h4>
                  <router-link
                  target="_blank" 
                  :to="{path:'/majorDetails',query:{id:item.id}}"
                >{{item.territoryName}}</router-link>
              </h4>
              <ul class="card_content">
                <li v-for="(item1,index) of item.territoryChild" :key="index">
                    <router-link
                    target="_blank" 
                    :to="{path:'/majorDetails',query:{id:item1.id}}">
                    <span></span>
                    {{item1.territoryName}}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="major_right">
          <ul>
            <li v-for="(item,index) of list2" :key="index" class="major_card">
              <div class="card_icon">
                <img :src="item.imageUrl" alt="img" />
              </div>
              <h4>
                  <router-link
                  target="_blank" 
                  :to="{path:'/majorDetails',query:{id:item.id}}"
                >{{item.territoryName}}</router-link>
              </h4>
              
              <ul class="card_content">
                  <li v-for="(item1,index) of item.territoryChild" :key="index">
                      <router-link
                      target="_blank" 
                      :to="{path:'/majorDetails',query:{id:item1.id}}">
                      <span></span>
                      {{item1.territoryName}}
                    </router-link>
                  </li>
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
                <img :src="item.imageUrl" alt="img" />
              </div>
              <h4>
                  <router-link
                  target="_blank" 
                  :to="{path:'/majorDetails',query:{id:item.id}}"
                >{{item.territoryName}}</router-link>
              </h4>
              <ul class="card_content">
                  <li v-for="(item1,index) of item.territoryChild" :key="index">
                      <router-link
                      target="_blank" 
                      :to="{path:'/majorDetails',query:{id:item1.id}}">
                      <span></span>
                      {{item1.territoryName}}
                    </router-link>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="major_right">
          <ul>
            <li v-for="(item,index) of list2" :key="index" class="major_card">
              <div class="card_icon">
                <img :src="item.imageUrl" alt="img" />
              </div>
              <h4>
                  <router-link
                  target="_blank" 
                  :to="{path:'/majorDetails',query:{id:item.id}}"
                >{{item.territoryName}}</router-link>
              </h4>
              <ul class="card_content">
                  <li v-for="(item1,index) of item.territoryChild" :key="index">
                      <router-link
                      target="_blank" 
                      :to="{path:'/majorDetails',query:{id:item1.id}}">
                      <span></span>
                      {{item1.territoryName}}
                    </router-link>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { queryTerritoryList } from "@/api/api";
export default {
  data() {
    return {
      show1: true,
      show2: false,
      list1: [],
      list2: []
    };
  },
  created() {
    //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w <= 1024) {
      this.show1 = false;
      this.show2 = true;
    }
    this.fieldList();
  },
  methods: {
    fieldList() {
      queryTerritoryList().then(res => {
        console.log(res.data);
        this.list1 = res.data.territoryList1;
        this.list2 = res.data.territoryList2;
      });
    }
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.major {
  /* min-height: 1500px; */
  background: #f9f9f9;
  padding-bottom: 80px;
}
.major a:hover{
  color: #b8131b;
  border-bottom: 1px solid #b8131b;
}
.major .hearder_bg {
  width: 100%;
  height: 620px;
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
  top: 50%;
  left: 50%;
  margin-top: -62.5px;
  margin-left: -141px;
}
.major .header_title h1 {
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 25px;
}
.major .header_title p {
  font-size: 24px;
}
.major .major_content {
  width: 1200px;
  margin: auto;
  margin-top: -95px;
  padding-bottom: 90px;
  background: white;
  position: relative;
  z-index: 1;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12); */
}
.major .top {
  border-bottom: 2px solid #b8131b;
  width: 1120px;
  height: 94px;
  margin: auto;
}
.major .top:before {
  content: "";
  width: 0px;
  height: 0px;
  border-top: 15px solid #b8131b;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -15px;
}

.cd-container {
  width: 1120px;
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
  margin-top: 100px;
}
.major .major_left::before {
  /* this is the vertical line */
  content: "";
  position: absolute;
  top: 0;
  left: 18px;
  height: 90%;
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
  width: 440px;
  box-sizing: border-box;
  margin-left: 34px;
}
.major .major_left .major_card {
  border: 1px solid #ececec;
  margin-top: 20px;
  position: relative;
}
.major .major_left .major_card .card_icon {
  position: absolute;
  top: -4px;
  right: -127px;
}
.major .card_icon img{
  max-width: 100%;
}
.major .major_left .major_card:first-child {
  margin-top: 0px;
}
.major .major_right {
  float: right;
  width: 440px;
  margin-right: 34px;
}
.major .major_right .major_card {
  border: 1px solid #ececec;
  margin-top: 20px;
  position: relative;
}
.major .major_right .major_card .card_icon {
  position: absolute;
  top: -4px;
  left: -127px;
}
.major .major_right .major_card:first-child {
  margin-top: 215px;
}
.major .major_card h4 {
  height: 60px;
  background: #ececec;
  font-size: 18px;
  /* font-weight: 500; */
  line-height: 60px;
  padding-left: 20px;
}
.major .major_card .card_content {
  padding-bottom: 30px;
}
.major .major_card .card_content li {
  display: inline-block;
  width: 50%;
  font-size: 16px;
  color: #666666;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
}
.major .major_card .card_content li span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: black;
}
.major .major_card .card_content li a:hover span{
  background: #b8131b;
}
@media screen and (max-width: 1024px) {
  .major{
    padding-bottom: 55px;
  }
  .major .hearder_bg {
    height: 240px;
  }
  .major .header_title {
    margin-left: -82px;
    margin-top: -29px;
  }
  .major .header_title h1 {
    font-size: 20px;
    margin-bottom: 13px;
  }
  .major .header_title p {
    font-size: 14px;
  }
  #cd-timeline {
    margin-top: 25px;
  }
  .cd-container {
    width: 100%;
  }
  .major .major_left {
    float: initial;
    width: calc(100% - 30px);
    margin: 0 auto;
  }
  .major .major_right {
    float: initial;
     width: calc(100% - 30px);
    margin: 0 auto;
  }
  .major .major_left .major_card{
    margin-top: 10px;
  }
    .major .major_right .major_card{
    margin-top: 10px;
  }
  .major .major_left .major_card .card_icon {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    left: 5px;
    top: 5px;
  }
  .major .major_right .major_card .card_icon {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    left: 5px;
    margin-top: 8px;
  }
  .major .major_left::before {
    height: 0;
  }
  .major .major_right .major_card:first-child {
    margin-top: 10px;
  }
  .major .major_card h4 {
    padding-left: 50px;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
  }
  .major .major_card .card_content li{
    font-size: 13px;
    padding-top: 15px;
    padding-left: 50px;
    display: block;
    width: 100%;
  }
}
</style>