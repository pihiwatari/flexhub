<template>
  <nav class="header">
    <router-link :to="{ name: 'Quote' }">
      <img src="@/assets/logo.png" alt="Flex logo" />
    </router-link>
    <ul>
      <li v-for="(link, i) in externalLinks" :key="i">
        <a :href="link.address" target="_blank"> {{ link.name }} </a>
      </li>
      <li v-for="(link, i) in routerLinks" :key="i">
        <router-link :to="{ name: link.address }">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      externalLinks: [
        {
          name: "Flex Additive Homepage",
          address:
            "https://flextronics365.sharepoint.com/sites/additivemanufacturing",
        },
        {
          name: "Digital Catalog",
          address:
            "https://apps.powerapps.com/play/daa6a785-3ff2-4779-8743-520fecd48ea4?tenantId=3f0e69e0-eb38-4eb2-b4ee-52919719d31e?l=en-us",
        },
      ],
      routerLinks: [
        {
          name: "Instant Quoting Tool",
          address: "Quote",
        },
        {
          name: "Competency Centers",
          address: "Maps",
        },
        {
          name: "Break Even Tool",
          address: "BreakEven",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 70px;

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
        padding: 10px;
        border-radius: 5px;
        transition: all 0.25s;
        // This is for the active vue router link styling
        &.router-link-exact-active,
        &:hover {
          color: #fff;
          background-color: rgb(59, 130, 246);
          transform: scale(1.05, 1.05) translateY(-3px);
        }
      }
    }
  }
}
</style>
