<template>
  <div id="app">
    <div>
      <app-header></app-header>
    </div>
     <router-view></router-view>
     <div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  components: {
    "app-header": Header,
    "app-footer":Footer
  }
};
</script>

<style>
body,p{
  margin: 0;
}

#app{
  height: 100%;
}

</style>
