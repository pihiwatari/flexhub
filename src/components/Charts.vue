<template>
  <p>{{ chartData }}</p>
  <canvas id="canvas"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  props: ["chartData"],
  data() {
    return {
      chart: "",
    };
  },
  methods: {
    // Chart methods
    createChart(ctx, options) {
      return new Chart(ctx, options);
    },
    updateChart(chart) {
      // Update chart parts labels
      chart.config.data.labels = this.injectionPartsArray;
      chart.config.data.datasets = [
        this.breakevenDataset,
        this.printingDataSet,
        this.injectionDataset,
      ];
      chart.options.scales.x.title.text = `Injected parts over a period of ${this.totalMonths} months`;
      chart.update();
    },
    // Get data from range slider inputs
    getData(id) {
      const index = this.chartData.findIndex((item) => item["rangeId"] === id);
      // Return an empty object if the prop is empty to avoid errors.
      if (index === -1) {
        return {};
      }

      // get object using rangeName key identifier
      const data = this.chartData[index];
      return data;
    },

    createArray(numberOfItems) {
      let array = [];
      for (let i = 1; i <= numberOfItems; i++) {
        array.push(i);
      }
      return array;
    },

    createPartsArray(time, parts) {
      let partsArray = [];
      for (let i = 1; i <= time; i++) {
        partsArray.push(i * parts);
      }
      return partsArray;
    },

    getInjectionCostPerPart(
      toolingCost,
      totalInjectedParts,
      costPerInjectedPart
    ) {
      if (totalInjectedParts == 0) {
        return toolingCost;
      }
      return (
        (totalInjectedParts * costPerInjectedPart + toolingCost) /
        totalInjectedParts
      );
    },
    calculateBreakEvenPoint(
      toolingCost,
      costPerInjectedPart,
      injectedPartsPerMonth,
      totalMonths,
      printedPartCost
    ) {
      return parseInt(
        Math.ceil(
          (toolingCost +
            costPerInjectedPart * injectedPartsPerMonth * totalMonths) /
            printedPartCost
        )
      );
    },
  },
  computed: {
    // Chart options
    topLevelChartOptions() {
      return {
        type: "scatter",
        data: {
          labels: this.injectionPartsArray,
          datasets: [
            this.breakevenDataset,
            this.printingDataSet,
            this.injectionDataset,
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                type: "linear",
                display: true,
                text: `Injected parts over a period of ${this.totalMonths} months`,
              },
              bounds: "data",
            },
            y: {
              type: "linear",
              title: {
                display: true,
                text: "Cost in US Dollars",
              },
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Injection Molding vs 3D printing part cost comparison",
          },
        },
      };
    },
    printingDataSet() {
      return {
        type: "line",
        label: "3D printing parts cost",
        data: this.printedPartsCostArray,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 1)",
        pointRadius: 0,
        hitRadius: 0,
      };
    },
    injectionDataset() {
      return {
        type: "line",
        label: "Injection parts per month",
        data: this.injectionPartsCostArray,
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,.2)",
        fill: true,
      };
    },
    breakevenDataset() {
      return {
        type: "scatter",
        label: "Breakeven Point",
        data: [{ x: this.breakEvenPoint, y: this.printedPartCost }],
        borderColor: "rgba(255, 50, 64, 1)",
        backgroundColor: "rgba(255, 50, 64, 1)",
      };
    },
    // chartData obtained from ../views/BreakEven.vue
    toolingCost() {
      return parseInt(this.getData(1).rangeValue);
    },
    injectionMoldingPartCost() {
      return parseFloat(this.getData(2).rangeValue);
    },
    printedPartCost() {
      return parseFloat(this.getData(3).rangeValue);
    },
    injectedPartsPerMonth() {
      return parseInt(this.getData(4).rangeValue);
    },
    totalMonths() {
      return parseInt(this.getData(5).rangeValue);
    },
    breakEvenPoint() {
      return parseInt(
        this.calculateBreakEvenPoint(
          this.toolingCost,
          this.injectionMoldingPartCost,
          this.injectedPartsPerMonth,
          this.totalMonths,
          this.printedPartCost
        )
      );
    },
    // Array computed properties
    injectionPartsArray() {
      return this.createPartsArray(
        this.totalMonths,
        this.injectedPartsPerMonth
      );
    },
    injectionPartsCostArray() {
      return this.injectionPartsArray.map((partsPerMonth) =>
        this.getInjectionCostPerPart(
          this.toolingCost,
          partsPerMonth,
          this.injectionMoldingPartCost
        )
      );
    },
    monthsArray() {
      return this.createArray(this.totalMonths);
    },
    printedPartsCostArray() {
      const array = this.createArray(this.totalMonths);
      const costArray = array.map((item) => {
        item = this.printedPartCost;
        return item;
      });
      return costArray;
    },
  },
  mounted() {
    const config = this.topLevelChartOptions;
    const ctx = document.getElementById("canvas").getContext("2d");
    const chart = this.createChart(ctx, config);


    // watch for individual changes for every slider and update the chart.
    this.chartData.forEach((prop, index) => {
      this.$watch(
        ["chartData", index].join("."),
        () => this.updateChart(chart),
        { deep: true }
      );
    });
  },
};
</script>

<style scoped lang="scss">
canvas {
  margin-top: 20px;
}
</style>
