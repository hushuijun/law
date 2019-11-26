<template>
  <div class="nolitigation">
    <ul class="article">
      <li>
         <router-link tag="a" target="_blank" to="/caseDetails">
        <div class="nolitigation_top">
          <h4>非诉讼标题</h4>
          <p>2019年10月19日</p>
          <div class="clearfix"></div>
        </div>
        <div class="nolitigation_text">
          <p>正文</p>
        </div>
         </router-link>
      </li>
    </ul>
    <div class="paging">
      <span>共88条</span>
      <a>上一页</a>
      <ul>
        <li>
          <a>1</a>
        </li>
        <li>
          <a>2</a>
        </li>
        <li>
          <a>3</a>
        </li>
        <li>
          <a>4</a>
        </li>
        <li>
          <a>5</a>
        </li>
      </ul>
      <a>下一页</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nolitigation",
  data() {
    return {};
  }
};
</script>
<style scoped>
.nolitigation {
  margin-top: 20px;
}
.nolitigation ul,
h4 {
  margin: 0;
  padding: 0;
}
.nolitigation .article li:first-child {
  border-top: 1px solid #efefef;
}
.nolitigation .article li {
  list-style: none;
  border-bottom: 1px solid #efefef;
  padding: 20px 5%;
}
.nolitigation .article li a{
  color: black;
  text-decoration: none;
}
.nolitigation .article li .nolitigation_top h4 {
  float: left;
}
.nolitigation .article li .nolitigation_top p {
  float: right;
  font-size: 14px;
  color: slategray;
}
.clearfix {
  clear: both;
}
.nolitigation .nolitigation_text {
  margin-top: 10px;
  font-size: 14px;
  color: slategray;
}
.nolitigation .paging {
  text-align: center;
  padding: 20px;
}
.nolitigation span {
  margin-right: 20px;
}
.nolitigation .paging ul {
  display: inline-block;
}
.nolitigation .paging ul li {
  display: inline-block;
  padding: 0 5px;
}
.nolitigation .paging ul li a {
  display: inline-block;
  padding: 5px 10px;
}
.nolitigation .paging ul li a:hover{
    background: #7C7C7C;
    color: white;
}
</style>