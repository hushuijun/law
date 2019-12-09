<template>
    <div class="h5_BG4">
        <div class="H5_top">
            <h3>核心服务</h3>
            <span class="line"></span>
        </div>
        <div class="h5_BG4_bottom">
            <div class="BG4_BG" style="margin-left: 25%;">
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/office.png"/>
                        <p>公司法律</p>
                    </div>
                </div>
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/money.png"/>
                        <p>金融资本</p>
                    </div>
                </div>
            </div>
            <div class="BG4_BG" style="margin-top: -116px;margin-left: 28px;">
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/zhongcai.png"/>
                        <p>诉讼仲裁</p>
                    </div>
                </div>
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/zhishi.png"/>
                        <p>知识产权</p>
                    </div>
                </div>
            </div>
            <div class="BG4_BG" style="margin-top: -116px;margin-left:95px;">
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/guoji.png"/>
                        <p>国际法律</p>
                    </div>
                </div>
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/more.png"/>
                        <p>更多服务</p>
                    </div>
                </div>
            </div>
            <div class="BG4_BG" style="margin-top: -116px;margin-left:28px;">
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/fangchan.png"/>
                        <p>房产建筑</p>
                    </div>
                </div>
                <div class="BG4_div1">
                    <div class="BG4_BG_cont">
                        <img src="../assets/tese.png"/>
                        <p>特色法律</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="Home_bannerBT">
            <span><img src="../assets/H5_down2.png"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'H5home4',
    data(){
        return{}
    }
}
</script>
<style scoped>
@import'../assets/css/base.css';
@import'../assets/css/home.css';
.BG4_BG{
    overflow: hidden;
    height: 150px;
    padding-top: 30px;
}
.BG4_BG .BG4_div1{
   float: left;
    width:130px;
    height:140px;
    background: url('../assets/juxing.png') no-repeat center;
    background-size: cover;
    margin-left: 1%;
}
.BG4_div1 .BG4_BG_cont img{
    width: 36px;
    margin-top: 30px;
}
.BG4_BG div .BG4_BG_cont{
    width: 130px;
    height: 140px;
}
.BG4_BG div .BG4_BG_cont p{
    color:#000;
}
.h5_BG4_bottom{
    height: 180px;
    margin-top: 10px;
}
</style>