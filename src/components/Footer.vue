<template>
  <el-container>
    <el-footer>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="logo_2">
            <img src="../assets/logo2.png" alt />
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <div class="contact">
                    <img src="../assets/phone.png" alt="">
                </div>
              </el-col>
              <el-col :span="15">
                <div class="contact">
                    <p>
                        CALL&nbsp;US
                    </p>
                    <p>
                        4001-666-001
                    </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
               <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <div class="contact">
                    <img src="../assets/tel.png" alt="">
                </div>
              </el-col>
              <el-col :span="15">
                <div class="contact">
                    <p>
                        CALL&nbsp;US
                    </p>
                    <p>
                        4001-666-001
                    </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
               <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <div class="contact">
                    <img src="../assets/e_mail.png" alt="">
                </div>
              </el-col>
              <el-col :span="15">
                <div class="contact">
                    <p>
                       E-MAIL
                    </p>
                    <p>
                        4001-666-001
                    </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
               <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <div class="contact">
                    <img src="../assets/address.png" alt="">
                </div>
              </el-col>
              <el-col :span="15">
                <div class="contact">
                    <p>
                        ADDRESS
                    </p>
                    <p>
                    北京市朝阳区东四环路37号京师律师大厦
                    </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-footer>
    <el-row>
      <el-col :span="24">
        <div class="footer_bottom">COPYRIGHT&nbsp;2019京ICP备20191022号-1&nbsp;版权所有京师律师事务所</div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
    data(){
        return{
            msg:'我是脚'
        }
    }
}
</script>

<style scoped>
.el-container {
  background: #1f2229;
  color: white;
  text-align: center;
}
.grid-content {
  border: 1px solid #383838;
  border-bottom: none;
}
.el-footer {
  height: auto !important;
}
.logo_2 {
  padding: 40px 0;
}
.footer_bottom {
  padding: 11px 0;
  background: #141720;
  border-top: 1px solid #383838;
  color: #6E6F72;
  font-size: 12px;
}
.contact{
   height: 100px;
   margin-top: 53px;
   box-sizing: border-box;
}
.contact p{
    text-align: left;
    font-size: 14px;
}
.contact p:first-child{
    font-size: 14px;
    color: #6E6F72;
}
.contact img{
    margin-top: 9px;
}
</style>