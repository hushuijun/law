<template>
    <el-dialog :visible.sync="dialogTeamVisible" width="80%">
        <div class="details" v-for="(item,index) in dialogList">
            <div class="details_img">
                <img :src="item.img" alt="">
            </div>
            <div class="details_text">
                <ul>
                    <li>
                        <h3>林才红/LIN&nbsp;CAIHONG</h3>
                        <p>合伙人律师</p>
                        </li>
                    <li>
                        <h4>教育背景：</h4>
                        <p>
                            <span>2013.09--2016.07</span>
                            <span>复旦大学</span>
                            <span></span>
                            <span>学位：法学硕士</span>
                        </p>
                    </li>
                    <li>
                        <h4>工作经历：</h4>
                        <p>全程参与律师团队为某企业在“新三板”转让系统挂牌项目，参与尽调，并出具法律意见书</p>
                    </li>
                    <li>
                        <h4>学术研究：</h4>
                        <p>2015.07在期刊《南京师范大学报》上发表文章《大陆架划界规划的新发展及其评述》</p>
                    </li>
                </ul>
            </div>
        </div>
    </el-dialog>
</template>

<script>
import { queryResumeById } from "@/api/api";
export default {
  name: "TeamDialog",
  props: ['DialogID'],
  data(){
      return{
        dialogTeamVisible: false,
        isSelect: "Whole",
        title: "",
        dialogList:''
      }
  },
  created(){
    this.details();
  },
  methods: {
    details(){
        console.log(this.inputName)
        queryResumeById(this.wholeID).then(res=>{
            this.dialogList = res.data;
            console.log(this.dialogList)
        })
        }
    },
    watch: {
        DialogID(){
            if(this.DialogID !== null){
                console.log(this.DialogID) 
                this.dialogTeamVisible = true
            }
        }
    }
}
</script>

<style scoped>
/* @import "../assets/css/base.css"; */
.el-dialog{
    z-index: 3000;
}
</style>