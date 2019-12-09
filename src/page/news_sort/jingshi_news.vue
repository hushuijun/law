<template>
  <div class="jingshi_news">
    <ul class="article">
      <li v-for="(item,index) of news" :key="index">
        <router-link tag="a" target="_blank" :to="{path:'/newsDetails',query:{id:item.id}}">
          <div class="jingshi_content">
            <div class="news_time">
              <span>2019</span>
              <p>10/9</p>
            </div>
            <div class="news_text">
              <h4>{{item.articleTitle}}</h4>
              <p>{{item.articleDescribe}}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="paging" v-if="show">
      <span>共{{ArticleNum}}条</span>
      <a @click="prePage()">上一页</a>
      <ul>
          <li v-for="(item, index) in ArticleNum" :key="index" 
          :class="{pagractive:index==currentPage}" 
          @click="prevOrNext(index)">
        <a>{{item}}</a>
      </li>
      </ul>
      <a @click="nextPage()">下一页</a>
    </div>
    <div class="more" v-if="show1">
      <p>
        查看更多>>
      </p>
    </div>
  </div>
</template>
<script>
import { queryArticleList } from "@/api/api";
export default {
  name: "JingNews",
  props: ["newsList"],
  data() {
    return {
      news: [],
      newId: 1,
      show:true,
      show1:false,
      ArticleNum:'',
      currentPage:'',
      more:[],
      id:{
          categoryId:'',
          pageNo:'1',
          pageSize:'10'
          },
    };
  },
  created() {
    this.new(this.newId);
      //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w <= 1024) {
      this.show = false;
      this.show1 = true;
    }
  },
  watch: {
    newsList() {
      this.newId = this.newsList;
      this.new(this.newId);
    }
  },
  methods: {
    new() {
      var that = this
      that.id.categoryId=that.newsList
      queryArticleList(that.id).then(res => {
        that.news = res.data.list
        that.ArticleNum = res.data.count
      });
    },
     // 下一页
     nextPage() {
      if(1<this.currentPage){
        this.pageNo =++this.currentPage;
        if (this.currentPage == this.pageNo - 1) return ;
        this.new()
      }
    },
    prevOrNext (index) {
      console.log()
      this.currentPage=index
      this.pageNum = index + 1
      this.new()
    },
    // 上一页
    prePage() {
        if (this.currentPage == 0) return ;
        this.pageNo = --this.currentPage;
        console.log(this.pageNo)
        this.new()
    },
    //点击更多
    
  }
};
</script>
<style scoped>
.jingshi_news {
  margin-top: 50px;
}
.jingshi_news ul,
li,
h4 {
  margin: 0;
  padding: 0;
  list-style: none;
}
.jingshi_news .jingshi_content {
  width: 1150px;
  margin: auto;
}
.jingshi_news .article li:first-child {
  border-top: 1px solid #efefef;
}
.jingshi_news .article li {
  list-style: none;
  border-bottom: 1px solid #efefef;
  padding: 60px 0;
}
.jingshi_news .article li a {
  color: black;
  text-decoration: none;
}
.jingshi_news .article li:hover {
  background: rgba(0, 0, 0, 0.1);
}
.jingshi_news .jingshi_content {
  display: flex;
}
.jingshi_news .jingshi_content .news_time {
  flex-shrink: 0;
  background: #dddddd;
  text-align: center;
  padding: 24px;
}
.jingshi_news .jingshi_content .news_time span {
  font-size: 14px;
}
.jingshi_news .jingshi_content .news_time p {
  font-size: 20px;
}
.jingshi_news .jingshi_content .news_text {
  padding-left: 40px;
  flex: 1;
}
.jingshi_news .jingshi_content .news_text h4 {
  padding-top: 5px;
  font-size: 18px;
}
.jingshi_news .jingshi_content .news_text p {
  color: #808080;
  padding-top: 16px;
  font-size: 14px;
}
.jingshi_news .paging {
  font-size: 16px;
  text-align: center;
  margin-top: 50px;
  /* padding: 25px; */
}
.jingshi_news .paging a{
  cursor: pointer;
}
.jingshi_news .paging span {
  margin-right: 20px;
}
.jingshi_news .paging ul {
  display: inline-block;
}
.jingshi_news .paging ul li {
  display: inline-block;
  padding: 0 5px;
}
.jingshi_news .paging ul li a {
  display: inline-block;
  padding: 5px 10px;
}
.jingshi_news .paging ul li a:hover {
  background: #7c7c7c;
  color: white;
}
.pagractive{
  background: #7C7C7C;
  color: white;
}
@media screen and (max-width: 1024px) {
  .jingshi_news {
    margin-top: 20px;
  }
  .jingshi_news .jingshi_content {
    width: 90%;
  }
  .jingshi_news .article li {
    padding: 20px 0;
  }
  .jingshi_news .jingshi_content .news_time {
    padding: 14px;
  }
  .jingshi_news .more p{
    text-align: center;
    color: #b8131b;
    margin-top: 20px;
  }
}
</style>