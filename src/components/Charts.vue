<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  props: ["chartData"],
  methods: {
    createInitialChart(ctx, options) {
      new Chart(ctx, options);
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
    // generalChartOptions() {
    //   const options = {
    //     type: "line",
    //     data: {
    //       labels: 
    //     }
    //   }
    //   return options;
    // },
    printedPartsChartOptions() {
      return {
        type: "line",
        label: "3D printed part cost",
        data: this.printedPartsCostArray,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 1)",
        pointRadius: 0,
        hitRadius: 0,
      };
    },
    // chartData obtained from ../views/BreakEven.vue
    toolingCost() {
      return parseInt(this.getData(1).rangeValue) || 3500;
    },
    injectionMoldingPartCost() {
      return parseFloat(this.getData(2).rangeValue) || 0.65;
    },
    printedPartCost() {
      return parseFloat(this.getData(3).rangeValue) || 15;
    },
    injectedPartsPerMonth() {
      return parseInt(this.getData(4).rangeValue) || 10000;
    },
    totalMonths() {
      return parseInt(this.getData(5).rangeValue) || 12;
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
    const ctx = document.getElementById("canvas").getContext("2d");
    this.createInitialChart(ctx, this.generalChartOptions);
  },
};
</script>

<style scoped lang="scss">
canvas {
  margin-top: 20px;
}
</style>
