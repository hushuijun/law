<template>
    <div class="jingshi_party">
        <ul class="article">
            <li>
                <div class="jingshi_party_content">
                    <div class="news_time">
                      <span>
                       2019
                      </span>
                      <p>
                        10/9
                      </p>
                    </div>
                    <div class="news_text">
                        <h4>
                           京师党建
                        </h4>
                        <p>
                            正文
                        </p>
                    </div>
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
    naem:'Jingshi_party',
}
</script>
<style scoped>
.jingshi_party{
    margin-top: 20px;
}
.jingshi_party ul,li,h4{
  margin: 0;
  padding: 0;
  list-style: none;
}
.jingshi_party .jingshi_party_content{
    width: 70%;
    margin: auto;
}
.jingshi_party .article li:first-child {
  border-top: 1px solid #efefef;
}
.jingshi_party .article li {
  list-style: none;
  border-bottom: 1px solid #efefef;
  padding: 20px 0;
}
.jingshi_party .article li:hover{
    background: rgba(0, 0, 0, 0.1);
}
.jingshi_party .jingshi_party_content{
    display: flex;
}
.jingshi_party .jingshi_party_content .news_time{
    flex-shrink: 0;
    background: #DDDDDD;
    text-align: center;
    padding: 20px;
}
.jingshi_party .jingshi_party_content .news_time span{
   font-size: 14px;
}
.jingshi_party .jingshi_party_content .news_time p{
   font-size: 20px;
}
.jingshi_party .jingshi_party_content .news_text{
    padding-left: 40px;
    flex: 1;
}
.jingshi_party .jingshi_party_content .news_text h4{
    padding-top: 5px;
}
.jingshi_party .jingshi_party_content .news_text p{
    color: slategray;
    padding-top: 10px;
}
.jingshi_party .paging {
  text-align: center;
  padding: 20px;
}
.jingshi_party .paging span {
  margin-right: 20px;
}
.jingshi_party .paging ul {
  display: inline-block;
}
.jingshi_party .paging ul li {
  display: inline-block;
  padding: 0 5px;
}
.jingshi_party .paging ul li a {
  display: inline-block;
  padding: 5px 10px;
}
.jingshi_party .paging ul li a:hover{
    background: #7C7C7C;
    color: white;
}
</style>