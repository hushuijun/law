<template>
  <div class="partnerLawyer">
    <ul>
      <li>
        <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
        <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
        <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
        <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="partnerLawyer_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>合伙人律师</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="more">
        <el-button plain>查看更多<i class="el-icon-arrow-down"></i></el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "partnerLawyer",
  data() {
    return {};
  }
};
</script>
<style>
.partnerLawyer .more{
   text-align: center;
   margin: 20px auto;
}
.partnerLawyer .more button{
    border-radius: 0;
    border:1px solid slategray;
    padding: 12px 60px;
}
</style>
<style scoped>
.partnerLawyer ul,
li,h3 {
  margin: 0;
  padding: 0;
  list-style: none;
}
.partnerLawyer ul li {
  display: inline-block;
  width: 32.9%;
  /* margin-left: 12px; */
  overflow: hidden;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
.partnerLawyer ul li:first-child {
  margin-left: 0;
}
.partnerLawyer ul li img {
  display: block;
  max-width: 100%;
}
.partnerLawyer ul .partnerLawyer_item{
    box-shadow: 0px 5px 10px 0px #efefef;
}
.partnerLawyer ul .partnerLawyer_item div{
    padding: 15px 0;
}
.partnerLawyer ul .partnerLawyer_item div p{
   margin-top: 5px;
}
</style>