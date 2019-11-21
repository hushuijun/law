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
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <p class="h5_BG7_p"><a>查看更多</a></p>
        <div class="Home_bannerBT">
            <span><img src="../assets/h5_down.png"></span>
        </div>
    </div>
</template>
    
    
<script>
import Swiper from 'swiper';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'H5home6',
    data(){
        return{}
    },
    mounted(){
        let that = this
        new Swiper('#Home7_swiper', {
            speed:800,
            loop : true,
            // autoplay:true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // ,
            // onSlideChangeStart: function(swiper){
            //     for(var i = 0 ; i<that.mediumlist.length; i++){
            //         if(swiper.activeIndex == that.mediumlist[i].id){
            //             that.Home3text = that.mediumlist[i].text
            //         }
            //     }
                
            // }
        })
    }
}
</script>


<style scoped>
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
        margin-top: 60px;
    }
    .h5_BG7 .swiper-slide{
        text-align: center;
    }
    .Home7_swiper{
        width: calc(100% - 50px);
        height:330px;
        margin-top: 55px;
    }
    .Home7_swiper img{
        width: 50%;
        margin-bottom:15px;
    }
    .Home7_swiper p{
        width: 50%;
        text-align: center;
        margin: auto;
        line-height: 30px;
    }
    .h5_BG7 .Home_bannerBT{
        margin-top: 75px!important;
    }
</style>