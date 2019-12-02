<template>
  <div class="supremeCourt">
    <ul class="article">
      <li>
         <router-link tag="a" target="_blank" to="/caseDetails">
        <div class="supremeCourt_top">
          <h4>最高院标题</h4>
          <p>2019年10月19日</p>
          <div class="clearfix"></div>
        </div>
        <div class="supremeCourt_text">
          <p>正文</p>
        </div>
         </router-link>
      </li>
    </ul>
    <div class="paging">
      <span>共88条</span>
      <a>上一页</a>
      <ul>
        <li>
          <a>1</a>
        </li>
        <li>
          <a>2</a>
        </li>
        <li>
          <a>3</a>
        </li>
        <li>
          <a>4</a>
        </li>
        <li>
          <a>5</a>
        </li>
      </ul>
      <a>下一页</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "SupremeCourt",
  props: ['SupremeId'],
  data() {
    return {};
  },
  created(){
    this.SuperContent();
  },
  mounted(){
    this.SuperContent();
  },
  methods:{
    SuperContent(){
      console.log(this.SupremeId)
    }
  },
  watch: {
      '$route' (to, from) {
          console.log(this.SupremeId)
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
}
.supremeCourt .paging {
  text-align: center;
  padding: 20px;
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
</style>