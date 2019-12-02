<template>
  <div class="whole">
    <ul>
      <li v-for="(item,index) of wholeList" 
        @click = 'clickCut(item.id)'
      >
        <div class="whole_item">
          <img :src="item.imageUrl" alt="" />
          <div>
            <h3>{{item.name}}</h3>
            <p>{{item.recommend}}</p>
            <p>{{item.address}}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="more"  v-if="flag">
      <el-button plain>查看更多<i class="el-icon-arrow-down"></i></el-button>
    </div>
    <TeamDialog :DialogID.sync="WholeDialogID" v-if="showPrise"></TeamDialog>
  </div>
</template>
<script>
import { queryResumeList } from "@/api/api";
import TeamDialog from '@/page/team/TeamDialog'
export default {
  name: "Whole",
  props: ['inputName'],
  components: {TeamDialog},
  data() {
    return {
      wholeList:'',
      wholeID:'',
      showPrise:false,
      WholeDialogID:'',
      flag:false
    };
  },
  created(){
    this.cont();
  },
  mounted(){
    this.cont();
  },
  methods:{
    cont(){
      console.log(this.inputName)
      queryResumeList(this.wholeID).then(res=>{
          this.wholeList = res.data;
          if(res.data<=9){
            this.flag = tfalserue
          }
      })
    },
    clickCut(id){
      this.WholeDialogID = id;
      console.log(this.WholeDialogID)
      this.$emit('func',this.WholeDialogID)
    }
  },
  watch: {
      inputName(){
        this.cont();
      }
  }
};
</script>
<style>
.whole .more{
   text-align: center;
   margin: 20px auto;
}
.whole .more button{
    border-radius: 0;
    border:1px solid slategray;
    padding: 12px 60px;
}
</style>
<style scoped>
.whole ul,
li,h3 {
  margin: 0;
  padding: 0;
  list-style: none;
}
.whole ul{
  margin: 0 40px;
}
.whole ul li {
  display: inline-block;
  width: 330px;
  height:442px;
  /* margin-left: 12px; */
  overflow: hidden;
  text-align: center;
  margin: 20px;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px 0px #efefef;
  cursor: pointer;
}
.whole ul li img {
  display: block;
  max-width: 100%;
  width: 330px;
  height: 333px;
  margin: auto;
}
.whole ul .whole_item h3{
  font-size:18px;
  color: #3a3a3a;
}
.whole ul .whole_item div{
    padding: 15px 0;
}
.whole ul .whole_item div p{
   margin-top: 5px;
}
@media screen and (max-width: 1024px) {
  .whole ul{
    margin: 0 20px;
  }
  .whole ul li{
    width: 160px;
    margin: 0;
    margin-right: 15px;
    height: 215px;
  }
  .whole ul li:nth-of-type(even){
    margin-right: 0;
  }
  .whole ul li img{
    width:100%;
    height:100%
  }
}
</style>