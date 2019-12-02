<template>
  <div class="team">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>JINGSHI&nbsp;TEAM</h1>
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
              <a @click="dialogTeamVisible = true">了解更多></a>
            </div>
          </div>
        </div>
      </div>
      <div class="team_classification">
        <a v-for="(item ,index) of teamList" 
        :key="index"
        @click="team_class(item.id,index)"
        :class="{active:index == curT}"
        >{{item.team}}</a>
      </div>
      <div class="team_member">
          <Whole :inputName.sync="detailsUL" v-if="" @func='DialogID' ></Whole>
      </div>
    </div>
    <el-dialog :visible.sync="dialogTeamVisible" width="80%">
        <div class="details">
            <div class="details_img">
                <!-- <img :src="item.imageUrl" alt=""> -->
            </div>
            <div class="details_text">
                <ul>
                    <li>
                        <h3>{{dialogList.name}}/{{dialogList.englishName}}</h3>
                        <p>合伙人律师</p>
                    </li>
                    <li>
                      <div v-html="dialogList.recommend"></div>
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
      id:''
    };
  },
  created() {},
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
  height: 500px;
  overflow: hidden;
  position: relative;
  background: url("../assets/team_bg.png") no-repeat;
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
  top: 40%;
  left: 50%;
  margin-left: -112px;
}
.team .header_title h1 {
  font-weight: 500;
  font-size: 36px;
}
.team .header_title p {
  font-size: 28px;
}
.team .team_content {
  width: 1200px;
  margin: auto;
  margin-top: -80px;
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
.team .team_center {
  margin-left: 45.5%;
}
.team .top {
  border-bottom: 2px solid #b8131b;
  width: 90%;
  height: 50px;
  margin: 20px auto;
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
.team .team_member {
  margin: auto;
  margin-top: 20px;
}
.team .details{
  display: flex;
}
.team .details .details_img{
  flex-shrink: 0;
}
.team .details .details_text{
  flex: 1;
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
    width: 120px;
    margin-left: -60px;
  }
  .team .team_content{
    margin-top: 20px;
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
}
</style>