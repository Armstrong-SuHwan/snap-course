<template>
  <div id="app">
    <top-banner></top-banner>
    <navigation-bar></navigation-bar>
    <router-view/>
  </div>
</template>

<script>
import TopBanner from "@/components/TopBanner";
import NavigationBar from "@/components/NavigationBar";
export default {
  name: 'App',
  components: {
    TopBanner,
    NavigationBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Pretendard;
}
* a, * a:hover {
  text-decoration: none;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
