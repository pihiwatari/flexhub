<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  props: ["chartData"],
  data() {
    return {
      initialChartOptions: {
        type: "bar",
        data: {
          datasets: [
            {
              label: "Sample dataset",
              data: [20, 10],
            },
          ],
          labels: ["a", "b"],
        },
      },
    };
  },
  methods: {
    createInitialChart(ctx, options) {
      new Chart(ctx, options);
    },
    getData(id) {
      // Return an empty object if the prop is empty to avoid errors.
      if (!this.chartData) {
        return {};
      }

      // get object using rangeName key identifier
      const data = this.chartData.find((object) => object["rangeId"] == id);
      return data;
    },

    // Create a period of time for injection molding process
    createTimePeriod(time) {
      let timePeriod = [];
      for (let i = 0; i < time; i++) {
        timePeriod.push(i);
      }
      return timePeriod;
    },
  },
  computed: {
    // chartData comes from ChartForm.vue
    tooling() {
      return this.getData(1);
    },
    injectionPartsCost() {
      return this.getData(2);
    },
    printedPartsCost() {
      return this.getData(3);
    },
    partsPerMonth() {
      return this.getData(4);
    },
    runningMonths() {
      return this.getData(5);
    },
  },
  mounted() {
    const ctx = document.getElementById("canvas").getContext("2d");
    this.createInitialChart(ctx, this.initialChartOptions);
  },
};
</script>

<style scoped lang="scss">
canvas {
  margin-top: 20px;
}
</style>
