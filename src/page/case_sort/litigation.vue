<template>
  <div class="litigation">
    <ul class="article">
      <li>
        <div class="litigation_top">
          <h4>诉讼标题</h4>
          <p>2019年10月19日</p>
          <div class="clearfix"></div>
        </div>
        <div class="litigation_text">
          <p>正文</p>
        </div>
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
  name: "Litigation",
  data() {
    return {};
  }
};
</script>
<style scoped>
.litigation {
  margin-top: 20px;
}
.litigation ul,
h4 {
  margin: 0;
  padding: 0;
}
.litigation .article li:first-child {
  border-top: 1px solid #efefef;
}
.litigation .article li {
  list-style: none;
  border-bottom: 1px solid #efefef;
  padding: 20px 5%;
}
.litigation .article li .litigation_top h4 {
  float: left;
}
.litigation .article li .litigation_top p {
  float: right;
  font-size: 14px;
  color: slategray;
}
.clearfix {
  clear: both;
}
.litigation .litigation_text {
  margin-top: 10px;
  font-size: 14px;
  color: slategray;
}
.litigation .paging {
  text-align: center;
  padding: 20px;
}
.litigation span {
  margin-right: 20px;
}
.litigation .paging ul {
  display: inline-block;
}
.litigation .paging ul li {
  display: inline-block;
  padding: 0 5px;
}
.litigation .paging ul li a {
  display: inline-block;
  padding: 5px 10px;
}
.litigation .paging ul li a:hover{
    background: #7C7C7C;
    color: white;
}
</style>