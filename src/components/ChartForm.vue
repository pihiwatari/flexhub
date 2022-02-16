<template>
  <div class="form-container">
    <ul v-for="slider in rangeSlidersData" :key="slider.id">
      <RangeSlider
        :id="slider.id"
        :min-value="slider.minValue"
        :max-value="slider.maxValue"
        :value="slider.value"
        :step-value="slider.stepValue"
        :range-name="slider.rangeName"
        :is-currency="slider.isCurrency"
        @range-input="updateRangeValue"
      />
    </ul>
  </div>
</template>

<script>
import RangeSlider from '@/components/RangeSlider.vue'
export default {
  components: {
    RangeSlider
  },
  emits: ['chartDataChange'],
  data() {
    return {
      rangeSlidersData: [
        {
          id: 1,
          minValue: 5000,
          maxValue: 150000,
          value: 50000,
          stepValue: 1000,
          isCurrency: true,
          rangeName: 'Tooling cost'
        },
        {
          id: 2,
          minValue: 0.1,
          maxValue: 30,
          value: 0.65,
          stepValue: 0.05,
          isCurrency: true,
          rangeName: 'Injection molding part cost'
        },
        {
          id: 3,
          minValue: 0.1,
          maxValue: 100,
          value: 1.8,
          stepValue: 0.1,
          isCurrency: true,
          rangeName: '3D printed part cost'
        },
        {
          id: 4,
          minValue: 1000,
          maxValue: 100000,
          value: 10000,
          stepValue: 500,
          isCurrency: false,
          rangeName: 'Injected parts per month'
        },
        {
          id: 5,
          minValue: 1,
          maxValue: 36,
          value: 12,
          stepValue: 1,
          isCurrency: false,
          rangeName: 'Injection molding run duration (months)'
        }
      ],
      rangeSlidersValues: []
    }
  },
  methods: {
    updateRangeValue(data) {
      // Get object from  array
      const index = this.rangeSlidersValues.findIndex(
        (item) => item.rangeId === data.rangeId
      )

      // If the object doesn't exist within the array we push the data objects
      // but, if it exists then we just replace old value with new value
      if (index === -1) {
        this.rangeSlidersValues.push(data)
      } else {
        this.rangeSlidersValues[index].rangeValue = data.rangeValue
      }

      //emit information to BreakEven component
      this.$emit('chartDataChange', this.rangeSlidersValues)
    }
  }
}
</script>

<style scoped lang="scss">
.form-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  margin: 20px auto;
}
</style>
