<template>
    <div class="h5_BG5">
        <div class="H5_top">
            <h3>团队介绍</h3>
            <p>TEAM INTEODUCION</p>
            <span class="line"></span>
        </div>
        <p class="h5_BG5_p">秉承团队合作精神</p>
        <p class="h5_BG5_p">充分发挥人才优势</p>
        <p class="h5_BG5_a">
            <a target="_blank" href="http://p.qiao.baidu.com/cps/chat?siteId=10455521&userId=1886665">咨询律师></a>
            <router-link to="/team">了解更多></router-link>
        </p>
        <div class="Home_bannerBT">
            <span><img src="../assets/h5_down.png"></span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'H5home5',
    data(){
        return{}
    }
}
</script>


<style scoped>
    @import'../assets/css/base.css';
    @import'../assets/css/home.css';
    .h5_BG5 .h5_BG5_a a{
     margin: 30px;
     color: #fff;
    }
</style>