<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue"


export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Century Gothic", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
