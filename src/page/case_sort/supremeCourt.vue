<template>
  <div class="supremeCourt">
    <ul class="article">
      <li v-for="(item,index) in supremeCourtList" 
          :key="index"
          @click="clickSupre(item.id)">
          <router-link  target= '_blank'  :to="{ path: 'caseDetails', query: { id: item.id }}">
          <div class="supremeCourt_top">
            <h4>{{item.caseTitle}}</h4>
            <p>{{item.createTime}}</p>
            <div class="clearfix"></div>
          </div>
          <div class="supremeCourt_text">
            <p>{{item.caseDepict}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="paging" v-if="1<ArticleNum.length">
      <!-- <span>共88条</span> -->
      <a  @click="prePage()">上一页</a>
      <ul>
        <li v-for="(item, index) in ArticleNum" :key="index" 
            :class="{pagractive:index==currentPage}" 
            @click="prevOrNext(index)">
          <a>{{item}}</a>
        </li>
      </ul>
      <a @click="nextPage()">下一页</a>
    </div>
  </div>
</template>
<script>
import { queryCaseList } from "@/api/api";
export default {
  name: "SupremeCourt",
  props:['SupremeId'],
  data() {
    return {
      id:{
          categoryId:'',
          pageNo:'1',
          pageSize:'10'
          },
      supremeCourtList:'',
      currentPage:'',
    };
  },
  created(){
    this.SuperContent();
  },
  mounted(){
   
  },
  methods:{
    SuperContent(){
      var that = this
      that.id.categoryId=that.SupremeId
      console.log(that.id)
      queryCaseList(that.id).then(res=>{
        console.log(res.data)
        that.supremeCourtList = res.data.list
        that.ArticleNum = res.data.count
        
      })
    },
    // clickSupre(id){
    //   this.$router.push({
    //       path:'/caseDetails',
    //       query:{id:id}
    //   }); 
    // },
    // 下一页
    nextPage() {
        this.pageNo =++this.currentPage;
        if (this.currentPage == this.pageNo - 1) return ;
        this.SuperContent()
    },
    prevOrNext (index) {
      console.log()
      this.currentPage=index
      this.pageNum = index + 1
      this.SuperContent()
    },
    // 上一页
    prePage() {
        if (this.currentPage == 0) return ;
        this.pageNo = --this.currentPage;
        console.log(this.pageNo)
        this.SuperContent()
    }
  },
  watch: {
    SupremeId(){
      console.log(this.SupremeId)
        this.SuperContent();
      }
  }
};
</script>
<style scoped>
.supremeCourt {
  margin-top: 20px;
}
.supremeCourt ul,
h4 {
  margin: 0;
  padding: 0;
}
.supremeCourt .article li:first-child {
  border-top: 1px solid #efefef;
}
.supremeCourt .article li {
  list-style: none;
  border-bottom: 1px solid #efefef;
  padding: 20px 5%;
  cursor: pointer;
}
.supremeCourt .article li a{
   color: black;
   text-decoration: none;
}
.supremeCourt .article li .supremeCourt_top h4 {
  float: left;
}
.supremeCourt .article li .supremeCourt_top p {
  float: right;
  font-size: 14px;
  color: slategray;
}
.clearfix {
  clear: both;
}
.supremeCourt .supremeCourt_text {
  margin-top: 10px;
  font-size: 14px;
  color: slategray;
  text-align: left;
}
.supremeCourt .paging {
  text-align: center;
  padding: 20px;
}
.supremeCourt .paging a{
  cursor: pointer;
}
.supremeCourt span {
  margin-right: 20px;
}
.supremeCourt .paging ul {
  display: inline-block;
}
.supremeCourt .paging ul li {
  display: inline-block;
  padding: 0 5px;
}
.supremeCourt .paging ul li a {
  display: inline-block;
  padding: 5px 10px;
}
.supremeCourt .paging ul li a:hover{
    background: #7C7C7C;
    color: white;
}
.pagractive{
  background: #7C7C7C;
  color: white;
}

</style>