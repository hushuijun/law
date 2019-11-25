<template>
    <div class="about">
        <div class="hearder_bg">
            <div class="header_title">
            <h1>ABOUT JINGSHI</h1>
            <p>关于京师</p>
            </div>
        </div>
        <div class="about_content">
          <div class="aboutCOnt1">
            <h2>肇造于1994年，实力看得到</h2>
            <p class="aboutCOnt1_p1"><span class="aboutCOnt1_line"></span></p>
            <div class="aboutCOnt1_p2">
                <p>北京市京师律师事务所，肇造于1994年，
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
            <ul>
              <li>
                <img src="../assets/wai_jings.png"/>
                <p>京师外景</p>
              </li>
              <li>
                <img src="../assets/qi_jings.png"/>
                <p>京师氛围</p>
              </li>
              <li>
                <img src="../assets/nei_jings.png"/>
                <p>京师内景</p>
              </li>
            </ul>
          </div>
          <!-- <div class="aboutCOnt3">
              <div class="aboutCOnt1">
                  <h2>案件咨询</h2>
                  <p class="aboutCOnt1_p1"><span class="aboutCOnt1_line"></span></p>
              </div>
              <div class="aboutCOnt3_input">
                <p><label><span>姓名</span><input type="text" v-model="input1"/></label></p>
                <p><label><span>电话</span><input type="text" v-model="input2"/></label></p>
              </div>
              <div class="aboutCOnt3_input">
                <p><label><span>城市</span><input type="text"  v-model="command"/></label></p>
                <p><label class="aboutCOnt3_label">
                    <span>案件类型</span>
                    <el-dropdown  trigger="click">
                        <span class="el-dropdown-link">
                          请选择<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item command="行政诉讼" >行政诉讼</el-dropdown-item>
                          <el-dropdown-item command="劳动争议">劳动争议</el-dropdown-item>
                          <el-dropdown-item command="职务犯罪">职务犯罪</el-dropdown-item>
                          <el-dropdown-item command="婚姻纠纷">婚姻纠纷</el-dropdown-item>
                          <el-dropdown-item command="医疗纠纷">医疗纠纷</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">工伤维权</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">合同纠纷</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">遗产继承</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">公司法律</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">知识产权</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">房产建筑</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">涉外纠纷</el-dropdown-item>
                          <el-dropdown-item command="工伤维权">其他</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                  </label>
              </p>
              </div>
              <div class="aboutCOnt3_textarea">
                  <p><label><span>案件描述</span><textarea></textarea></label></p>
              </div>
              <div class="aboutCOnt3_input aboutCOnt3_align" v-model="message">
                <a @click="clickINPUT()">提交咨询</a>
              </div>
          </div> -->



          <div class="aboutCOnt3">
             <div class="aboutCOnt1">
                  <h2>案件咨询</h2>
                  <p class="aboutCOnt1_p1"><span class="aboutCOnt1_line"></span></p>
              </div>
          <el-form ref="form" :model="form" label-width="80px">
              <el-row class="aboutCOnt3_input">
                <el-col :span="12">
                  <el-form-item label="姓名" >
                    <el-input v-model="form.name1" class="ASD"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="电话">
                    <el-input v-model="form.tel"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            <el-row class="aboutCOnt3_input">
              <el-col :span="12">
                <el-form-item label="城市">
                  <el-input v-model="form.city"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="案件类型">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="行政诉讼" value="行政诉讼"></el-option>
                    <el-option label="劳动争议" value="劳动争议"></el-option>
                    <el-option label="职务犯罪" value="职务犯罪"></el-option>
                    <el-option label="婚姻纠纷" value="婚姻纠纷"></el-option>
                    <el-option label="医疗纠纷" value="医疗纠纷"></el-option>
                    <el-option label="工伤维权" value="工伤维权"></el-option>
                    <el-option label="合同纠纷" value="合同纠纷"></el-option>
                    <el-option label="遗产继承" value="遗产继承"></el-option>
                    <el-option label="公司法律" value="公司法律"></el-option>
                    <el-option label="知识产权" value="知识产权"></el-option>
                    <el-option label="房产建筑" value="房产建筑"></el-option>
                    <el-option label="涉外纠纷" value="涉外纠纷"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="aboutCOnt3_textarea">
                <el-form-item label="案件描述">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
            </div>
            <div class="aboutCOnt3_input aboutCOnt3_align">
              <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">提交咨询</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
        </div>
    </div>
</template>
<script>
import {addConsult} from '@/api/api'
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
          name1: '',
          tel:'',
          region: '',
          desc: ''
        }
    }
  },
  method:{
    clickINPUT(){
console.log(this.input1)
console.log(this.input2)
console.log(this.input3)
console.log(this.input4)
console.log(this.input5)
    }
  },
methods: {
    onSubmit(form) {
      console.log(this.form);
    }
  }
}
</script>
<style>
.about .aboutCOnt3_input input{
  height: 48px;
  border-radius: 0px;
}
.about .el-textarea .el-textarea__inner{ 
  resize: none;
  height: 200px;
  border-radius: 0px;
}
</style>
<style scoped>
@import "../assets/css/base.css";
.about {
  min-height: 1500px;
  background: #f9f9f9;
}
.about .hearder_bg {
  width: 100%;
  height: 500px;
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
  top: 40%;
  left: 50%;
  margin-left: -122px;
}
.about .header_title h1{
    font-weight: 500;
}
.about .header_title p{
    font-size:28px;
}
.about .about_content {
  width:100%;
  background: #fff;
}
.aboutCOnt1{
  margin:auto;
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
  margin-top:35px;
}
.el-input__inner{
  height:48px!important;
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
  margin-top:35px;
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
}
.el-select{
  width:100%;
}
.aboutCOnt3_input input{
  height: 48px;
}
@media screen and (max-width: 1024px) {
  .about .hearder_bg{
    height: 250px;
  }
  .about .header_title h1{
    font-size: 18px;
  }
  .about .header_title{
    margin-left: -66px;
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
    margin-top: 20px;
  }
  .aboutCOnt1_p2{
    width: calc(100% - 40px);
  }
  .aboutCOnt2{
    height:100%;
    padding-bottom: 20px;
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
  .aboutCOnt3_input{
    width:calc(100% - 40px);
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
  }
  .el-dropdown .el-dropdown-link{
    line-height: 30px;
    width: 100%;
  }
  .aboutCOnt3_textarea{
    width:calc(100% - 40px);
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
  .aboutCOnt3_input a{
    display: inline-block;
    width: 150px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    margin-top: 30px;
  }
}
</style>