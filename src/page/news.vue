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
      <div>
        <div class="text_nav">
          <router-link 
          tag="a" 
          :class="isSelect === 'Jingshi_news' ? 'active' : ''"
          @click.native="selectNav(title)" 
          to="/news/"
          >京师新闻</router-link>
          <router-link
            tag="a"
          :class="isSelect === 'Jingshi_party' ? 'active' : ''"
            @click.native="selectNav(title)"
            to="/jingshi_party"
          >京师党建</router-link>
          <router-link
            tag="a"
             :class="isSelect === 'PublicWelfare' ? 'active' : ''"
            @click.native="selectNav(title)"
            to="/publicWelfare"
          >京师公益</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelect:'Jingshi_news',
      title:''
    };
  },
  mounted(){
     this.isSelect = this.$route.name
  },
  methods: {
    selectNav(title) {
      this.isSelect = this.$route.name;
      switch (title) {
        case "SupremeCourt":
          this.$router.push("/");
          break;
        case "Litigation":
          this.$router.push("/litigation");
          break;
        case "Nolitigation":
          this.$router.push("/nolitigation");
          break;
      }
    }
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
  background: url("../assets/news_bg.png") no-repeat;
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
  width: 70%;
  height: 50px;
  margin: 20px auto;
}
.news .text_nav {
  text-align: center;
  margin-top: 70px;
}
.news .text_nav a {
  display: inline-block;
  padding: 10px 20px;
}
.news .text_nav a:hover {
  background: #b8131b;
  color: white;
}
.news .active {
  background: #b8131b;
  color: white;
}
.news .router-link-exact-active .router-link-active {
  background: #b8131b;
  color: white;
}
</style>