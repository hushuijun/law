<template>
  <div class="news">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>JINGSH&nbsp;NEWS</h1>
        <p>新闻资讯</p>
      </div>
    </div>
    <div class="news_content">
      <div class="top"></div>
      <div>
        <div class="text_nav">
          <a v-for="(item,index) of caseList" :key="index"
          :class="isSelect === item.id ? 'active' : ''"
          @click="selectNav(item.id,index)" 
          >{{item.name}}</a>
        </div>
        <!-- <div>
          <router-view></router-view>
        </div> -->
        <div>
          <JingNews v-bind:newsList = "NewsId"></JingNews>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JingNews from '@/page/news_sort/jingshi_news'
export default {
  name:'news',
  components:{JingNews},
  data() {
    return {
      isSelect:'1',
      title:'',
      caseList:[{id:'1',name:'京师新闻'},{id:'2',name:'京师党建'},{id:'3',name:'京师公益'}],
      NewsId:'',
    };
  },
  created(){
 
  },
  mounted(){
    
  },
  methods: {
    selectNav(id,index){
      this.NewsId = id
      this.isSelect = id
      console.log(this.NewsId)
    }
  },
};
</script>
<style scoped>
@import "../assets/css/base.css";
.news .hearder_bg {
  width: 100%;
  height: 620px;
  overflow: hidden;
  position: relative;
  background: url("../assets/news_bg.png") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.news .hearder_bg img {
  max-width: 100%;
}
.news .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  left: 50%;
  margin-left: -155px;
  margin-top: -47px;
}
.news .header_title h1{
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  letter-spacing: 4px;
}
.news .header_title p{
  font-size: 28px;
}
.news .news_content {
  /* min-height: 800px; */
  padding-bottom: 90px;
  background: white;
}
.news .top {
  border-bottom: 2px solid #b8131b;
  width: 1118px;
  height: 90px;
  margin: auto;
}
.news .text_nav {
  text-align: center;
  margin-top: 90px;
}
.news .text_nav a {
  display: inline-block;
  padding: 12px 50px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}
.news .text_nav a:hover {
  background: #b8131b;
  color: white;
}
.news .active {
  background: #b8131b;
  color: white;
}
.news .router-link-exact-active .router-link-active {
  background: #b8131b;
  color: white;
}
@media screen and (max-width: 1024px) {
    .news .hearder_bg{
    height: 250px;
  }
  .news .header_title h1{
    font-size: 18px;
  }
  .news .header_title{
    margin-left: -64.5px;
    margin-top: -26.5px;
  }
  .news .header_title p{
    font-size: 14px;
  }
  .news .top{
    width: 90%;
    height: 30px;
  }
  .news .text_nav {
  margin-top: 30px;
}
.news .text_nav a {
  padding: 12px 10px;
  font-size: 16px;
  margin-left: 10px;
}
.news .news_content{
  padding-bottom: 30px;
}
}
</style>