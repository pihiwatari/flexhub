<template>
  <Header />
  <router-view style="max-width: 940px; margin: auto"></router-view>
  <footer>
    <small>Developed by Elias Rayas | AME</small>
  </footer>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f0f0f0;
}

#app {
  font-family: 'Century Gothic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(229, 231, 235, 1);
  min-height: 100vh;
}

a {
  display: inline-block;
  text-decoration: none;
  color: #1f2937;
}

footer {
  height: 40px;
  margin-top: 200px;
  background-color: #1f2937;
  color: #f0f0f0;
  small {
    display: block;
    width: 100%;
    text-align: center;
    margin: auto;
  }
}
</style>
