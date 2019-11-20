<template>
  <el-container class="nav" :class="{ 'navActive': scrollFlag }">
    <el-header>
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
          <img src="../assets/logo.png" alt  style="margin-left:25px;"/>
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
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      scrollFlag:false,
    };
  },
  mounted(){
      window.addEventListener('scroll', this.dataScroll)
  },
  methods: {
     dataScroll: function () {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if(this.scroll>300){
            this.scrollFlag=true
            }else{
              this.scrollFlag=false
            }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.nav{
  position: fixed;
  z-index: 11;
}
.navActive{
  background: rgba(0, 0, 0, 0.5);
}
.el-container {
  width: 100%;
  border-bottom: 1px solid #3B4350;
}
.el-menu-item.is-disabled{
    opacity: inherit;
}
.el-menu.el-menu--horizontal{
  border: none;
}
.el-header{
       height: 80px !important;
}
.el-menu--horizontal>.el-menu-item{
    height: 80px;
    line-height: 80px;
}
.el-menu--horizontal>.el-menu-item:hover{
  background: none;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 2px solid #E60013;
}
ul {
  width: 80%;
  margin: auto;
  padding: 0;
 background: rgba(0, 0, 0, 0)
}
li {
  width: 14%;
  display: inline-block;
  list-style: none;
  text-align: center;
}
li a {
  /* padding: 20px 0; */
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: white !important;
}
</style>