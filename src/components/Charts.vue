<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  data() {},
  mounted() {
    const ctx = document.getElementById("canvas").getContext("2d");
    const chart = () => {
      new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              data: [20, 10],
            },
          ],
          labels: ["a", "b"],
        },
      });
    };
    chart();
  },
};
</script>

<style scoped lang="scss">

</style>
