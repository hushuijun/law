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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.news .hearder_bg {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url("../assets/case_bg.jpg") no-repeat;
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
  top: 40%;
  left: 50%;
  margin-left: -95px;
}
.news .news_content {
  min-height: 800px;
  padding-bottom: 120px;
  background: white;
}
.news .news_center {
  margin-left: 45.5%;
}
.news .top {
  border-bottom: 2px solid #b8131b;
  width: 90%;
  height: 50px;
  margin: 20px auto;
}
</style>