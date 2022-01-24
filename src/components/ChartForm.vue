<template>
  <form action="">
    <RangeSlider
      :min-value="1500"
      :max-value="15000"
      :value="3500"
      :step-value="500"
      range-name="Tooling cost"
    />
    <RangeSlider
      :min-value="0.1"
      :max-value="30"
      :value="0.65"
      :step-value="0.05"
      range-name="Injection molding part cost"
    />
    <RangeSlider
      :min-value="0.1"
      :max-value="100"
      :value="15"
      :step-value="0.1"
      range-name="3D printed part cost"
    />
    <RangeSlider
      :min-value="1000"
      :max-value="100000"
      :value="25000"
      :step-value="500"
      :isCurrency="false"
      range-name="Injection molded parts per month"
    />
    <RangeSlider
      :min-value="1"
      :max-value="36"
      :value="12"
      :step-value="1"
      :isCurrency="false"
      range-name="Injection molding running time (months)"
    />
  </form>
</template>

<script>
import RangeSlider from "@/components/RangeSlider.vue";
export default {
  components: {
    RangeSlider,
  },
};
</script>

<style scoped lang="scss">
form {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  margin: 20px auto;
}
</style>
