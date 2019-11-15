<template>
    <div class="Home">{{msg}}</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '我是首页'
    }
  }
}
</script>

<style scoped>
 .home{
    color: #000;
    font-size:40px;
 }
</style>