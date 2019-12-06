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
        <h3>{{news1.articleTitle}}</h3>
        <p>{{news1.createTime}}</p>
      </div>
      <div class="newsDetails_txt" v-html="news1.content"></div>
    </div>
  </div>
</template>
<script>
import { queryArticleById } from "@/api/api";
export default {
  name: "newsDetails",
  data() {
    return {
      news1: ""
    };
  },
  created() {
    queryArticleById(this.$route.query).then(res => {
      console.log(res.data);
      this.news1 = res.data;
    });
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
@import "../assets/css/base.css";
.newsDetails {
  /* min-height: 1500px; */
  background: #f9f9f9;
  padding-bottom: 80px;
}
.newsDetails .hearder_bg {
  width: 100%;
  height: 620px;
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
  top: 50%;
  left: 50%;
  margin-left: -133px;
  margin-top: -47px;
}
.newsDetails .header_title h1 {
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
}
.newsDetails .header_title p {
  font-size: 28px;
}
.newsDetails .newsDetails_content {
  width: 1200px;
  margin: auto;
  margin-top: -97px;
  /* min-height: 500px; */
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
}
.newsDetails .newsDetails_title {
  width: 1096px;
  height: 200px;
  margin: auto;
  /* padding: 20px 0; */
  text-align: center;
  border-bottom: 1px solid #efefef;
}
.newsDetails .newsDetails_title h3 {
  font-size: 30px;
  margin: 0;
  padding-top: 75px;
  padding-bottom: 30px;
}
.newsDetails .newsDetails_title p {
  font-size: 16px;
  color: #707070;
}
.newsDetails .newsDetails_content .newsDetails_txt {
  width: 1096px;
  margin: auto;
  font-size: 16px;
  color: #505050;
  padding-top: 48px;
  line-height: 30px;
}
.newsDetails .newsDetails_content .newsDetails_txt >>> p img {
  display: block;
   width: 80% !important;
  margin:20px auto;
}
@media screen and (max-width: 1024px) {
  .newsDetails .hearder_bg {
    height: 250px;
  }
  .newsDetails .header_title h1 {
    font-size: 18px;
  }
  .newsDetails .header_title {
    margin-left: -64.5px;
    margin-top: -26.5px;
  }
  .newsDetails .header_title p {
    font-size: 14px;
  }
  .newsDetails .newsDetails_content {
    width: 100%;
    margin: 0;
  }
  .newsDetails .newsDetails_title {
    width: 90%;
    height: auto;
  }
  .newsDetails .newsDetails_content .newsDetails_txt {
    width: 90%;
    padding-top: 20px;
  }
  .newsDetails .newsDetails_title h3 {
    font-size: 18px;
    margin: 0;
    padding-top: 25px;
    padding-bottom: 10px;
  }
  .newsDetails .newsDetails_content .newsDetails_txt >>> p img{
    width: 100% !important;
  }
}
</style>