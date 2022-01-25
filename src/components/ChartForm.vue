<template>
  <div class="form-container">
    <RangeSlider
      :min-value="1500"
      :max-value="15000"
      :value="3500"
      :step-value="500"
      range-name="Tooling cost"
      @range-input="updateRangeValue"
    />
    <RangeSlider
      :min-value="0.1"
      :max-value="30"
      :value="0.65"
      :step-value="0.05"
      range-name="Injection molding part cost"
      @range-input="updateRangeValue"
    />
    <RangeSlider
      :min-value="0.1"
      :max-value="100"
      :value="15"
      :step-value="0.1"
      range-name="3D printed part cost"
      @range-input="updateRangeValue"
    />
    <RangeSlider
      :min-value="1000"
      :max-value="100000"
      :value="25000"
      :step-value="500"
      :isCurrency="false"
      range-name="Injection molded parts per month"
      @range-input="updateRangeValue"
    />
    <RangeSlider
      :min-value="1"
      :max-value="36"
      :value="12"
      :step-value="1"
      :isCurrency="false"
      range-name="Injection molding running time (months)"
      @range-input="updateRangeValue"
    />
  </div>
</template>

<script>
import RangeSlider from "@/components/RangeSlider.vue";
export default {
  components: {
    RangeSlider,
  },
  emits: ["chartDataChange"],
  data() {
    return {
      rangeSlidersValues: [],
    };
  },
  methods: {
    updateRangeValue(data) {
      const { rangeName, sliderValue } = data;

      //find object index in array
      const index = this.rangeSlidersValues.findIndex(
        (obj) => obj.rangeName == rangeName
      );

      //replace value in object

      if (index !== -1) {
        this.rangeSlidersValues[index].sliderValue = sliderValue;
      } else {
        //if object doesn't exists, then push new object.
        this.rangeSlidersValues.push(data);
      }

      //emit information to BreakEven component
      this.$emit("chartDataChange", this.rangeSlidersValues);
    },
  },
};
</script>

<style scoped lang="scss">
.form-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  margin: 20px auto;
}
</style>
