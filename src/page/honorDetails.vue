<template>
        <div class="honorDetails">
          <div class="hearder_bg">
            <div class="header_title">
              <h1>AWARDS&nbsp;AND&nbsp;HONORS</h1>
              <p>奖项荣誉</p>
            </div>
          </div>
          <div class="honorDetails_content">
            <div class="top"><router-link to="/home">首页</router-link> > <a>奖项荣誉</a></div>
            <div
              class="honor_content"
              v-for="(item,index) of list"
              :key="index"
              :class="showIndex == index ? 'active' : ''"
              @mouseleave="leave()"
            >
              <h1>{{item.year}}</h1>
              <ul>
                <li v-for="(item,index) of item.honor" :key="index" @mouseenter="ender(index)">
                  <div class="line">
                    <span>{{item.month}}月</span>
                    <span class="circle"></span>
                    <span>{{item.text}}</span>
                  </div>
                  <div class="honor_img">
                    <img :src='item.img_url' alt />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
      <script>
      export default {
        name: "HonorDetails",
        data() {
          return {
            showIndex: 0,
            list: [
              {
                year: 2019,
                honor: [
                  {
                    month: "6",
                    text: "荣获中共北京市朝阳区律师委员会颁发的“先进党组织”荣誉",
                    img_url: "../assets/2019/1.jpg"
                  },
                  {
                    month: "6",
                    text: "被评为“2018~2019年度北京市律师行业先进律师事务所党组织”",
                    img_url: "../assets/2019/2.jpg"
                  },
                  {
                    month: "6",
                    text: "被评为“2018~2019年度北京市律师行业党建创新项目”",
                    img_url: "../assets/2019/3.jpg"
                  }
                ]
              },
              {
                year: 2018,
                honor: [
                  {
                    month: "7",
                    text: "荣获“2017~2018年度北京先进律师事务所党组织”荣誉",
                    img_url: ""
                  },
                  {
                    month: "6",
                    text: "被评为“2018年度支持地区建设先进单位党组织”",
                    img_url: ""
                  },
                  {
                    month: "5",
                    text: "荣获“2017年北京市商务服务业主品牌100强”荣誉",
                    img_url: ""
                  },
                  {
                    month: "5",
                    text: "荣获“女童保护”2018“爱心企业”称号",
                    img_url: ""
                  },
                  {
                    month: "4",
                    text: "被评为“北京品牌协会常任理事单位”",
                    img_url: ""
                  }
                ]
              },
              {
                year: 2017,
                honor: [
                  {
                    month: "12",
                    text: "荣获“传化·安心驿站”战略合作",
                    img_url: ""
                  },
                  {
                    month: "12",
                    text: "荣获“2017助力金融风险防范机构”称号",
                    img_url: ""
                  },
                  {
                    month: "6",
                    text: "荣获北京市法律援助中心颁发的“法律援助联络点”荣誉",
                    img_url: ""
                  },
                  {
                    month: "6",
                    text: "荣获“支持地区建设先进单位党组织”荣誉",
                    img_url: ""
                  }
                ]
              },
               {
                year: 2016,
                honor: [
                  {
                    month: "12",
                    text: "荣获“2016年度新三板英雄榜十大最值得推荐律师事务所”",
                    img_url: ""
                  },
                  {
                    month: "12",
                    text: "被评为“中国慈善联合会2016年度推动者”",
                    img_url: ""
                  },
                  {
                    month: "11",
                    text: "被评为“国际关系学院法律实践教学基地”",
                    img_url: ""
                  },
                  {
                    month: "10",
                    text: "成为“万家灯火项目志愿服务合作单位”",
                    img_url: ""
                  },
                  {
                    month: "9",
                    text: "被评为“中国不良资产行业联盟会员单位”",
                    img_url: ""
                  },
                  {
                    month: "8",
                    text: "担任“中国慈善联合会法律顾问”",
                    img_url: ""
                  },
                  {
                    month: "3",
                    text: "成为“中国企业重大法律事务解决中心”",
                    img_url: ""
                  }
                ]
              },
               {
                year: 2015,
                honor: [
                  {
                    month: "12",
                    text: "荣获“2015年度新三板英雄榜最值得推荐律师事务所”",
                    img_url: ""
                  },
                  {
                    month: "10",
                    text: "被授予“下一代教育爱心奉献奖”",
                    img_url: ""
                  },
                  {
                    month: "4",
                    text: "被评为“2014年度新三板十大最值得推荐律师事务所”",
                    img_url: ""
                  },
                  {
                    month: "4",
                    text: "荣获“北京品牌协会常务理事单位”",
                    img_url: ""
                  }
                ]
              }
            ]
          };
        },
        created() {
          //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
          let w = document.documentElement.offsetWidth || document.body.offsetWidth;
          if (w <= 1024) {
            this.show1 = false;
            this.show2 = true;
          }
        },
        methods: {
          ender(index) {
            this.showIndex = 999;
          },
          leave() {
            this.showIndex = 0;
          }
        }
      };
</script>
<style scoped>
@import "../assets/css/base.css";
.honorDetails {
    min-height: 1500px;
    background: #f9f9f9;
    padding-bottom: 80px;
}
.honorDetails h1,
ul,
li {
    margin: 0;
    padding: 0;
}
.honorDetails .hearder_bg {
    width: 100%;
    height: 620px;
    overflow: hidden;
    position: relative;
    background: url("../assets/honorDetails_bg.png") no-repeat;
    background-size: cover;
    /* background: rgba(0, 0, 0, 0.7); */
}
/* .honorDetails .hearder_bg img {
max-width: 100%;
} */
.honorDetails .header_title {
    position: absolute;
    text-align: center;
    color: white;
    top: 40%;
    left: 50%;
    margin-left: -211px;
}
.honorDetails .header_title h1 {
    margin: 0;
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 20px;
}
.honorDetails .header_title p {
    font-size: 28px;
}
.honorDetails .honorDetails_content {
    width: 1200px;
    margin: auto;
    margin-top: -95px;
    padding-bottom: 20px;
    background: white;
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}

.honorDetails .honorDetails_center {
    margin-left: 45.5%;
}
.honorDetails .top {
    border-bottom: 1px solid #b8131b;
    width: 1118px;
    height: 95px;
    margin: auto;
}
.honorDetails .top a{
    display: inline-block;
    line-height: 95px;
    color: #646464;
    font-size: 16px;
    cursor: pointer;
}
.honorDetails .top a:last-child{
    color: #3d3d3d;    
    cursor: not-allowed;
}
.honorDetails .honorDetails_content .honor_content {
    width: 1118px;
    margin: auto;
    margin-top: 65px;
}
.honorDetails .honorDetails_content .honor_img {
    position: absolute;
    width: 442px;
    height: 328px;
    background: #f1f1f1;
    top: 0px;
    right: 0px;
    display: none;
}
.honorDetails .honorDetails_content .honor_content h1 {
    font-size: 36px;
    color: #b8131b;
    font-weight: 500;
    margin-left: 10px;
}
.honorDetails .honorDetails_content .honor_content ul {
    margin-top: -7px;
    margin-left: 70px;
}
.honorDetails .honorDetails_content .honor_content ul li {
    position: relative;
    font-size: 16px;
    padding-top: 34px;
    cursor: pointer;
}
.honorDetails .active ul li:first-child {
    color: #b8131b;
}
.honorDetails .active ul li:first-child .honor_img {
    display: block;
}
.honorDetails .honorDetails_content .honor_content ul li:hover {
    color: #b8131b;
}
.honorDetails .honorDetails_content .honor_content ul li:hover .honor_img {
    display: block;
}
.honorDetails .honorDetails_content .honor_content ul li span:first-child {
    display: inline-block;
    width: 40px;
    text-align: right;
}
.honorDetails .honorDetails_content .honor_content ul li .line {
    display: inline-block;
}
.honorDetails .honorDetails_content .honor_content ul li .line .circle {
    display: inline-block;
    width: 9px;
    height: 9px;
    border: 2px solid #b8131b;
    border-radius: 9px;
    margin: 0 16px;
}
.honorDetails .honor_content:last-child .honor_img {
    bottom: 0px;
    top: inherit;
}
@media screen and (max-width: 1024px) {
    .honorDetails .hearder_bg{
        height: 250px;
    }
    .honorDetails .honorDetails_content{
        margin-top:0 ;
    }
    .honorDetails .header_title{
        margin-left: -100px;
    }
    .honorDetails .header_title h1{
        font-size: 18px;
    }
    .honorDetails .header_title p{
        font-size: 14px;
    }
    .honorDetails .honorDetails_content{
        width:100%;
    }
    .honorDetails .top{
        width: calc(100% - 40px);
    }
    .honorDetails .top a{
        font-size:16px;
    }
    .honorDetails .honorDetails_content .honor_img{
        display: none!important;
    }
    .honorDetails .honorDetails_content .honor_content{
        width:100%;
        margin-top: 30px;
    }
    .honorDetails .honorDetails_content .honor_content h1{
        font-size: 16px;
        margin-left: 20px;
        margin-bottom: 20px;
    }
    .honorDetails .honorDetails_content .honor_content ul li {
        padding-top: 0; 
    }
    .honorDetails .honorDetails_content .honor_content ul li .line span:last-child{
        display: inline-block;
        width: 190px;
        padding: 0 20px;
        padding-bottom: 37px;
        border-left: 1px solid #b8131b;
        margin-left: 17.5%;
        margin-top: -7%;
        position: relative;
        z-index: -1;
    }
    .honorDetails .honorDetails_content .honor_content ul li .line .circle{
        margin: 0;
        vertical-align: top;
        background: #fff;
    }
    .honorDetails{
        width: 100%;
        height: 100%;
        padding-bottom:0;
    }
    .honorDetails .honorDetails_content .honor_content ul li:last-child span:last-child{
        border-left:none;
    }
    .honorDetails .active ul li:first-child {
        color: #000;
    }
    .honorDetails .honorDetails_content .honor_content ul li:hover {
        color: #000;
    }
}
</style>