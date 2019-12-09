<template>
  <div class="majorDetails">
    <div class="hearder_bg">
      <div class="header_title">
        <h1>专业领域</h1>
        <p>咨询热线：4001-666-001</p>
      </div>
    </div>
    <div class="majorDetails_content">
      <div class="top">{{this.details.territoryName}}</div>
      <div class="content">
        <p v-html='this.details.catDesc'></p>
        <table  cellspacing="0">
          <thead>
            <tr>
              <th v-for="(item,index) of tableList" :key='index'>
                {{item.title}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of details.list" :key='index'>
              <td class="td">
                 <a>{{item.name}}</a>
              </td>
              <td>
                  {{item.email}}
              </td>
              <td>
                 {{item.positionName}}
              </td>
              <td>
                  {{item.address}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { queryTerritoryDet } from "@/api/api";
export default {
  name: "majorDetails",
  data() {
    return {
      details: "",
      tableList:[
        {
          title:'姓名'
        },
        {
          title:'邮箱'
        },
        {
           title:'职位'
        },
        {
         title:'办公室'
        }
      ]
    };
  },
  created() {
    //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w <= 1024) {
    }
    this.detailsList();
  },
  mounted() {
    this.detailsList();
  },
  methods: {
    detailsList() {
      queryTerritoryDet(this.$route.query).then(res => {
        this.details = res.data;
      });
    }
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
.majorDetails {
  /* min-height: 1500px; */
  background: #f9f9f9;
  padding-bottom: 80px;
}
.majorDetails h1,
ul,
li {
  margin: 0;
  padding: 0;
}
.majorDetails .hearder_bg {
  width: 100%;
  height: 620px;
  overflow: hidden;
  position: relative;
  background: url("../assets/major_bg.jpg") no-repeat;
  background-size: cover;
}
/* .majorDetails .hearder_bg img {
  max-width: 100%;
} */
.majorDetails .header_title {
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  left: 50%;
  margin-left: -141px;
  margin-top: -62.5px;
}
.majorDetails .header_title h1 {
  margin: 0;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 25px;
}
.majorDetails .header_title p {
  font-size: 24px;
}
.majorDetails .majorDetails_content {
  width: 1200px;
  margin: auto;
  margin-top: -95px;
  padding-bottom: 20px;
  background: white;
  position: relative;
  z-index: 1;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12); */
}

.majorDetails .majorDetails_center {
  margin-left: 45.5%;
}
.majorDetails .top {
  border-bottom: 1px solid #d9d9d9;
  width: 1096px;
  height: 150px;
  margin: auto;
  font-size: 30px;
  text-align: center;
  line-height: 160px;
}
.majorDetails .content {
  width: 1096px;
  margin: auto;
  margin-top: 60px;
  padding: 0 5px;
  font-size: 16px;
  color: #505050;
}
.majorDetails .content table{
  width: 100%;  
  margin-top: 60px;
  text-align: center;
  border-collapse: collapse;
}
.majorDetails .content table thead{
  background: #E5E5E5;
}
.majorDetails .content table th,td{
  height: 55px;
}
.majorDetails .content table,table tr th, table tr td { border:0.5px solid silver;}
.majorDetails .majorDetails_content .honor_content {
  width: 1118px;
  margin: auto;
  margin-top: 65px;
}
.majorDetails .majorDetails_content .honor_img {
  position: absolute;
  width: 442px;
  height: 328px;
  background: #f1f1f1;
  top: 0px;
  right: 0px;
  display: none;
}
.majorDetails .majorDetails_content .honor_content h1 {
  font-size: 36px;
  color: #b8131b;
  font-weight: 500;
  margin-left: 10px;
}
.majorDetails .majorDetails_content .honor_content ul {
  margin-top: -7px;
  margin-left: 70px;
}
.majorDetails .majorDetails_content .honor_content ul li {
  position: relative;
  font-size: 16px;
  padding-top: 34px;
}
.majorDetails .active ul li:first-child {
  color: #b8131b;
}
.majorDetails .active ul li:first-child .honor_img {
  display: block;
}
.majorDetails .majorDetails_content .honor_content ul li:hover {
  color: #b8131b;
}
.majorDetails .majorDetails_content .honor_content ul li:hover .honor_img {
  display: block;
}
.majorDetails .majorDetails_content .honor_content ul li span:first-child {
  display: inline-block;
  width: 40px;
  text-align: right;
}
.majorDetails .majorDetails_content .honor_content ul li .line {
  display: inline-block;
}
.majorDetails .majorDetails_content .honor_content ul li .line .circle {
  display: inline-block;
  width: 9px;
  height: 9px;
  border: 2px solid #b8131b;
  border-radius: 9px;
  margin: 0 16px;
}
.majorDetails .honor_content:last-child .honor_img {
  bottom: 0px;
  top: inherit;
}
.td a{
  text-decoration: underline;
}
@media screen and (max-width: 1024px) {
  .majorDetails{
    padding-bottom: 0;
  }
  .majorDetails .hearder_bg {
    height: 240px;
  }
  .majorDetails .header_title {
    margin-left: -82px;
    margin-top: -29px;
  }
  .majorDetails .header_title h1 {
    font-size: 20px;
    margin-bottom: 13px;
  }
  .majorDetails .header_title p {
    font-size: 14px;
  }
  .majorDetails .majorDetails_content {
    width: 100%;
    margin-top: 0;
    padding-bottom: 55px;
  }
  .majorDetails .top {
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin-top: 10px;
  }
  .majorDetails .content {
    width: 90%;
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>