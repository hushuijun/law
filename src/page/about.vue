<template>
    <div class="about">
        <div class="hearder_bg">
            <div class="header_title">
            <h1>ABOUT JINGSH</h1>
            <p>关于京师</p>
            </div>
        </div>
        <div class="about_content">
          <div class="aboutCOnt1">
            <h2>肇造于1994年，实力看得到</h2>
            <p class="aboutCOnt1_p1"><span class="aboutCOnt1_line"></span></p>
            <div class="aboutCOnt1_p2">
                <p>京师律师，肇造于1994年，
                  总部设于北京市国贸CBD商圈，是一家传统与新型管理模式相结合的合伙制律师事务所。
                  京师自成立以来，一直朝着规模化、专业化、品牌化、国际化、电商化方向不断改革，
                  并以一流的律师团队、专业的行政服务、
                  坚韧的党建精神为依托，竭力打造一个更具影响力与号召力的律师生态圈。</p>
                  <p>
                      五年蓄力，京师北京总部一跃成为北京地区最大的律师事务所，
                      执业律师突破千人，截止到2019年9月，京师员工总人数达5885名；
                      截止到2019年10月，京师网络体系实现了在建、已建分所48家，
                      国内联盟所329家；海外办公室5家，29家国际联盟所涉及国家23个、
                      涉及城市25个。京师各地律所互益共生，协同共赢，形成具有全球影响力的法律服务机构。
                  </p>
              </div>
          </div>
          <div class="aboutCOnt2">
            <div class="aboutCOnt1">
                <h2>京师环境</h2>
                <p class="aboutCOnt1_p1"><span class="aboutCOnt1_line"></span></p>
            </div>
            <ul class="aboutCOnt2_ul1">
              <li @click="dialog = 0">
                <img src="../assets/wai_jings.png"/>
                <p>京师外景</p>
              </li>
              <li @click="dialog = 1">
                <img src="../assets/qi_jings.png"/>
                <p>京师氛围</p>
              </li>
              <li  @click="dialog= 2">
                <img src="../assets/nei_jings.png"/>
                <p>京师内景</p>
              </li>
            </ul>
            <ul class="aboutCOnt2_ul2">
                <li>
                    <div class="swiper-container" id="con4_swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" >
                                <img src="../assets/wai_jings.png"/>
                            </div>
                            <div class="swiper-slide" >
                                <img src="../assets/wai_jings.png"/>
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                  <p>京师外景</p>
                </li>
                <li>
                    <div class="swiper-container" id="con5_swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" >
                                <img src="../assets/qi_jings.png"/>
                            </div>
                            <div class="swiper-slide" >
                                <img src="../assets/qi_jings.png"/>
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                  <p>京师氛围</p>
                </li>
                <li>
                    <div class="swiper-container" id="con6_swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" >
                                <img src="../assets/nei_jings.png"/>
                            </div>
                            <div class="swiper-slide" >
                                <img src="../assets/nei_jings.png"/>
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                  <p>京师内景</p>
                </li>
              </ul>
          </div>
          <div class="aboutCOnt3">
             <div class="aboutCOnt1">
                  <h2>案件咨询</h2>
                  <p class="aboutCOnt1_p1"><span class="aboutCOnt1_line"></span></p>
              </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-row class="aboutCOnt3_input">
                  <el-col :span="12">
                    <el-form-item label="姓名" >
                      <el-input v-model="form.name" class="ASD"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="电话"  prop="mobile" :rules="[ { required: true, message: '电话不能为空'},{ min: 1, max: 11, message: '请填入正确的电话号码', trigger: 'blur' }]">
                      <el-input v-model="form.mobile" type="number" maxlength="11"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="aboutCOnt3_input">
                  <el-col :span="12">
                    <el-form-item label="城市"  prop="address">
                      <el-input v-model="form.address"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="案件类型">
                      <el-select v-model="form.category" placeholder="请选择" size='mini'>
                        <el-option label="行政诉讼" value="1"></el-option>
                        <el-option label="劳动争议" value="2"></el-option>
                        <el-option label="职务犯罪" value="3"></el-option>
                        <el-option label="婚姻纠纷" value="4"></el-option>
                        <el-option label="医疗纠纷" value="5"></el-option>
                        <el-option label="工伤维权" value="6"></el-option>
                        <el-option label="合同纠纷" value="7"></el-option>
                        <el-option label="遗产继承" value="8"></el-option>
                        <el-option label="公司法律" value="9"></el-option>
                        <el-option label="知识产权" value="10"></el-option>
                        <el-option label="房产建筑" value="11"></el-option>
                        <el-option label="涉外纠纷" value="12"></el-option>
                        <el-option label="其他" value="13"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <div class="aboutCOnt3_textarea">
                    <el-form-item label="案件描述">
                      <el-input type="textarea" v-model="form.consultDescribe"></el-input>
                    </el-form-item>
                </div>
                <div class="aboutCOnt3_input aboutCOnt3_align">
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">提交咨询</el-button>
                  </el-form-item>
                </div>
            </el-form>
        </div> 
        <div class="dialog" v-show="dialog == 0">
          <p @click="dialog = 9"><i class="el-icon-close"></i></p>
            <div class="swiper-container" id="con1_swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <img src="../assets/wai_jings.png"/>
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/wai_jings.png"/>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
          </div>
          <div class="dialog" v-show="dialog == 1">
          <p @click="dialog = 9"><i class="el-icon-close"></i></p>
            <div class="swiper-container" id="con2_swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <img src="../assets/qi_jings.png"/>
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/qi_jings.png"/>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
          </div>
          <div class="dialog" v-show="dialog == 2">
          <p @click="dialog = 9"><i class="el-icon-close"></i></p>
            <div class="swiper-container" id="con3_swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <img src="../assets/nei_jings.png"/>
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/nei_jings.png"/>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
          </div>
      </div>
      <div class="mask" v-if='show'>
        <span @click='show = false'>X</span>
          {{mask}}
      </div>
    </div>
</template>
<script>
import {addConsult} from '@/api/api'
import Swiper from 'swiper/dist/js/swiper.min.js';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'about',
  data(){
    return {
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      form: {
          address:'',
          name: '',
          mobile:'',
          category: '',
          consultDescribe: ''
        },
        dialog: '9',
        mask:'',
        show:false,
    }
  },
  methods: {
    onSubmit(form) {
      var that = this;
      console.log(this.form);
      this.$refs[form].validate((valid) => {
          if (valid) {
            addConsult(this.form).then(res=>{
             this.show = true 
            this.mask = '提交成功！'
            setTimeout(function(){that.show = false},1500)
            that.form = {
              address:'',
              name: '',
              mobile:'',
              category: '',
              consultDescribe: ''}
              this.$refs[form].resetFields();
            console.log(this.mask);
            // alert(this.mask)
      })
          } else {
            console.log('error submit!!');
            this.show = true 
            // alert('请完善信息！')
            this.mask = '请完善信息！'
            return false;
          }
        });
    },
  },
  mounted(){
        new Swiper('#con1_swiper', {
            // speed:1000,
            loop : true,
            autoplay:true,
            initialSlide :0, 
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }),
         new Swiper('#con2_swiper', {
            // speed:1000,
            loop : true,
             autoplay:true,
            initialSlide :0, 
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }),
         new Swiper('#con3_swiper', {
            // speed:1000,
            loop : true,
             autoplay:true,
            initialSlide :0, 
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
        ,
         new Swiper('#con4_swiper', {
            // speed:1000,
            loop : true,
             autoplay:true,
            initialSlide :0, 
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }),
         new Swiper('#con5_swiper', {
            // speed:1000,
            loop : true,
             autoplay:true,
            initialSlide :0, 
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }),
         new Swiper('#con6_swiper', {
            // speed:1000,
            loop : true,
             autoplay:true,
            initialSlide :0, 
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
}
</script>
<style>
.about .aboutCOnt3_input input{
  height: 43px;
  border-radius: 0px;
  width: 330px;
  border: 1px solid #b5b5b5;
}
.about .el-textarea .el-textarea__inner{ 
  resize: none;
  height: 240px;
  border-radius: 0px;
  width: 830px;
  margin-left: 20px;
  border:1px solid #b5b5b5;
}
</style>
<style scoped>
@import 'swiper/dist/css/swiper.min.css';
@import "../assets/css/base.css";
.about {
  min-height: 1500px;
  background: #f9f9f9;
  position: relative;
}
#con1_swiper{
  width:1100px;
  height: 600px;
  position: absolute;
  left:50%;
  top:50%;
  margin-left:-550px;
  margin-top:-300px;
}
#con1_swiper .swiper-slide img{
  width:100%;
}
#con2_swiper{
  width:1100px;
  height: 600px;
  position: absolute;
  left:50%;
  top:50%;
  margin-left:-550px;
  margin-top:-300px;
}
#con2_swiper .swiper-slide img{
  width:100%;
}
#con3_swiper{
  width:1100px;
  height: 600px;
  position: absolute;
  left:50%;
  top:50%;
  margin-left:-550px;
  margin-top:-300px;
}
#con3_swiper .swiper-slide img{
  width:100%;
}
.about .hearder_bg {
  width: 100%;
  height: 620px;
  overflow: hidden;
  position: relative;
  background: url("../assets/baout_bg.png") no-repeat;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.about .hearder_bg img {
  max-width: 100%;
}
.about .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  left: 50%;
  margin-left: -170px;
  margin-top: -47px;
}
.about .header_title h1{
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  letter-spacing: 4px;
}
.about .header_title p{
  font-size: 28px;
}
.about .about_content {
  width:100%;
  background: #fff;
}
.aboutCOnt1{
  margin:auto;
  padding-bottom: 60px;
}
.aboutCOnt1 h2{
  font-size:30px;
  text-align: center;
  margin: 0;
  font-weight: 500;
  padding-top:100px;
}
.aboutCOnt1_p1{
  text-align: center;
  margin:auto;
}
.aboutCOnt1_p2{
  text-align: center;
  margin:auto;
  width: 880px;
  text-align: left;
}
.aboutCOnt1_p2 p{
  line-height: 30px;
  text-indent: 2em;
  padding-top: 20px;
}
.aboutCOnt1_line{
  display: inline-block;
  text-align: center;
  width:54px;
  height:4px;
  background: #e60012;
}
.aboutCOnt2{
  width:100%;
  height:627px;
  background: #eee;
  margin-top: 100px;
}
.aboutCOnt2 ul{
  width:1200px;
  margin:auto;
  padding-left: 0;
}
.aboutCOnt2 ul li{
  margin-top:50px;
  width:33%;
  text-align: center;
  display: inline-block;
}
.aboutCOnt2 ul li p{
  padding-top:20px;
}
.aboutCOnt3_align{
  padding-bottom:50px ;
}
.el-form .ASD .el-input__inner{
height:48px;
}
.aboutCOnt3{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: url("../assets/abou_zixun.png") no-repeat;
  background-size: cover;
}
.aboutCOnt3_input{
  width:1000px;
  margin: auto;
  margin-top:10px;
}
.aboutCOnt3_input p{
  display: inline-block;
  width: 49%;
}
.aboutCOnt3_input p span{
  display: inline-block;
  width: 66px;
  text-align: right;
  font-size: 16px;
}
.aboutCOnt3_input input{
  width:330px;
  height:48px;
  border: 1px solid #b5b5b5;
  margin-left: 30px;
  background: #fff;
}
.aboutCOnt3_label{
  position: relative;
}
.el-dropdown{
  width:330px;
  height:48px;
  border: 1px solid #b5b5b5;
  margin-left: 25px;
  background: #fff;
  position: relative;
}
.el-dropdown-menu{
  width:330px;
}
.el-dropdown .el-dropdown-link{
  width: calc(100% - 20px);
  text-align: left;
  padding-left: 20px;
  line-height: 50px;
}
.aboutCOnt3_textarea p span{
    display: inline-block;
    width: 66px;
    text-align: right;
    font-size: 16px;
}
.aboutCOnt3_textarea{
  width: 1000px;
  margin: auto;
  margin-top:10px;
}
.aboutCOnt3_textarea p textarea{
  resize: none;
  width:820px;
  height:250px;
  margin-left:30px;
  border:1px solid #b5b5b5;
  background: #fff;
  outline: none;
}
.el-icon--right{
    position: absolute;
    right: 20px;
    top: 35%;
}
.aboutCOnt3_input a{
  display: inline-block;
  width:330px;
  height:56px;
  text-align: center;
  line-height: 56px;
  background: #ba131a;
  color:#fff;
  margin: auto;
  border-radius: 4px;
  cursor: pointer;
}
.aboutCOnt3_align{text-align:center}
.aboutCOnt3_align .el-button--primary{
   display: inline-block;
    width: 330px;
    height: 56px;
    text-align: center;
    background: #ba131a;
    color: #fff;
    margin: auto;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 16px;
    margin-top: 50px;
}
.el-select{
  width:100%;
}
.aboutCOnt3_input  >>> .el-form-item__content{
  padding-left:20px;
}
.aboutCOnt3 >>> .el-form-item__label{
  font-size:16px;
  color:#222;
}
.aboutCOnt3_input >>> .el-form-item__error{
  left: 20px;
}
.dialog{
  width:100%;
  height: 100%;
  position:fixed;
  left:0;
  top:0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
.dialog p i{
  color:#fff;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.dialog p{
  margin: 0;
  text-align: right;
  padding: 0 90px;
  padding-top: 50px;
}
.aboutCOnt2_ul1{
  display: block;
}
.aboutCOnt2_ul2{
  display:none;
}
.about >>> .el-input  input::-webkit-outer-spin-button,
.about >>> .el-input  input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
.mask{
  width: 150px;
    height: 100px;
    background: rgba(0,0,0,0.7);
    color: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -50px;
    line-height: 100px;
    text-align: center;
    z-index: 999;
    -webkit-box-shadow: 0px 1px 15px #ccc;
    box-shadow: 0px 1px 15px #ccc;
}
.mask span{
  display: block;
  width: 20px;
  height: 20px;
  color: white;
  border: 1px solid #fff;
  position: absolute;
  right: 10px;
  top: 10px;
  line-height: 20px;
  cursor: pointer;
}
.about >>> .el-select>.el-input{
  width: 330px;
}
.about >>> .el-select-dropdown{
  min-width: 330px!important;
}
@media screen and (max-width: 1024px) {
  .aboutCOnt2_ul1{
    display:none;
  }
  .aboutCOnt2_ul2{
    display:block;
  }
  .about .hearder_bg{
    height: 250px;
  }
  .about .header_title h1{
    font-size: 18px;
  }
  .about .header_title{
    margin-left: -87px;
  }
  .about .header_title p{
    font-size: 14px;
  }
  .aboutCOnt1 h2{
    font-size:15px;
    text-align: center;
    margin: 0;
    font-weight: 500;
    padding-top:20px;
  }
  .aboutCOnt1_p2{
    width: calc(100% - 40px);
  }
  .aboutCOnt2{
    height:100%;
    padding-bottom: 20px;
    margin-top: 30px;
  }
  .aboutCOnt2 ul{
    width:calc(100% - 40px);
  }
  .aboutCOnt2 ul li{
    width:100%;
    margin-top: 20px;
  }
  .aboutCOnt2 ul li:first-child{
    margin-top: 0;
  }
  .aboutCOnt2 ul li img{
    width:100%;
  }
  .aboutCOnt1_p1{
    height:0;
  }
  .aboutCOnt1_line{
    width: 0;
  }
  .aboutCOnt3 .el-col-12{
    width:100%;
  }
  .about .aboutCOnt3_input input{
    width:calc(100% - 45px);
  }
  .aboutCOnt1{
    padding-bottom:30px;
  }
  .aboutCOnt3_input >>> .el-form-item__label{
     text-align: left;
  }
  .aboutCOnt3_textarea >>> .el-form-item__label{
     text-align: left;
  }
  .aboutCOnt3_input  >>> .el-form-item__content{
    padding-left:0;
    width: calc(100% - 80px);;
  }
  .aboutCOnt3 >>> .el-input__inner{
    width:100%;
  }
  .aboutCOnt3_input p{
    width:100%;
    padding-top: 20px;
  }
  .aboutCOnt3_input p span{
    text-align: left;
    width: 12%;
    display: inline-block;
    font-size: 14px;
  }
  .aboutCOnt3_input p input{
    width: 87%;
    height: 30px;
    border: 1px solid #b5b5b5;
    background: #fff;
    margin-left: 0;
  }
  .aboutCOnt3_input .aboutCOnt3_label span{
    text-align: left;
    width: 18%;
    display: inline-block;
    font-size: 14px;
  }
  .el-dropdown{
    width: 80%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #b5b5b5;
    background: #fff;
    margin-left: 0;
  }
  .aboutCOnt3_input{
    margin-top:0 ;
    width: calc(100% - 40px);
  }
  .aboutCOnt3_align .el-button--primary{
      margin-left: -80px;
    width: 150px;
    height: 35px;
    text-align: center;
    margin-top: 30px;
  }
  .el-dropdown .el-dropdown-link{
    line-height: 30px;
    width: 100%;
  }
  .aboutCOnt3_textarea{
    width:calc(100% - 40px);
  }
  .aboutCOnt3_textarea >>> .el-textarea .el-textarea__inner{
    width: 100%;
    height: 140px;
    margin-left: 0;
  }
  .aboutCOnt3_textarea p span{
    text-align: left;
    width: 19%;
    display: inline-block;
    font-size: 14px;
  }
  .aboutCOnt3_textarea p textarea{
    width: 79%;
    border: 1px solid #b5b5b5;
    background: #fff;
    margin-left: 0;
  }
}
</style>