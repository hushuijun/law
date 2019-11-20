<template>
  <div class="case">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>CLASSIC&nbsp;CASE</h1>
        <p>经典案例</p>
      </div>
    </div>
    <div class="case_content">
     <div class="top"></div>
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
.case {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.case .hearder_bg {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url("../assets/case_bg.jpg") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.case .hearder_bg img {
  max-width: 100%;
}
.case .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 40%;
  left: 50%;
  margin-left: -95px;
}
.case .case_content {
  width: 70%;
  margin: auto;
  margin-top: -80px;
  padding-bottom: 120px;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
.case .case_center {
  margin-left: 45.5%;
}
.case .top {
  border-bottom: 2px solid #b8131b;
  width: 90%;
  height: 50px;
  margin: 20px auto;
}
</style>