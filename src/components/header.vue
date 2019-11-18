<template>
  <el-container>
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
          <img src alt />
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
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-container {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
}
ul {
  width: 80%;
  margin: auto;
  padding: 0;
}
li {
  width: 13%;
  display: inline-block;
  list-style: none;
  text-align: center;
}
li a {
  /* padding: 20px 0; */
  text-decoration: none;
}
</style>