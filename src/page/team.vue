<template>
  <div class="team">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>JINGSH&nbsp;TEAM</h1>
        <p>京师团队</p>
      </div>
    </div>
    <div class="team_content">
      <div class="top"></div>
      <div class="team_title">
        <p>北京市京师律师事务所，肇造于1994年，总部设于北京市国贸CBD商圈，是一家传统与新型管理模式相结合的合伙制律师事务所。京师自成立以来，一直朝着规模化、专业化、品牌化、国际化、电商化方向不断改革，并以一流的律师团队、专业的行政服务、坚韧的党建精神为依托，竭力打造一个更具影响力与号召力的律师生态圈。</p>
        <p>京师拥有一批实战经验丰富的精英律师，大多数在国内外著名大学的法学院系接受过系统的法学教育，获得法学博士、硕士学位，许多律师还具有注册会计师、税务师或高级人力资源管理师等资格。京师律师事务所还聘请了一批国内外著名院校专家、学者、各界名流担任顾问，为京师战略和具体案件提供有力支持。</p>
        <div class="leader">
          <div class="leader_left">
            <img src="../assets/leader.png" alt />
          </div>
          <div class="leader_right">
            <div class="leader_name">
              <p>林才红</p>
              <p>Lin&nbsp;Caihong</p>
            </div>
            <div class="leader_synopsis">
              <p>京师：京师者何？天子之居也。京者何？大也。师者何？众也。天子之居，必以众大之辞言之。京师律师事务所处首善之都，倚知名学府，揽浩瀚资源，汇天下英才。京师人深知，不拒众流，方为江海。京师人深信，立专业之本，承君子之德，笃法律之学，守四海之义，方能使京师人文充溢，厚德载物。</p>
            </div>
            <div class="leader_more">
              <a @click="DialogID2()">了解更多></a>
            </div>
          </div>
        </div>
      </div>
      <div class="team_classification">
        <a v-for="(item ,index) in teamList" 
        :key="index"
        @click="team_class(item.id,index)"
        :class="{active:index == curT}"
        >{{item.team}}</a>
      </div>
      <div class="team_member">
          <Whole :inputName.sync="detailsUL" v-if="" @func='DialogID' ></Whole>
      </div>
    </div>
    <el-dialog :visible.sync="Boss" width="100%">
        <div class="details">
            <div class="details_img">
                <img src="../assets/leader.png" alt />
            </div>
            <div class="details_text">
                <ul>
                    <li>
                        <h3>林才红 / LIN CAIHONG</h3>
                        <p class="details_textP1">执业律师</p>
                    </li>
                    <li>
                      <div class="div">
                        <p>
                          <span class="span">教育背景</span>
                          <span>北京大学</span>
                        </p>
                        <p>
                          <span class="span">专业领域</span>
                         <span>国际法律事务、境外并购M&A、海外上市IPO、外商投资FDI等</span>
                        </p>
                        <p>
                          <span class="span">个人简介</span>
                          <span>
                            林才红律师，执业于北京市京师律师事务所，
                            北京市律师协会优秀党员，北师大经济犯罪研究中心研究员，
                            十六年房地产、金融资深执业律师经历，房地产、
                            金融 创新与资产证券化、并购重组、国际综合、
                            外商投资与境外投资、兼并重组 风险投资及私募股权投资、
                            证券与资本市场、股权投资领域的金融法律专家。从业近20年，
                            其经办的众多案件经央视焦点法谈、央视财经频道、央视经济半小时、
                            浙江卫视、上海卫视、人民日报、新华社、南方周末、中国青年报、
                             中国经营报、中国企业报、中国工商时报、人民代表报、
                             华夏时报、钱江晚报、新京报、京华时报、上海第一财经日报、
                             新浪网、新华网、搜狐网、网易等几乎全国所有媒体广泛报道。
                             林才红律师现为北京市京师律师事务所创 始合伙人、管委会主任，
                             创造了两年将一家18人的律所发展成为京城最大律 
                             所1000多名律师的律界奇迹。
                              工程类对外投资典型案例
                              北京首钢建设集团有限公司位于斯里兰卡科伦坡的 
                              THE ONE项目。项目计划于2019年4月15日开工，
                              2021年5月1日竣工，A 塔为80层，建筑高度326米，
                              B塔为77层，建筑高度291米，C塔为92层， 建筑高度为376米。
                              功能涵盖丽思卡尔顿、JW万豪两大奢华五星级酒店以 及豪华公寓、
                              奢侈品商铺、高端写字楼。作为顶级酒店品牌的丽思卡尔顿， 
                              在亚洲仅有新加坡、吉隆坡、曼谷、阿曼推出过四个公寓式酒店项目，
                              科伦坡THE ONE项目是亚洲第五个，也是南亚第一个，类似于北京的中国尊，
                              建成后将成为科伦坡地标性建筑，极具影响力。
                              中国电子系统工程第四建设有限公司位于匈牙利的SK锂电池项目提供前期咨询服务项目。
                              SK创新公司(SK Innovation)斥资8000 万亿韩元(约合7.34亿美元)，
                              计划在匈牙利北部科马隆(Komarom)市 建立一家电动车电池生产厂，
                              该项目将于明年2月破土动动。这座新工厂是继去年初起在匈牙利科马罗姆
                              (Komarom)市建设中的年产能7.5GWh的电动汽车电池工厂之后，
                              出于加强欧洲境内优势地位的目的而决定新建的。该工厂总建筑面积达35,432坪(1坪=3.3平方米)。
                              巴基斯坦Neelum-Jhelum水电项目。
                              具体为浙江省正邦水电建设有限公司与中国葛洲坝集团股份有限公司、
                              中国葛洲坝集团国际工程有限公司、葛洲坝新疆工程局(有限公司)工程合同纠纷仲裁案件。
                              林才红律师团队代理申请人浙江省正邦水电建设有限公司为当事人挽回数千万元的损失。
                              </span>
                          </p>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogTeamVisible" width="100%">
        <div class="details">
            <div class="details_img">
                <img :src="dialogList.imageUrl" alt="">
            </div>
            <div class="details_text">
                <ul>
                    <li>
                        <h3>{{dialogList.name}}/{{dialogList.englishName}}</h3>
                        <p>合伙人律师</p>
                    </li>
                    <li>
                      <div class="div" v-html="dialogList.recommend"></div>
                    </li>
                </ul>
            </div>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import { queryResumeById } from "@/api/api"
import Whole from '@/page/team/whole'
import TeamDialog from '@/page/team/TeamDialog'
export default {
  name: "team",
  components: {Whole,TeamDialog},
  data() {
    return {
      teamList:[{id:'',team:'全部'},{id:'1',team:'部门主任'},
                {id:'2',team:'全球合伙人'},{id:'3',team:'合伙人律师'},
                {id:'4',team:'执业律师'}],
      detailsUL:'',
      curT:0,
      dialogTeamVisible: false,
      dialogList:'',
      id:'',
      Boss:false
    };
  },
  created(){
  },
  mounted() {
  },
  methods: {
    team_class(id,index){
      this.curT = index
      this.detailsUL = id
    },
    DialogID(id){
      this.id = {id:id}
      if(id !== null){
            console.log(id) 
            this.dialogTeamVisible = true
        }
      queryResumeById(this.id).then(res=>{
          this.dialogList = res.data;
          console.log(this.dialogList)
      })
    },
    DialogID2(){
      this.Boss = true
    }
},
  watch: {
    '$route' (to, from) {
        this.team_class(id,index);
    }
  }
}
</script>
<style scoped>
@import "../assets/css/base.css";
.team {
  min-height: 1500px;
  background: #f9f9f9;
  padding-bottom: 80px;
}
.team .hearder_bg {
  width: 100%;
  height: 620px;
  overflow: hidden;
  position: relative;
  background: url(/static/img/team_bg.170d5bf.png) no-repeat center;
  background-size: cover;
  /* background: rgba(0, 0, 0, 0.7); */
}
.team .hearder_bg img {
  max-width: 100%;
}
.team .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  left: 50%;
  margin-left: -155px;
  margin-top: -47px;
}
.team .header_title h1{
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  letter-spacing: 4px;
}
.team .header_title p{
  font-size: 28px;
}
.team .team_content {
  width: 1200px;
  margin: auto;
  margin-top: -95px;
  padding-bottom: 90px;
  background: white;
  position: relative;
  z-index: 1;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12); */
}
.team .top {
  border-bottom: 2px solid #b8131b;
  width: 1120px;
  height: 94px;
  margin: auto;
}
.team .text_nav {
  text-align: center;
}
.team .text_nav a {
  display: inline-block;
  padding: 10px 20px;
}
.team .text_nav a:hover {
  background: #b8131b;
  color: white;
}
.team .active {
  background: #b8131b;
  color: white;
}
.team .team_title {
  width: 90%;
  margin: auto;
  margin-top: 50px;
}
.team .team_title p {
  line-height: 30px;
  margin-top: 10px;
  text-indent: 2rem;
  color: #3d3d3d;
}
.team .team_title .leader {
  margin-top: 50px;
  border: 1px solid #efefef;
  overflow: hidden;
}
.team .team_title .leader .leader_left {
  height: 580px;
  display: inline-block;
  float: left;
}
.team .team_title .leader .leader_left img {
  width: 100%;
}
.team .team_title .leader .leader_right {
  background: #f8f8f8;
  padding: 0 40px;
  width: 527px;
  display: inline-block;
  float: left;
  height: 580px;
}
.team .team_title .leader .leader_right .leader_name {
  text-align: center;
  margin-top: 80px;
}
.team .team_title .leader .leader_right .leader_name p {
  margin: 0;
  font-size: 20px;
}
.team .team_title .leader .leader_right .leader_synopsis {
  margin-top: 50px;
}
.team .team_title .leader .leader_right .leader_synopsis p {
  text-indent: 0;
}
.team .team_title .leader .leader_right .leader_more {
  margin-top: 40px;
}
.team .team_title .leader .leader_right .leader_more a {
  display: block;
  text-align: center;
  font-size:16px;
  width:80px;
  margin: auto;
  text-decoration:underline;
  cursor: pointer;
}
.team .team_classification {
  text-align: center;
  margin-top: 60px;
}
.team .team_classification a {
  display: inline-block;
  width: 130px;
  height: 37px;
  line-height: 37px;
  margin-right: 10px;
  border: 1px solid #efefef;
  cursor: pointer;
}

.team .team_member {
  margin: auto;
  margin-top: 20px;
}
.team .details{
  width: 1200px;
  margin: auto;
  margin-top: 40px;
}
.team .details .details_img{
  display: inline-block;
  width: 40%;
  vertical-align: top;
}
.team .details .details_img img{
  width: 100%;
}
.team .details .details_text{
  display: inline-block;
  width: 50%;
  line-height: 30px;
}
.details_text h3{
  font-size:30px;
  color:#262626;
  font-weight: 400;
}
.details_textP1{
  font-size: 18px;
}
.details_text .div p{
  margin-top: 25px;
}
.details_text .div p .span{
  font-size: 20px;
  color: #0b0b0b;
  font-weight: 400;
  display:block;
  padding-bottom: 0;
}
.team >>> .el-dialog__headerbtn .el-dialog__close{
  width:40px;
  height:40px;
  background: url('../assets/close.png');
  background-size:contain ;
}
.team >>> .el-icon-close:before{
  content:none;
}
.team >>> .el-dialog__body{
  padding:0;
}
.team .details_text li p span{
  padding-bottom:26px;
  font-size: 16px;
}
@media screen and (min-width: 1025px){
  .team >>> .el-dialog{
    margin: 0;
    margin-top:0!important;
    left: 0;
    top: 0;
    min-height: 100%;
    padding-bottom: 10px;
  }
  .team .team_classification a:hover {
    background: #b8131b;
    border: 1px solid #b8131b;
    color: white;
  }
  
  .team .team_classification .active {
    background: #b8131b;
    border: 1px solid #b8131b;
    color: white;
  }
}
@media screen and (max-width: 1024px) {
  .team .hearder_bg{
    height: 250px;;
  }
  .team .header_title h1 {
      font-size: 18px;
  }
  .team .header_title p{
    font-size: 14px;
  }
  .team .header_title{
    width: 170px;
    margin-left: -85px;
    margin-top: -23px;
  }
  .team .team_content{
    margin-top: 0;
    width:100%;
  }
  .team .team_title .leader .leader_left{
    display: inline;
    width:100%;
    height:100%;
  }
  .team .team_title .leader .leader_right{
    display: inline;
    width:100%;
    padding: 0;
  }
  .team .team_title{
    width:100%;
  }
  .team .team_title p{
    padding:0 20px;
  }
  .team .team_title .leader .leader_right .leader_name p{
    text-align: center;
    text-indent: 0;
  }
  .whole ul{
    margin: 0 20px;
  }
  .whole ul li{
    width: 143px;
    margin-right: 0px;
  }
  .team .team_classification a{
    border:none;
    width: 20%;
    margin-right:0;
    font-size: 13px;
  }
  .team{
    padding-bottom: 0;
  }
  .team .team_classification a:first-child{
    width:10%;
  }
  .team .team_classification .active{
    background: none!important;
    border:none!important;
    color: #b8131b!important;
  }
  .team .details{
    width:calc(100% - 40px);
  }
  .team .details .details_img,.team .details .details_text{
    width:100%;
  }
  .details_text ul{
    padding-left:0;
  }
  .team >>> .el-dialog__headerbtn .el-dialog__close{
    width: 28px;
    height:28px;
  }
  .team >>> .el-dialog__body{
    padding-top: 40px;
  }
  .team >>> .el-dialog{
    margin: 0;
    margin-top:0!important;
    left: 0;
    top: 0;
  }
  .team .top{
    width: 90%;
    height: 30px;
  }
}
</style>