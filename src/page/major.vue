<template>
  <div class="major">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>专业领域</h1>
        <p>咨询热线：4001-666-001</p>
      </div>
    </div>
    <div class="major_content">
      <div class="top"></div>
      <div class="block">
        <div class="major_left">
          <ul>
            <li class="major_left_item">
              <div class="major_title_item">
                <h4>公司法律</h4>
                <div>
                  <img src="" alt="">
                </div>
              </div>
              <div class="major_item">
                <ul>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                </ul>
              </div>
            </li>
            <li class="major_left_item">
              <div class="major_title_item">
                <h4>公司法律</h4>
                <div>
                  <img src="" alt="">
                </div>
              </div>
              <div class="major_item">
                <ul>
                   <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="major_line"></div>
        </div>

        <div id="major_right">
          <ul>
            <li class="major_right_item">
              <div class="major_title_item">
                <h4>公司法律</h4>
                <div>
                  <img src="" alt="">
                </div>
              </div>
              <div class="major_item">
                <ul>
                   <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                </ul>
              </div>
            </li>
            <li class="major_right_item">
             <div class="major_title_item">
                <h4>公司法律</h4>
                <div>
                  <img src="" alt="">
                </div>
              </div>
              <div class="major_item">
                <ul>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                  <li>
                    <span></span>商业仲裁
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.major {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.major .hearder_bg {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url("../assets/major_bg.jpg") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.major .hearder_bg img {
  max-width: 100%;
}
.major .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 40%;
  left: 50%;
  margin-left: -95px;
}
.major .major_content {
  width: 70%;
  margin: auto;
  margin-top: -80px;
  padding-bottom: 120px;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
.major .major_center {
  margin-left: 45.5%;
}
.major .top {
  border-bottom: 1px solid #b8131b;
  width: 90%;
  height: 50px;
  margin: 20px auto;
}
.major .top:before {
  content: "";
  width: 0px;
  height: 0px;
  border-top: 10px solid #b8131b;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -10px;
}
.major .block {
  width: 90%;
  margin: auto;
}
.major .block h4 {
  background: #ececec;
  padding: 12px;
}
ul,
h4 {
  padding: 0;
  margin: 0;
}
.major_left {
  display: inline-block;
  position: relative;
  width: 45%;
  margin: 0;
  padding: 0;
}
#major_right {
  float: right;
  width: 45%;
  margin: 0;
  padding: 0;
  padding-top: 100px;
}
.major .major_left .major_left_item {
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  margin-top: 20px;
}
.major #major_right .major_right_item {
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  margin-top: 20px;
}

.major .major_line {
  position: absolute;
  height: 95%;
  top: 23px;
  right: -47px;
  border: 2px solid #e1e1e1;
}
.major .major_item li {
  display: inline-block;
  width: 44%;
  padding: 10px;
}
.major .major_item li span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background: black;
}
.major .major_title_item{
  position: relative;
}
.major .major_title_item div{
  position: absolute;
  top: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #b8131b;
  z-index: 1;
}
.major .major_left_item .major_title_item div{
  right: -17.5%;
}
.major .major_right_item .major_title_item div{
  left: -17.5%;
}
</style>