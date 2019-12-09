<template>
  <div class="header">
  <el-container>
    <el-header class="nav" :class="{ 'navActive': scrollFlag }" v-if="show">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/major">专业领域</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/team">团队介绍</router-link>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <img src="../assets/logo.png" alt style="margin-left:25px;" />
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/case">经典案例</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/news">新闻资讯</router-link>
        </el-menu-item>
        <el-menu-item index="7">
          <router-link to="/about">关于京师</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <div class="phone_nav" v-if="show1">
      <div class="phone_nav_left">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="phone_nav_right">
        <div class="phone_menu" @click="drawer = true" show-close="false">
          <img src="../assets/menu_icon.png" alt />
        </div>
        <el-drawer class="menu_item" :visible.sync="drawer" size="50%">
          <ul>
            <router-link tag="li" to="/">首页</router-link>
            <router-link tag="li" to="/major">专业领域</router-link>
            <router-link tag="li" to="/team">团队介绍</router-link>
            <router-link tag="li" to="/case">经典案例</router-link>
            <router-link tag="li" to="/news">新闻资讯</router-link>
            <router-link tag="li" to="/about">关于京师</router-link>
          </ul>
        </el-drawer>
      </div>
    </div>
  </el-container>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      scrollFlag: false,
      show: true,
      show1: false,
      drawer: false,
      list:[
        {name:'首页',id:'1',path:'/'},
        {name:'专业领域',id:'1',path:'/'},
        {name:'团队介绍',id:'1',path:'/'},
        {name:'首页',id:'1',path:'/'},
        {name:'经典案例',id:'1',path:'/'},
        {name:'新闻资讯',id:'1',path:'/'},
        {name:'首页',id:'1',path:'/'},
      ]
    };
  },
  created() {
      switch (this.$route.name) {
      case "Home":
        this.activeIndex = "1";
        break;
      case "Major":
        this.activeIndex = "2";
        break;
        case "majorDetails":
        this.activeIndex = "2";
        break;
      case "Team":
        this.activeIndex = "3";
        break;
        case "Whole":
        this.activeIndex = "3";
        break;
        case "Director":
        this.activeIndex = "3";
        break;
        case "GlobalPartners":
        this.activeIndex = "3";
        break;
        case "PartnerLawyer":
        this.activeIndex = "3";
        break;
        case "PracticingLawyer":
        this.activeIndex = "3";
        break;
      case "SupremeCourt":
        this.activeIndex = "5";
        break;
        case "Litigation":
        this.activeIndex = "5";
        break;
        case "Nolitigation":
        this.activeIndex = "5";
        break;
         case "CaseDetails":
        this.activeIndex = "5";
        break;
      case "Jingshi_news":
        this.activeIndex = "6";
        break;
         case "Jingshi_party":
        this.activeIndex = "6";
        break;
         case "PublicWelfare":
        this.activeIndex = "6";
        break;
        case "NewsDetails":
        this.activeIndex = "6";
        break;
      case "About":
        this.activeIndex = "7";
        break;
    }
    
  },
  watch:{   //监听路由变化
    $route( to , from ){   
        // to , from 分别表示从哪跳转到哪，都是一个对象
        // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
        switch (this.$route.name) {
      case "Home":
        this.activeIndex = "1";
        break;
      case "Major":
        this.activeIndex = "2";
        break;
        case "majorDetails":
        this.activeIndex = "2";
        break;
      case "Team":
        this.activeIndex = "3";
        break;
        case "Whole":
        this.activeIndex = "3";
        break;
        case "Director":
        this.activeIndex = "3";
        break;
        case "GlobalPartners":
        this.activeIndex = "3";
        break;
        case "PartnerLawyer":
        this.activeIndex = "3";
        break;
        case "PracticingLawyer":
        this.activeIndex = "3";
        break;
      case "SupremeCourt":
        this.activeIndex = "5";
        break;
        case "Litigation":
        this.activeIndex = "5";
        break;
        case "Nolitigation":
        this.activeIndex = "5";
        break;
         case "CaseDetails":
        this.activeIndex = "5";
        break;
      case "Jingshi_news":
        this.activeIndex = "6";
        break;
         case "Jingshi_party":
        this.activeIndex = "6";
        break;
         case "PublicWelfare":
        this.activeIndex = "6";
        break;
        case "NewsDetails":
        this.activeIndex = "6";
        break;
      case "About":
        this.activeIndex = "7";
        break;
    }
     }
},
  mounted() {
    window.addEventListener("scroll", this.dataScroll);
    //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w <= 1024) {
      this.show = false;
      this.show1 = true;
    }
  },
  methods: {
    dataScroll: function() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll > 300) {
        this.scrollFlag = true;
      } else {
        this.scrollFlag = false;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.nav {
  position: fixed;
  z-index: 11;
  width: 100%;
  border-bottom: 1px solid #3b4350;
}
.navActive {
  background: rgba(0, 0, 0, 0.5);
}
.el-menu-item.is-disabled {
  opacity: inherit;
}
.el-menu.el-menu--horizontal {
  border: none;
}
.el-header {
  height: 82px !important;
}
.el-menu--horizontal > .el-menu-item {
  height: 80px;
  line-height: 80px;
  transition: all 0.5s ease 0s;
}
.header >>> .el-menu--horizontal .el-menu-item:hover {
  background: transparent;
}
.nav .el-menu--horizontal > .el-menu-item.is-active{
  border:none;
  background: none;
}
.nav .el-menu--horizontal > .el-menu-item.is-active a{
  display: inline-table;
  border-bottom: 2px solid #e60012;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #e60013;
  transition: all 0.5s ease 0s;
}
ul {
  width: 80%;
  margin: auto;
  padding: 0;
  background: rgba(0, 0, 0, 0);
}
li {
  width: 14%;
  display: inline-block;
  list-style: none;
  text-align: center;
}
li a {
  /* padding: 20px 0; */
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  /* width: 100%; */
  height: 100%;
  color: white !important;
}
.phone_nav {
  position: fixed;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  z-index: 111;
}
.phone_nav .phone_nav_left {
  float: left;
}
.phone_nav .phone_nav_right {
  float: right;
}
.phone_nav .phone_nav_right .phone_menu {
  width: 40px;
  margin-top: 12px;
}
.phone_nav .phone_nav_right .phone_menu img {
  max-width: 100%;
}
.menu_item li {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px;
}
</style>