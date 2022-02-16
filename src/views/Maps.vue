<template>
  <div class="main-container">
    <div class="text-container">
      <h1>Flex Additive Compentency Centers</h1>
      <p>Click on any marker to display site's information</p>
    </div>
    <LeafletMaps />
  </div>
</template>

<script>
import LeafletMaps from '@/components/LeafletMaps.vue'
export default {
  components: {
    LeafletMaps
  }
}
</script>

<style scoped lang="scss">
.main-container {
  .text-container {
    margin-bottom: 20px;
    text-align: center;

    h1 {
      margin: 20px auto;
    }
  }
}
</style>
