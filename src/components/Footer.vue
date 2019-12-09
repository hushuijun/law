<template>
  <div class="footer">
    <div class="footer_top">
      <div class="footer_logo">
        <img src="../assets/logo2.png" alt />
      </div>
      <div class="footer_content">
        <ul>
          <li>
            <div class="footer_center">
              <div class="footer_center_left">
                <img src="../assets/phone.png" alt="">
              </div>
              <div class="footer_center_right">
                <p>
                CALL&nbsp;US 
                </p>
                <h3>
             4001-666-001
                </h3>
              </div>
            </div>
          </li>
           <li>
            <div class="footer_center">
              <div class="footer_center_left">
                <img src="../assets/tel2.png" alt="">
              </div>
              <div class="footer_center_right">
                <p>
                CALL&nbsp;US 
                </p>
                <h3>
             4001-666-001
                </h3>
              </div>
            </div>
          </li>
           <li>
            <div class="footer_center">
              <div class="footer_center_left">
                <img src="../assets/e_mail.png" alt="">
              </div>
              <div class="footer_center_right">
                <p>
                E-MAIL
                </p>
                <h3>
             4001-666-001
                </h3>
              </div>
            </div>
          </li>
           <li>
            <div class="footer_center">
              <div class="footer_center_left">
                <img src="../assets/address.png" alt="">
              </div>
              <div class="footer_center_right">
                <p>
                ADDRESS
                </p>
                <h3>
             北京市朝阳区东四环路37号京师律师大厦
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer_bottom">
      <!-- <p v-if="show">Copyright ©2019 京ICP备20191022号-1 版权所有 京师律师事务所</p>
      <p v-if="show1">Copyright ©2019 京ICP备20191022号-1</p> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true,
      show1:false,
    };
  },
   created() {
    //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w <= 1024) {
      this.show = false;
      this.show1 = true;
    }
  },
};
</script>

<style scoped>
.footer {
  background: #202229;
  height: 380px;
}
.footer ul,li,h3{
  padding: 0;
  margin: 0;
  list-style: none;
}
.footer .footer_logo {
  height: 164px;
  width: 100%;
  text-align: center;
}
.footer .footer_logo img {
  max-width: 100%;
  display: inline-block;
  margin-top: 50px;
}
.footer .footer_content{
  width: 1200px;
  height: 166px;
  margin: auto;
  color: white;
}
.footer .footer_content .footer_center{
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  margin-left: -75px;
  margin-top: -24.5px;
}
.footer .footer_content .footer_center .footer_center_left{
  width: 40px;
  flex-shrink: 0;
  padding-top: 10px;
}
.footer .footer_content .footer_center .footer_center_right{
  flex: 1;
}
.footer .footer_content .footer_center .footer_center_right p{
  font-size: 14px;
  color: #909090;
}
.footer .footer_content .footer_center .footer_center_right h3{
  font-size: 14px;
  font-weight: 500; 
}
.footer .footer_content ul li{
  float: left;
  width: 300px;
  height: 166px;
  border-left: 1px solid #383838;
  border-top: 1px solid #383838;
  box-sizing: border-box;
  position: relative;
}
.footer .footer_content ul li:last-child{
  border-right: 1px solid #383838;
}
.footer .footer_content ul li:last-child .footer_center{
  width: 224px;
  margin-left: -112px;
}
.footer .footer_bottom {
  height: 54px;
  color: #909090;
  background: #151720;
  border-top: 1px solid #383838;
}
.footer .footer_bottom p {
  text-align: center;
  line-height: 54px;
}
@media screen and (max-width: 1024px){
  .footer {
  height:auto;
}
.footer .footer_logo {
  height: 82px;
  width: 100%;
  text-align: center;
  overflow: hidden;
}
.footer .footer_logo img {
  height: 45px;
  display: inline-block;
  margin-top: 20px;
}
.footer .footer_content{
  width: calc(100% - 30px);
  height: auto;
  margin: auto;
}
.footer .footer_content .footer_center{
  position: absolute;
  display: flex;
  top: 50%;
  left: 5%;
  margin-left: 0px;
  margin-top: -24.5px;
}
.footer .footer_content .footer_center .footer_center_left{
  width: 40px;
  flex-shrink: 0;
  padding-top: 10px;
}
.footer .footer_content .footer_center .footer_center_right{
  flex: 1;
}
.footer .footer_content .footer_center .footer_center_right p{
  font-size: 10.4px;
}
.footer .footer_content .footer_center .footer_center_right h3{
  font-size: 12px;
}
.footer .footer_content ul li{
  float: inherit;
  width: 49%;
  height: 60px;
  display: inline-block;
  border: none;
  position: relative;
}
.footer .footer_content ul li:last-child{
  border: none;
}
.footer .footer_content ul li:last-child .footer_center{
  width: 160px;
  margin-left: 0px;
}
.footer .footer_bottom {
  height: 38px;
}
.footer .footer_bottom p {
  text-align: center;
  line-height: 38px;
  font-size: 12px;
}
}
</style>