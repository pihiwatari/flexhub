<template>
  <div class="breakeven">
    <h1>Multi Jet Fusion breakeven calculator</h1>
    <p>
      If you're considering using 3D printing as an alternative to injection
      molding, our comparison tool will be able to help you make the right
      choice. Discover how many parts can be printed before injection molding
      becomes a better option.
    </p>
    <ChartForm @chart-data-change="updateData" />
    <Charts :chart-data="newChartData" />
  </div>
</template>

<script>
import ChartForm from '@/components/ChartForm.vue'
import Charts from '@/components/Charts.vue'
export default {
  components: {
    Charts,
    ChartForm
  },
  data() {
    return {
      newChartData: []
    }
  },
  methods: {
    updateData(data) {
      this.newChartData = data
    }
  }
}
</script>

<style scoped lang="scss">
.breakeven {
  text-align: center;

  h1 {
    margin: 20px auto;
  }
}
</style>
