<template>
  <div class="h5_BG6">
    <div class="H5_top">
      <h3>经典案例</h3>
      <p>CLASSIC CASE</p>
      <span class="line"></span>
    </div>
    <div class="swiper-container" id="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of BG6List">
          <img src="../assets/guohui.png" />
          <p class="el_p1">中华人民共和国</p>
          <p class="el_p2">{{item.courtName}}</p>
          <p class="el_p3">{{item.sentenceType}}</p>
          <p class="el_p4">{{item.targetAmount}}</p>
          <div class="Cont4_bottm">
            <p>{{item.caseTitle}}</p>
            <h4>{{CAtegoryId}}</h4>
          </div>
          <div class="mask"></div>
        </div>
      </div>
    </div>
    <p class="h5_BG6_p">
        <router-link to="/case">更多案例</router-link>
    </p>
    <div class="Home_bannerBT">
      <span>
        <img src="../assets/H5_down2.png" />
      </span>
    </div>
  </div>
</template>
    
    
<script>
// import "swiper/dist/css/swiper.css";
import Swiper from "swiper/dist/js/swiper.min.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import {queryCase} from '@/api/api'
import $ from "jquery";
export default {
  name: "H5home6",
  components: {
    swiper,
    swiperSlide,
    CAtegoryId:''
  },
  data() {
    return {
      BG6List: ''
    };
  },
  mounted() {
    this.homeCase()
    new Swiper("#banner", {
      loop: true,
      loopedSlides: 5,
      slidesPerView: "auto",
      // autoplay: true,
      centeredSlides: true,
      initialSlide: 2,
      watchSlidesProgress: true,
      pagination: {
        el: ".banner_page",
        clickable: true
      },
      on: {
        progress: function(progress) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            if (Math.abs(slideProgress) > 1) {
              var modify = (Math.abs(slideProgress) - 1) * 0.4 + 1;
            }
            var translate = slideProgress * modify * 200 + "px",
              scale = 1 - Math.abs(slideProgress) / 11,
              zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform(
              "translateX(" + translate + ") scale(" + scale + ")"
            );
            slide.css("zIndex", zIndex);
            slide.css("opacity", 1);
            if (Math.abs(slideProgress) > 1) {
              slide.css("opacity", 0);
            }
          }
        },
        setTransition: function(transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }
      }
    });
  },
  methods: {
        homeCase(){
            var that = this
            queryCase().then(res=>{ 
                that.BG6List = res.data
                for( let i= 0;i<that.BG6List.length;i++){
                  if(that.BG6List[i].categoryId == 1){
                      that.CAtegoryId ='最高院案例'
                  }else if (that.BG6List[i].categoryId == 2) {
                    that.CAtegoryId ='诉讼案例'
                  }else if (that.BG6List[i].categoryId == 3) {
                    that.CAtegoryId ='非诉案例'
                  }
                }
            })
        }
  }
};
</script>

<style scoped>
@import'../assets/css/base.css';
@import "../assets/css/home.css";
@import "swiper/dist/css/swiper.css";
.h5_BG6_p {
  text-align: center;
  margin: auto;
}
.h5_BG6 a {
  color: #262626;
  border: 1px solid #262626;
  display: inline-block;
  padding: 10px 30px;
  margin-top: 10px;
}
.h5_BG6 .el-carousel__container {
  height: 310px !important;
}
.h5_BG6 .el-carousel img {
  width: 49px;
  padding-top: 32px;
  padding-bottom: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item {
  height: 292px;
  width: 218px;
  background-color: #fff;
  color: #000;
}
.el_p1 {
  font-size: 12px;
}
.el_p2 {
  font-size: 13px;
  padding-top: 5px;
}
.el_p3 {
  font-size: 21px;
  font-family: cursive;
  font-weight: 600;
  padding-top: 15px;
}
.el_p4 {
  /* padding-top: 25px; */
  padding-bottom: 22px;
}
.el-carousel__item .el-carousel__item--card .is-in-stage {
  background-color: rgba(255, 255, 255, 0.5);
}
.h5_BG6 .Cont4_bottm {
  height: 56px;
  background: #c50c02;
  color: #fff;
  margin-top: 11px;
}
.h5_BG6 .Cont4_bottm p {
  font-size: 12px;
  padding-top: 5px;
}
.h5_BG6 .Cont4_bottm h4 {
  font-size: 15px;
  font-weight: 600;
  padding-top: 2px;
}
#banner {
  width: 91%;
  margin: auto;
  height: 45%;
  padding-top: 6%;
}
#banner .swiper-slide {
  width: 200px;
  height: 270px;
  background: #fff;
  color: #000;
  box-shadow: 1px 10px 10px rgb(97, 103, 104);
  position: relative;
}
#banner .swiper-slide .mask {
  position: absolute;
  top: 0;
  width: 200px;
  height: 300px;
  background: rgba(255, 255, 255, 0.7);
}
.swiper-slide .swiper-slide-active .mask{
  display: none;
}
#banner .swiper-slide img {
  padding-top: 37px;
}
.banner_page {
  margin: 20px auto;
  left: 0;
  right: 0;
}
.banner_page span {
  margin: 0 10px;
}
h2 {
  text-align: center;
}
.swiper-pagination-bullet-active {
  width: 16px;
  border-radius: 8px;
}
</style>