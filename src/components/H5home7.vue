<template>
    <div class="h5_BG7">
        <div class="H5_top">
            <h3>奖项荣誉</h3>
            <p>JINGSHI HONORS</p>
            <span class="line"></span>
        </div>
        
        <div class="swiper-container Home7_swiper" id="Home7_swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" >
                    <img src="../assets/zu_3.png"/>
                    <p>荣获新三板英雄榜</p>
                    <p>最值得推荐律师事务所</p>
                </div>
                <div class="swiper-slide" >
                    <img src="../assets/right-top1.png"/>
                    <p>荣获2015年年度</p>
                    <p>最受媒体欢迎律所</p>
                </div>
                <div class="swiper-slide" >
                    <img src="../assets/left-bottom1.png"/>
                    <p>2015年度十大维</p>
                    <p>权打假现金法律服务机构</p>
                </div>
                <div class="swiper-slide" >
                    <img src="../assets/right-bottom1.png"/>
                    <p>下一代教育基金会</p>
                    <p>颁发的下一代教育爱心奉献奖</p>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <p class="h5_BG7_p"><router-link to="/honorDetails">查看更多</router-link></p>
        <div class="Home_bannerBT">
            <span><img src="../assets/h5_down.png"></span>
        </div>
    </div>
</template>
    
    
<script>
import Swiper from 'swiper/dist/js/swiper.min.js';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'H5home6',
    data(){
        return{}
    },
    mounted(){
        let that = this
        new Swiper('#Home7_swiper', {
            speed:1000,
            loop : true,
            autoplay:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
}
</script>


<style scoped>
   @import'../assets/css/base.css';
   @import'../assets/css/home.css';
   @import 'swiper/dist/css/swiper.min.css';
    .h5_BG7 h3{
        color:#fff;
    }
    .h5_BG7_p{
        text-align: center;
        margin:auto
    }
    .h5_BG7 a{
        color: #fff;
        border: 1px solid #fff;
        display: inline-block;
        padding: 10px 30px;
        margin-top: 5%;
    }
    .h5_BG7 .swiper-slide{
        text-align: center;
    }
    .Home7_swiper{
        width: calc(100% - 50px);
        height:330px;
        margin-top: 6%;
    }
    .Home7_swiper img{
        width: 45%;
        margin-bottom:15px;
    }
    .Home7_swiper p{
        width: 50%;
        text-align: center;
        margin: auto;
        line-height: 30px;
    }
</style>