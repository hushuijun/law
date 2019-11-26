<template>
  <div class="newsDetails">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>JINGSHI&nbsp;NEWS</h1>
        <p>新闻资讯</p>
      </div>
    </div>
    <div class="newsDetails_content">
        <div class="newsDetails_title">
           <h3>
            强化企业“体验”，促进企业增值————京师律师受邀“京帆远航”项目授课
           </h3>
           <p>
              2019年10月19日
           </p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newsDetails",
  data() {
    return {
     
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.newsDetails {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.newsDetails .hearder_bg {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url("../assets/news_bg.png") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.newsDetails .hearder_bg img {
  max-width: 100%;
}
.newsDetails .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 40%;
  left: 50%;
  margin-left: -109px;
}
.newsDetails .header_title h1 {
  font-weight: 500;
}
.newsDetails .header_title p {
  font-size: 28px;
}
.newsDetails .newsDetails_content {
  width: 70%;
  margin: auto;
  margin-top: -80px;
  min-height: 500px;
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
.newsDetails .newsDetails_title{
  width: 90%;
  margin:auto;
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid #efefef;
}


</style>