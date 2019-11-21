<template>
    <div class="home">
       <el-container class="Home" v-if="show">
        <div class="Home-PC Home_Content">
            <div class="Home_banner">
               <img class="mainbox" src="../assets/mainbox.png"/>
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
                  <h4>CLASSIC CASE</h4>
                  <p>经典案例</p>
                </div>
                <el-row>
                  <el-col :span="6">
                    <div class="Cont4_top">
                        <img  src="../assets/guohui.png"/>
                        <p class="pand_35">中华人民共和国</p>
                        <p class="pand_20">北京市朝阳区人民法院</p>
                        <p class="pand_20 ft_22">民事判决书</p>
                        <p class="pand_15 ft_24">标的额：300万</p>
                    </div>
                    <div class="Cont4_bottm">
                        <p>李某与某企业货款纠纷案</p>
                        <h4>货款纠纷</h4>
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
            <div class="Home-Cont5">
                <div class="Home-Cont5_top">
                  <el-row>
                    <el-col :span="12">
                      <img src="../assets/left-top1.png"/>
                      <p>荣获新三板英雄榜最值得推荐律师事务所</p>
                    </el-col>
                    <el-col :span="12">
                      <img src="../assets/right-top1.png"/>
                      <p>荣获2015年年度最受媒体欢迎律所</p>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <img src="../assets/left-bottom1.png"/>
                      <p>2015年度十大维权打假现金法律服务机构</p>
                    </el-col>
                    <el-col :span="12">
                      <img src="../assets/right-bottom1.png"/>
                      <p>下一代教育基金会颁发的下一代教育爱心奉献奖</p>
                    </el-col>
                  </el-row>
                </div>
            </div>
        </div>
       </el-container> 
       <div class="Home-H5 " v-if="show1">
          <div class="swiper-container" id="swiper1">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <H5home1></H5home1>
                </div>
                <div class="swiper-slide">
                    <H5home2></H5home2>
                </div>
                <div class="swiper-slide">
                  <H5home3></H5home3>
                </div>
                <div class="swiper-slide">
                    <H5home4></H5home4>
                </div>
                <div class="swiper-slide">
                    <H5home5></H5home5>
                </div>
                <div class="swiper-slide">
                    <H5home6></H5home6>
                </div>
                <div class="swiper-slide">
                  <H5home7></H5home7>
                </div>
                <div class="swiper-slide">
                  <H5home8></H5home8>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import H5home1 from '@/components/H5home1'
import H5home2 from '@/components/H5home2'
import H5home3 from '@/components/H5home3'
import H5home4 from '@/components/H5home4'
import H5home5 from '@/components/H5home5'
import H5home6 from '@/components/H5home6'
import H5home7 from '@/components/H5home7'
import H5home8 from '@/components/H5home8'
export default {
  name: 'Home',
  components:{
    H5home1,
    H5home2,
    H5home3,
    H5home4,
    H5home5,
    H5home6,
    H5home7,
    H5home8
  },
  data () {
    return {
      activeNames: ['1'],
      show : true,
      show1 : false,
    }
  },
  beforeCreate: function () {
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;		
    if(w <= 1024){			

    }
  },
  created(){
    //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示	
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;		
    if(w <= 1024){			
      this.show = false;		
      this.show1 = true;	
      document.getElementsByTagName('body')[0].style.height = 100 +'%';
       document.getElementsByTagName('body')[0].style.position = 'relative';
        document.getElementsByTagName('html')[0].style.height = 100 +'%';
       document.getElementsByTagName('html')[0].style.position = 'relative';
      console.log(document.getElementsByTagName('body')[0].style.height);
    }
  },
  methods: {},
  mounted : function(){		
    var mySwiper = new Swiper('#swiper1', {
            pagination : '.swiper-pagination', // 分页器 小点点 
            paginationClickable :true,    // 开启点击分页器 进行切换
            // prevButton:'.swiper-button-prev',  // 三角形左滑动右滑动
            // nextButton:'.swiper-button-next',  // 三角形左滑动右滑动
            direction: 'vertical', // 开启上下滚动放向
            slidesPerView: 1, // 1整屏切换
            spaceBetween: 0,
            mousewheelControl: true
        })
        document.getElementsByTagName('footer')[0].style.display = 'none';
        document.getElementsByClassName('footer_bottom')[0].style.display = 'none';

  },
}
</script>

<style scoped>
  @import'../assets/css/home.css';
  @import 'swiper/dist/css/swiper.min.css';
  .home,.swiper-container{
    width: 100%;
    height: 100%;
  }
</style>