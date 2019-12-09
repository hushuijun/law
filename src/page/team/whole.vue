<template>
  <div class="whole">
    <ul>
      <li v-for="(item,index) of wholeList.slice(0,a)" 
        @click = "clickCut(item.id)">
        <div class="whole_item">
          <div class="whole_item_Img">
              <img v-bind:src="item.imageUrl"/>
          </div>
          <div>
            <h3>{{item.name}}</h3>
            <p>{{item.positionName}}</p>
            <p>{{item.address}}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="more"  v-if="a<wholeList.length" @click='loadMore'>
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
      flag:true,
      a:9,
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
      this.wholeID = {position:this.inputName}
      console.log(this.wholeID)
      queryResumeList(this.wholeID).then(res=>{
        this.wholeList =  res.data
        console.log(this.wholeList)
        let  left = res.data
          if(res.data<=9){
            this.flag = false
          }
      })
    },
    clickCut(id){
      this.WholeDialogID = id;
      console.log(this.WholeDialogID)
      this.$emit('func',this.WholeDialogID)
    },
    loadMore:function(){
          this.a+=9;
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
.whole_item_Img{
  padding: 0!important;
  max-width: 100%;
  width: 330px;
  height: 333px;
  margin: auto;
  overflow: hidden;
}
.whole ul li img {
  display: block;
  width: 100%;
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
    width: 47%;
    margin: 0;
    margin-right: 15px;
    height: 215px;
  }
  .whole ul .whole_item_Img{
    height: 150px;
  }
  .whole ul .whole_item div{
    padding:5px 0;
  }
  .whole ul .whole_item div p{
    margin-top: 0;
    font-size: 13px;
  }
  .whole ul .whole_item h3{
    font-size: 14px;
  }
  .whole ul li:nth-of-type(even){
    margin-right: 0;
  }
  .whole ul li img{
    width:100%;
  }
  .team .details{
  }
}
</style>