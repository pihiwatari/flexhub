<template>
  <div>
    <h1>Instant Quoting Tool</h1>
    <p>
      Request new 3D printing serivices from the Additive Manufacturing Network
    </p>
    <h2>Need help?</h2>
    <p>Checkout our help resources</p>
    <a
      href="https://flextronics365.sharepoint.com/sites/additivemanufacturing/AM%20Instant%20Quoting%20Tool%20Page/Digifabster%20guide.pdf"
    >
      Open User Guide
    </a>
  </div>
  <Digifabster />
</template>

<script>
import Digifabster from "@/components/Digifabster.vue";

export default {
  components: {
    Digifabster,
  },
};
</script>

<style scoped lang="scss">
div {
  margin: 20px auto;
  text-align: center;

  h1 {
    margin: 20px auto;
  }

  h2 {
    margin: 20px auto;
    font-weight: normal;
  }

  a {
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    background-color: rgb(59, 130, 246);
    transition: all 0.25s;
    // This is for the active vue router link styling
    &:hover {
      background-color: rgb(31, 92, 192);
      transform: scale(1.05, 1.05) translateY(-3px);
    }
  }
}
</style>
