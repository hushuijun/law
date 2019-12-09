<template>
    <div class="h5_BG3">
        <div class="H5_top">
            <h3>京师历程</h3>
            <p>JINGSH HISTORY</p>
            <span class="line"></span>
        </div>
        <div class="swiper-container Home3_swiper" id="Home3_swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) of mediumlist" :key="index">
                  {{item.year}}
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="swiperBox">
            <img src="../assets/duobian.png">
            <p>{{Home3text}}</p>
        </div>
        <div class="Home_bannerBT">
            <span><img src="../assets/h5_down.png"></span>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.min.js';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'H5home3',
    data(){
        return{
            mediumlist:[{id:0,year:'1994',text:'0北京京师律师事务所于1994年正式成立'},
                        {id:1,year:'2014',text:'1北京京师律师事务所于2014年迁址于东四环京师律师大厦（原工美大厦）'},
                        {id:2,year:'2015',text:'2京师律师事务所第一家海外分所在澳大利亚悉尼正式成立'},
                        {id:3,year:'2017',text:'3京师海外第75家联盟所于斯里兰卡正式建立'},
                        {id:4,year:'2018',text:'4京师海外第105家联盟所于斯威士兰正式建立'},
                        {id:5,year:'2019',text:'5京师律师事务所德国分所正式成立'}
            ],
            Home3text:''
        }
    },
    mounted(){
        console.log(this.mediumlist);
        let that = this
        new Swiper('#Home3_swiper', {
            // speed:3000,
            loop : true,
            slidesPerView: 3,
            centeredSlides: true,
            // autoplay:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on:{
               slideChangeTransitionStart: function(swiper){
                for(var i = 0 ; i<that.mediumlist.length; i++){
                    if(this.realIndex == that.mediumlist[i].id){
                        that.Home3text = that.mediumlist[i].text
                    }
                }
                
            }
            }
           
        })
    }
}
</script>
<style scoped>
    @import'../assets/css/base.css';
    @import'../assets/css/home.css';
    @import 'swiper/dist/css/swiper.min.css';
.Home3_swiper{
  height:29px;
  line-height: 29px;
  margin-top: 60px;
}
.swiperBox{
  width: 80%;
  height:162px;
  margin:auto;
  background: rgba(0, 0, 0, 0.5);
  color:#ccc;
  position: relative;
}
.swiperBox>p{
    padding: 48px;
    line-height: 23px;
    margin-top:54px;
}
.swiperBox img{
    position: absolute;
    top: -43px;
    left: 50%;
    margin-left: -11px;
}
.swiper-slide .swiper-slide-active{
    font-size: 25px;
}
</style>