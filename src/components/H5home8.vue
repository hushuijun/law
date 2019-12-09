<template>
    <div class="h5_BG8">
        <div class="H5_top">
            <h3>联系我们</h3>
            <p>CONTACT US</p>
            <span class="line"></span>
        </div>
        <div class="h5_BG8_p">
            <img src="../assets/tel.png"/><p><span class="h5_BG8_span">电话：</span>4001-666-001</p>
        </div>
        <div class="h5_BG8_p">
            <img src="../assets/tel2.png"/><p><span class="h5_BG8_span">传真：</span>010-50959998</p>
        </div>
        <div class="h5_BG8_p">
            <img src="../assets/email.png"/><p><span class="h5_BG8_span">邮箱：</span>lincaihong@jingsh.com</p>
        </div>
        <div class="h5_BG8_p_P1">
            <img src="../assets/dress.png"/><p><span class="h5_BG8_span">地址地址：北京市朝阳区东四环路37号京师律师大厦</span></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'H5home2',
    data(){
        return{}
    }
}
</script>
<style scoped>
    @import'../assets/css/base.css';
    @import'../assets/css/home.css';
    .h5_BG8_span{
        color:#646464;
    }
    .h5_BG8_p p,.h5_BG8_p_P1 p{
        color:#000;
        display: inline-block;
    }
    .h5_BG8_p{
        border:1px solid #e5e5e5;
        width: 80%;
        height: 75px;
        line-height: 75px;
        margin: auto;
        text-align: left;
        margin-top: 5%;
    }
    .h5_BG8_p_P1{
        border:1px solid #e5e5e5;
        width: 80%;
        height: 75px;
        margin: auto;
        text-align: left;
        margin-top: 5%;
        line-height: 25px;
    }
    .h5_BG8_p img,.h5_BG8_p_P1 img{
        width: 25px;
        margin-right: 10px;
        vertical-align: middle;
        margin-left: 15px;
    }
    .h5_BG8_p_P1 img{
        vertical-align: baseline;
    }
    .h5_BG8_p_P1 p{
        width:200px;
        padding-top:13px;
    }
</style>