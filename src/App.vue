<template>
  <Header />
  <router-view class="router-view"></router-view>
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

a {
  display: inline-block;
  text-decoration: none;
  color: #1f2937;
}

#app {
  font-family: 'Century Gothic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: rgba(229, 231, 235, 1);
  & > .router-view {
    max-width: 940px;
    margin: 0 auto 12px;
    padding: 0 5%;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  background-color: #1f2937;
  color: #f0f0f0;
  small {
    display: block;
    width: 100%;
    text-align: center;
    margin: auto;
  }
}

@media screen and (max-width: 427px) {
  h1 {
    font-size: 24px;
  }

  #app {
    & > div {
      padding: 0 12px;
    }
  }
}
</style>
