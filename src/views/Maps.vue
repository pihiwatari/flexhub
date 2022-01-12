<template>
  <div class="text-container">
    <h1>Flex Additive Compentency Centers</h1>
    <p>Click on any marker to display site's information</p>
  </div>
  <LeafletMaps />
</template>

<script>
import LeafletMaps from "@/components/LeafletMaps.vue";
export default {
  components: {
    LeafletMaps,
  },
};
</script>

<style scoped lang="scss">
  .text-container {
    text-align: center;
  }
</style>
