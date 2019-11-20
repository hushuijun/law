<template>
    <div class="h5_BG3">
        <div class="H5_top">
            <h3>京师历程</h3>
            <p>JINGSH HISTORY</p>
            <span class="line"></span>
        </div>
        <!-- <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item ,index) of mediumlist" :key="index">
            <h3 class="medium">{{item.year}}</h3>
            <div>
                {{item.text}}
            </div>
          </el-carousel-item>
        </el-carousel> -->
        <div class="swiper-container" id="Home3_wiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                11111
                </div>
                <div class="swiper-slide">
                2222
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'H5home3',
    data(){
        return{
            mediumlist:[{year:'1994',text:'北京京师律师事务所于1994年正式成立'},
                        {year:'2014',text:'北京京师律师事务所于2014年迁址于东四环京师律师大厦（原工美大厦）'},
                        {year:'2015',text:'京师律师事务所第一家海外分所在澳大利亚悉尼正式成立'},
                        {year:'2017',text:'京师海外第75家联盟所于斯里兰卡正式建立'},
                        {year:'2018',text:'京师海外第105家联盟所于斯威士兰正式建立'},
                        {year:'2019',text:'京师律师事务所德国分所正式成立'}
            ]
        }
    },
    mounted(){
        new Swiper('#Home3_wiper', {
            speed:30000,
            loop : true,
            autoplay:true
        })
    }
}
</script>
<style scoped>
    @import'../assets/css/home.css';
    @import 'swiper/dist/css/swiper.min.css';
</style>