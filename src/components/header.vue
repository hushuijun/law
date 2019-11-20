<template>
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
      <div>
        <img src="../assets/logo.png" alt />
      </div>
      <div>
        <el-button @click="drawer = true" show-close='false' type="primary" style="margin-left: 16px;">点我打开</el-button>
        <el-drawer  :visible.sync="drawer" size="50%"  >
        
        </el-drawer>
      </div>
    </div>
  </el-container>
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
    };
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
    },
    
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
  height: 80px !important;
}
.el-menu--horizontal > .el-menu-item {
  height: 80px;
  line-height: 80px;
}
.el-menu--horizontal > .el-menu-item:hover {
  background: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #e60013;
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
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: white !important;
}
</style>