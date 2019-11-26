<template>
  <div class="whole">
    <ul>
      <li>
        <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
        <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
        <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
        <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
            <p>北京总部</p>
          </div>
        </div>
      </li>
      <li>
       <div class="whole_item">
          <img src="../../assets/leader.png" alt />
          <div>
            <h3>林才红</h3>
            <p>leader</p>
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
  name: "Whole",
  data() {
    return {};
  }
};
</script>
<style>
.whole .more{
   text-align: center;
   margin: 20px auto;
}
.whole .more button{
    border-radius: 0;
    border:1px solid slategray;
    padding: 12px 60px;
}
</style>
<style scoped>
.whole ul,
li,h3 {
  margin: 0;
  padding: 0;
  list-style: none;
}
.whole ul li {
  display: inline-block;
  width: 32.9%;
  /* margin-left: 12px; */
  overflow: hidden;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
.whole ul li:first-child {
  margin-left: 0;
}
.whole ul li img {
  display: block;
  max-width: 100%;
}
.whole ul .whole_item{
    box-shadow: 0px 5px 10px 0px #efefef;
}
.whole ul .whole_item div{
    padding: 15px 0;
}
.whole ul .whole_item div p{
   margin-top: 5px;
}
</style>