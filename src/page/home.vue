<template>
    <el-container class="Home">
        <img class="mainbox" src="../assets/mainbox.png"/>
        <div class="Home_Content">
            <div class="Home_banner">
                <h3>京师律师事务所</h3>
                <p><span>·</span>规模化<span>·</span>专业化<span>·</span>品牌化<span>·</span>国际化<span>·</span>电商化</p>
                <div class="Home_bannerA">
                  <a>在线咨询</a>
                  <a>了解详情</a>
                </div>
                <div class="Home_bannerBT">
                    <div>|</div>
                    <span><img src="../assets/down.png"></span>
                </div>
              </div>
              <div class="Home-Cont1">
                  <div class="Home_Top">
                    <img src="../assets/icon-01.png"/>
                    <h4>ABOUT INGSHI</h4>
                    <p>关于律师</p>
                  </div>
                  <div class="Cont1_bot">
                    <p>北京市京师律师事务所，肇造于1994年，总部设于北京市国贸CBD商圈，是一家传统与新型管理模式相结合的合伙制律师事务所。
                        京师自成立以来，一直朝着规模化、专业化、品牌化、国际化、
                        电商化方向不断改革，并以一流的律师团队、专业的行政服务、
                        坚韧的党建精神为依托，竭力打造一个更具影响力与号召力的律师生态圈。
                    </p>
                    <a>了解详情</a>
                  </div>
              </div>
              <div class="Home-Cont2">
                  <div class="Home_Top">
                    <img src="../assets/icon-02.png"/>
                    <h4>CORE BUSINESS</h4>
                    <p>核心业务</p>
                  </div>
                  <div class="Cont2_bot">
                    <el-row>
                      <el-col :span="14">
                        <div class="grid-content bg-purple">
                          <div class="Cont2_bot_left">
                            <img class="img" src="../assets/pic_01.png">
                            <div class="bot_left_bottom">
                              <p>咨询法律<img src="../assets/icon-5.png"/></p>
                              <p>咨询律师<img src="../assets/icon-5.png"/></p>
                              <p>咨询案件<img src="../assets/icon-5.png"/></p>
                              <p>联系我们<img src="../assets/icon-5.png"/></p>
                            </div>
                          </div>
                          <div class="Cont2_bot_right">
                            <div class="bot_right_div1">
                              <h4>— 1994，成立</h4>
                              <p>北京京师律师事务所于1994年正式成立；</p>
                            </div>
                            <div class="bot_right_div1">
                              <h4>— 2014年</h4>
                              <p>北京京师律师事务所于2014年迁址于东四环京师律师大厦（原工美大厦）；</p>
                            </div>
                            <div class="bot_right_div1">
                              <h4>— 2015年</h4>
                              <p>京师律师事务所第一家海外分所在澳大利亚悉尼正式成立；</p>
                            </div>
                            <div class="bot_right_div1">
                              <h4>— 2017年</h4>
                              <p>2017年8月，京师海外第75家联盟所于斯里兰卡正式建立；</p>
                            </div>
                            <div class="bot_right_div1">
                              <h4>— 2018年</h4>
                              <p>2018年1月，京师海外第105家联盟所于斯威士兰正式建立；</p>
                            </div>
                            <div class="bot_right_div1">
                              <h4>— 2019年</h4>
                              <p>2019年9月，京师律师事务所德国分所正式成立；</p>
                            </div>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div class="grid-content bg-purple-light">
                          <div class="bot_right_div2">
                            <img src="../assets/pic_02.png"/> 
                            <div class="right_div2_lefc">
                              <ul>
                                <li class="li1" style="height:60px;line-height:60px;">
                                  <img src="../assets/sifa.png">
                                </li>
                                <li>
                                    诉讼仲裁<img src="../assets/sanjiao.png"/>
                                </li>
                                <li>
                                    公司法律<img src="../assets/sanjiao.png"/>
                                </li>
                                <li>
                                    金融资本<img src="../assets/sanjiao.png"/>
                                </li>
                                <li>
                                    知识产权<img src="../assets/sanjiao.png"/>
                                </li>
                                <li>
                                    房产建筑<img src="../assets/sanjiao.png"/>
                                </li>
                                <li>
                                    国际法律<img src="../assets/sanjiao.png"/>
                                </li>
                                <li>
                                    查看更多<img src="../assets/sanjiao.png"/>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="bot_right_div2Bottm">
                            <el-collapse v-model="activeNames" accordion>
                                <el-collapse-item title="诉讼仲裁" name="1" style="padding:0 20px;background:#fff;">
                                  <div >京师律师具有在中国各级法院代理诉讼案件的资格；</div>
                                </el-collapse-item>
                                <el-collapse-item title="公司法律" name="2" style="padding:0 20px;background:#fff;">
                                  <div>京师熟悉企业管理经营的律师立足于企业经营的角度，实现客户利益最大化。</div>
                                </el-collapse-item>
                                <el-collapse-item title="金融资本" name="3" style="padding:0 20px;background:#fff;">
                                  <div>对于中国企业境内外上市过程中遇到的纷繁复杂的问题，京师积累了独到的经验和解决方案。</div>
                                </el-collapse-item>
                                <el-collapse-item title="知识产权" name="4" style="padding:0 20px;background:#fff;">
                                  <div>师知识产权诉讼律师和代理人向客户提供侵权行政查处和侵权诉讼等服务。</div>
                                </el-collapse-item>
                                <el-collapse-item title="国际法律" name="5" style="padding:0 20px;background:#fff;">
                                    <div>京师房地产与建筑工程法律事务律师团队由具有扎实的理论功底以及丰富的实践经验的资深律师组建而成</div>
                                </el-collapse-item>
                              </el-collapse>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
              </div>
              <div class="Home-Cont3">
                <div class="Home_Top">
                  <img src="../assets/icon-03.png"/>
                  <h4>TEAM INTRODUCTION</h4>
                  <p>团队介绍</p>
                </div>
                <div class="Home-Cont3-IMG">
                  <img  src="" alt="团队图片">
                  <div class="Home-Cont3-word">
                      <p>秉承团队合作精神，充分发挥人才优势</p>
                      <p>
                        <a>咨询律师 ></a>
                        <a>了解更多 ></a>
                      </p>
                  </div>
                </div>
            </div>
            <div class="Home-Cont4">
                <div class="Home_Top">
                  <img src="../assets/icon-04.png"/>
                  <h4>CLASSIC CASElassic Case</h4>
                  <p>经典案例</p>
                </div>
                <el-row>
                  <el-col :span="6">
                    <div class="Cont4_top">

                    </div>
                    <div class="Cont4_bottm">

                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple-light">

                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple">

                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                    </div>
                  </el-col>
                </el-row>
            </div>
        </div>
    </el-container>
</template>
<script>

export default {
  name: 'Home',
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
      handleChange(val) {}
    }
}
</script>

<style scoped>
ul,ol,li{
  list-style-type:none;
  margin: 0;padding: 0;
}
h4,p{margin: 0;}
.Home{
  width:100%
}
.mainbox{
  display: block;
  width:100%;
  position:fixed;top:0;bottom:0;right:0;left:0;z-index:-1;
}
.Home_Content{
  width:100%;
}
.Home_banner{
  width:100%;
  height:995px;
  text-align: center;
  color: #fff;
}
.Home_banner h3{
  margin: 0;
  margin-top:340px;
  font-size: 70px;
}
.Home_banner p{
  margin-top: 30px;
  font-size: 26px;
}
.Home_bannerA a{
  display: inline-block;
  width:198px;
  height:43px;
  text-align: center;
  line-height: 45px;
  border: 1px solid #fff;
  font-size: 16px;
  margin: 30px;
  cursor: pointer;
}
.Home_bannerA a:hover{
  background: #fff;
  color:#181818;
}
.Home_bannerBT{
  width: 21px;
  text-align: center;
  margin: auto;
  margin-top:290px;
}
.Home_bannerBT div{
  width:19px;
  height:35px;
  line-height: 35px;
  text-align: 19px;
  border-radius: 50px;
  border: 1px solid #fff;
  margin: auto;
}
.Home_bannerBT span{
  width: 21px;
  text-align: center;
  display: inline-block;
  margin: auto;
  -webkit-animation: gogogo1 2.5s infinite linear;
  animation: gogogo1 2.5s infinite linear;
  -moz-animation: gogogo1 2.5s infinite linear;
  margin-top: 18px;
}
.Home_bannerBT span img{
  width: 70%;
  margin-right: 1px;
}
@keyframes gogogo1 { 
  0% {             
      transform: translate(0px, 0px);            
  }            
  50% {                
      transform: translate(0px, -10px);            
  }            
  100% {                
      transform: translate(0px, 0px);
  }
}
.Home-Cont1{
  width:100%;
  background: #fff;
  height: 640px;
}

.Home_Top h4{
  margin: 0;
  font-size: 74px;
  color:#ececec;
  letter-spacing: 6px;
}
.Home_Top p{
  margin: 0;
  font-size: 35px;
  color: #000;
  margin-top: -59px;
  letter-spacing: 3px;
}
.Home_Top{
  padding-top:115px;
  padding-bottom: 50px;
}
.Cont1_bot p{
  text-indent: 2em;
  width:950px;
  margin: auto;
  text-align: center;
  line-height: 36px;
}
.Cont1_bot a{
    display: block;
    width: 196px;
    height:41px;
    text-align: center;
    line-height: 41px;
    border:2px solid #7f7f7f;
    color:#000;
    margin: auto;
    margin-top: 70px;
    font-size: 16px;
    cursor: pointer;
}
.Cont1_bot a:hover{
  background: #7f7f7f;
  color: #fff;
}
.Home-Cont2{
  background: #eee;
  padding-bottom: 115px;
}
.Home-Cont2 .Home_Top h4{
  color:#dbdada
}
.Cont2_bot{
  width:1200px;
  margin:auto;
}
.bg-purple .Cont2_bot_left{
  width:240px;
  height: 634px;
  position: relative;
  float: left;
}
.bg-purple .Cont2_bot_left .img{
  width: 100%;
  height: 100%;
}
.bot_left_bottom{
  width: 100%;
  height:174px;
  background: rgba(0,0,0,0.5);
  position: absolute;
  left:0;
  bottom: 0;
}
.bot_left_bottom p{
  color:#b9b9b9;
  text-align: left;
  padding-left:36px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  height: 43px;
  line-height: 43px;
}
.bot_left_bottom p:hover{
  color:#fff;
  padding-left:52px;
  transition: all 0.5s ease 0s;
}
.bot_left_bottom p img{
  vertical-align: middle;
  margin-left: 15px;
}
.Cont2_bot_right{
  float: left;
  padding: 0 15px;
  width: 360px;
  text-align: left;
}
.Cont2_bot_right h4{
  font-size: 20px;
}
.bot_right_div1:hover h4{
  color:#ba131a;
}
.Cont2_bot_right p{
  line-height: 25px;
  margin-top: 10px;
}
.bot_right_div1{
  margin-top: 23px;
}
.bot_right_div1:first-child{
  margin-top:0;
}
.bot_right_div2{
  width:483px;
  height: 342px;
  position: relative;
}
.right_div2_lefc{
  width:152px;
  height:100%;
  background: rgba(0,0,0,0.5);
  color: #fff;
  position: absolute;
  left: 0;
  top:0;
}
.right_div2_lefc ul li{
  height:39px;
  line-height: 39px;
  text-align: center;
  margin: auto;
  border-bottom: 1px solid #333;
}
.right_div2_lefc ul li:hover{
  background: #c60716;
  cursor: pointer;
  padding-left: 30px;
}
.right_div2_lefc ul .li1:hover{
  padding-left: 0;
  background:none;
}
.right_div2_lefc ul li img{
  vertical-align: middle;
  margin-left: 10px;
}
.bot_right_div2Bottm{
  width: 483px;
}
.bot_right_div2Bottm li .span1{
  float: left;
}
.bot_right_div2Bottm li .span2{
  float: right;
}
/* .bot_right_div2Bottm li{
  height:30px;
  line-height: 30px;
  border:1px solid #c7c7c7;
  border-top:0px;
  padding: 20px;
} */
.el-collapse-item__content{
  padding: 20px;
  padding-bottom: 0;
}

.el-collapse-item div{
  text-align: left;
}
.Home-Cont3{
  background: #fff;
  padding-bottom:100px;
}
.Home-Cont3-IMG{
  width:1200px;
  height:530px;
  margin: auto;
  position: relative;
  background: #000;
}
.Home-Cont3-IMG img{
  width: 100%;
  height: 100%;
}
.Home-Cont3-word{
  width: calc(100% - 75px);
  height:214px;
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: left;
  padding-left: 75px;
}
.Home-Cont3-word p{
  font-size: 24px;
  color: #fff;
} 
.Home-Cont3-word p:first-child{
  padding-top:70px;
}
.Home-Cont3-word p:last-child{
  padding-top:35px;
  font-size: 16px;
}
.Home-Cont3-word p>a{
  cursor: pointer;
}
.Home-Cont3-word p>a:last-child{
padding-left:50px;

}
.Home-Cont4{
  background: #eee;
  width:100%;
  margin: auto;
}
.Home-Cont4 .el-row{
  width:1200px;
  margin: auto;
}
.Home-Cont4 .el-row .el-col{
  background: #fff;
  height:428px;
  width: 280px;
  margin: 0 10px;
}
.Cont4_top{
  height: 355px;
  text-align: center;
}
.Cont4_bottm{
  height: 74px;
  text-align: center;
  background: #c50c02;
  color:#fff;
}
</style>