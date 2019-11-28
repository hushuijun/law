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
        <router-link
          tag="a"
          to="/team/"
          :class="isSelect === 'Whole' ? 'active' : ''"
          @click.native="selectNav(title)"
        >全部</router-link>
        <router-link
          tag="a"
          to="/director"
          :class="isSelect === 'Director' ? 'active' : ''"
          @click.native="selectNav(title)"
        >部门主任</router-link>
        <router-link
          tag="a"
          to="/globalPartners"
          :class="isSelect === 'GlobalPartners' ? 'active' : ''"
          @click.native="selectNav(title)"
        >全球合伙人</router-link>
        <router-link
          tag="a"
          to="/partnerLawyer"
          :class="isSelect === 'PartnerLawyer' ? 'active' : ''"
          @click.native="selectNav(title)"
        >合伙人律师</router-link>
        <router-link
          tag="a"
          to="/practicingLawyer"
          :class="isSelect === 'PracticingLawyer' ? 'active' : ''"
          @click.native="selectNav(title)"
        >执业律师</router-link>
      </div>
      <div class="team_member">
        <router-view></router-view>
      </div>
    </div>
    <el-dialog :visible.sync="dialogTeamVisible" width="80%">
      <div class="details">
        <div class="details_img">
          <img src="../assets/leader.png" alt="">
        </div>
        <div class="details_text">
          <ul>
            <li>
              <h3>
                林才红/LIN&nbsp;CAIHONG
              </h3>
              <p>
                合伙人律师
              </p>
            </li>
            <li>
              <h4>
                教育背景：
              </h4>
              <p>
                <span>
                  2013.09--2016.07
                </span>
                <span>
                  复旦大学
                </span>
                <span>
                  专业：国际经济法
                </span>
                <span>
                  学位：法学硕士
                </span>
              </p>
            </li>
            <li>
              <h4>
                工作经历：
              </h4>
              <p>
       全程参与律师团队为某企业在“新三板”转让系统挂牌项目，参与尽调，并出具法律意见书；
              </p>
            </li>
            <li>
              <h4>
                学术研究：
              </h4>
              <p>
                2015.07在期刊《南京师范大学报》上发表文章《大陆架划界规划的新发展及其评述》
              </p>
            </li>
          </ul>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { queryteamList } from "@/api/api";
export default {
  name: "team",
  data() {
    return {
      dialogTeamVisible: false,
      isSelect: "Whole",
      title: "",
    };
  },
  created() {},
  mounted() {
    this.isSelect = this.$route.name;
  },
  methods: {
    selectNav(title) {
      this.isSelect = this.$route.name;
      switch (title) {
        case "Whole":
          this.$router.push("/");
          break;
        case "Director":
          this.$router.push("/director");
          break;
        case "GlobalPartners":
          this.$router.push("/globalPartners");
          break;
        case "PartnerLawyer":
          this.$router.push("/partnerLawyer");
          break;
        case "PracticingLawyer":
          this.$router.push("/practicingLawyer");
          break;
      }
    }
  }
};
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
}
.team .header_title p {
  font-size: 28px;
}
.team .team_content {
  width: 70%;
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
  display: flex;
  margin-top: 50px;
  border: 1px solid #efefef;
}
.team .team_title .leader .leader_left {
  flex-shrink: 0;
  width: 400px;
  /* overflow: hidden; */
}
.team .team_title .leader .leader_left img {
  max-width: 100%;
}
.team .team_title .leader .leader_right {
  flex: 1;
  background: #f8f8f8;
  padding: 0 40px;
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
  width: 94%;
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
</style>