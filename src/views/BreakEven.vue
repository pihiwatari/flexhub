<template>
  <div class="breakeven">
    <h1>3D Printing Break Even Tool</h1>
    <p>
      If you're considering using 3D printing as an alternative to injection
      molding, our comparison tool will be able to help you make the right
      choice. Discover how many parts can be printed before injection molding
      becomes a better option.
    </p>
    <ChartForm />
    <Charts />
  </div>
</template>

<script>
import ChartForm from "@/components/ChartForm.vue"
import Charts from "@/components/Charts.vue";
export default {
  components: {
    Charts,
    ChartForm
  },
};
</script>

<style scoped lang="scss">
.breakeven {
  max-width: 80%;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin: 20px auto;
  }
}
</style>
