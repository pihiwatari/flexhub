<template>
  <h1>Instant Quoting Tool</h1>
  <p>
    Request new 3D printing serivices from the Additive Manufacturing Network
  </p>
  <h2>Need help?</h2>
  <p>Checkout our help resources</p>
  <button>Open User Guide</button>
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

<style class="sass">


</style>
