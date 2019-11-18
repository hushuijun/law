<template>
  <div class="major">
    <div class="hearder_bg">
        <div class="header_title">
            <h1>
                专业领域
            </h1>
            <p>
                咨询热线：4001-666-001
            </p>
        </div>
    </div>
    <div class="major_content"></div>
  </div>
</template>
<script>
export default {
    methods:{
       dataScroll: function () {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
    },
    }
    }
</script>
<style scoped>
.major {
    min-height: 1500px;
  background: #F9F9F9;
}
.hearder_bg {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url('../assets/major_bg.png') no-repeat;
  background-size: cover;
  background: rgba(0, 0, 0, 0.7);
}
.hearder_bg img {
  max-width: 100%;
}
.header_title{
   position: absolute;
   text-align: center;
   color: white;
   top: 40%;
   left: 50%;
   margin-left: -95px;
}
.major_content {
  width: 70%;
  min-height: 1000px;
  margin:auto;
  margin-top: -80px;
  margin-bottom: 80px;
  background: white;
  position: relative;
  z-index: 1;
}
</style>