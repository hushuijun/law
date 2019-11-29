<template>
  <div class="whole">
    <ul>
      <li v-for="(item,index) of wholeList">
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
    <div class="more">
        <el-button plain>查看更多<i class="el-icon-arrow-down"></i></el-button>
    </div>
  </div>
</template>
<script>
import { queryResumeList } from "@/api/api";
export default {
  name: "Whole",
  props: ['inputName'],
  data() {
    return {
      wholeList:'',
      wholeID:'',
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
          console.log(this.wholeList)
      })
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
</style>