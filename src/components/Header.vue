<template>
  <nav class="header">
    <router-link :to="{ name: 'Quote' }">
      <img src="@/assets/logo.png" alt="Flex logo" />
    </router-link>
    <ul :class="{ 'open-menu': openMenu }">
      <!-- Disabled links -->
      <li v-for="(link, i) in externalLinks" :key="i">
        <a role="link" aria-disabled="true">
          {{ link.name }}
        </a>
      </li>
      <!-- Disabled links -->
      <!-- Functional links -->
      <li v-for="(link, i) in routerLinks" :key="i">
        <router-link :to="{ name: link.address }">
          {{ link.name }}
        </router-link>
      </li>
      <!-- Functional links -->
    </ul>
    <div
      class="hamburger-menu"
      :class="{ 'open-burger': openMenu }"
      @click="showMenu"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // These links are disabled due to auth requirement.
      externalLinks: [
        {
          name: 'Flex Additive Homepage',
          address: '#'
        },
        {
          name: 'Digital Catalog',
          address: '#'
        }
      ],
      routerLinks: [
        {
          name: 'Instant Quoting Tool',
          address: 'Quote'
        },
        {
          name: 'Competency Centers',
          address: 'Maps'
        },
        {
          name: 'Breakeven Tool',
          address: 'BreakEven'
        }
      ],
      openMenu: false,
      windowWidth: window.innerWidth
    }
  },
  methods: {
    showMenu() {
      this.openMenu = !this.openMenu
    },
    closeMenu() {
      this.openMenu = false
    },
    onResize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth > 1023) {
        this.closeMenu()
      }
    }
  },
  watch: {
    $route() {
      this.openMenu = false
    },
    windowWidth(newValue) {
      this.windowWidth = newValue
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 70px;
  width: 100%;

  // Box shadow
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.14);

  a {
    height: 100%;
    img {
      height: 100%;
    }
  }

  ul {
    display: flex;
    flex: 1 1;
    justify-content: flex-end;

    li {
      margin: 0 10px;
      list-style: none;

      a {
        padding: 12px;
        border-radius: 5px;
        text-align: center;
        font-size: 0.75rem;
        transition: all 0.25s;
        // This is for the active vue router link styling
        &.router-link-exact-active,
        &:hover {
          font-weight: bold;
          color: #fff;
          background-color: rgb(59, 130, 246);
          transform: scale(1.05, 1.05) translateY(-3px);
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .header {
    justify-content: space-between;

    ul {
      top: -100vh;
      bottom: 100vh;
      right: 0;
      left: 0;
      position: absolute;
      z-index: 99;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f0f0f0;
      // Transitions
      transition: all 0.6s ease-in-out;
      opacity: 0;

      li {
        margin: 8px auto;

        a {
          font-size: 1.2rem;
        }
      }
    }

    .open-menu {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      // Transitions
      transition: all 0.6s ease-in-out;
      opacity: 1;
    }

    .hamburger-menu {
      position: relative;
      z-index: 999;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-around;
      // align-items: center;
      width: 40px;
      height: 20px;
      padding: 4px;
      div {
        position: absolute;
        width: 100%;
        height: 5px;
        margin: auto;
        border-radius: 5px;
        background-color: #1f2937;
        transform: rotate(0deg);
        transform: scale(1);
        transition: all 0.25s ease-in-out;
      }
      & div:nth-child(1) {
        top: 0;
      }
      & div:nth-child(2) {
        top: 10px;
      }
      & div:nth-child(3) {
        top: 20px;
      }
      // Menu animation
      &.open-burger div:nth-child(1) {
        top: 1px;
        transform: rotate(45deg);
        transform-origin: 0;
        transition: all 0.25s ease-in-out;
      }
      &.open-burger div:nth-child(2) {
        transform: scale(0, 1);
        transition: all 0.25s ease-in-out;
      }
      &.open-burger div:nth-child(3) {
        top: 29px;
        transform: rotate(-45deg);
        transform-origin: 0;
        transition: all 0.25s ease-in-out;
      }
    }
  }
}
</style>
