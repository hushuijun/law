<template>
  <div class="h5_BG6">
    <div class="H5_top">
      <h3>经典案例</h3>
      <p>CLASSIC CASE</p>
      <span class="line"></span>
    </div>
    <!-- <el-carousel :autoplay= "false" :interval="4000" type="card" height="300px" ref="carousel">
            <el-carousel-item v-for="(item,index) of BG6List" :key="index" name="item.id" >
                <div @click="setActiveItem(index,item.id)">
                    <img src="../assets/guohui.png">
                    <p class="el_p1">中华人民共和国</p>
                    <p class="el_p2">{{item.num}}</p>
                    <p class="el_p3">民事判决书</p>
                    <p class="el_p4">{{item.txt}}</p>
                    <div class="Cont4_bottm">
                        <p>{{item.text1}}</p>
                        <h4>{{item.text2}}</h4>
                    </div>
                </div>
            </el-carousel-item>
    </el-carousel>-->
    <div class="swiper-container" id="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of BG6List">
          <img src="../assets/guohui.png" />
          <p class="el_p1">中华人民共和国</p>
          <p class="el_p2">{{item.num}}</p>
          <p class="el_p3">民事判决书</p>
          <p class="el_p4">{{item.txt}}</p>
          <div class="Cont4_bottm">
            <p>{{item.text1}}</p>
            <h4>{{item.text2}}</h4>
          </div>
          <div class="mask"></div>
        </div>
      </div>
    </div>
    <p class="h5_BG6_p">
      <a>更多案例</a>
    </p>
    <div class="Home_bannerBT">
      <span>
        <img src="../assets/h5_down.png" />
      </span>
    </div>
  </div>
</template>
    
    
<script>
// import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
export default {
  name: "H5home6",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      BG6List: [
        {
          id: 7,
          num: "1北京市朝阳区人民法院",
          txt: "标的额：30万",
          text1: "1李某与某企业货款纠纷案",
          text2: "货款纠纷"
        },
        {
          id: 8,
          num: "2北京市朝阳区人民法院",
          txt: "标的额：300万",
          text1: "2李某与某企业货款纠纷案",
          text2: "货款纠纷"
        },
        {
          id: 9,
          num: "3北京市朝阳区人民法院",
          txt: "标的额：300万",
          text1: "3李某与某企业货款纠纷案",
          text2: "货款纠纷"
        },
        {
          id: 10,
          num: "4北京市朝阳区人民法院",
          txt: "标的额：300万",
          text1: "4李某与某企业货款纠纷案",
          text2: "货款纠纷"
        },
        {
          id: 11,
          num: "5北京市朝阳区人民法院",
          txt: "标的额：300万",
          text1: "5李某与某企业货款纠纷案",
          text2: "货款纠纷"
        },
        {
          id: 12,
          num: "6北京市朝阳区人民法院",
          txt: "标的额：030万",
          text1: "6李某与某企业货款纠纷案",
          text2: "货款纠纷"
        },
        {
          id: 13,
          num: "7北京市朝阳区人民法院",
          txt: "标的额：300万",
          text1: "7李某与某企业货款纠纷案",
          text2: "货款纠纷"
        }
      ]
    };
  },
  mounted() {
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
            var translate = slideProgress * modify * 223 + "px",
              scale = 1 - Math.abs(slideProgress) / 5,
              zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform(
              "translateX(" + translate + ") scale(" + scale + ")"
            );
            slide.css("zIndex", zIndex);
            slide.css("opacity", 1);
            if (Math.abs(slideProgress) > 3) {
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
    // setActiveItem:function(index,id){
    //     console.log(index,id)
    //     if(index == 0){
    //         this.$ref.carousel.setActiveItem(1)
    //     }else if(index == 1){
    //         this.carouselShow = 2
    //     }
    // }
  }
};
</script>


<style scoped>
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
  margin-top: 60px;
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
  margin-top: 7px;
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
  padding-top: 59px;
}
#banner .swiper-slide {
  width: 200px;
  height: 300px;
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