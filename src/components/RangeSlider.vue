<template>
  <!-- 
  This range component is meant to replace old text inputs
  for the break-even calculator display using chart.js.
-->
  <div>
    <label :for="rangeName"> {{ rangeName }} </label>
    <input
      class="range-slider"
      type="range"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
      :name="rangeName"
      v-model="sliderValue"
      @change="sendValue"
    />
    <span v-show="showSpan" @click="switchInput">
      {{ isCurrency ? currencyValue : numberValue }}</span>
    <!-- Test section: link input with range slider -->
    <input
      class="number-input"
      type="number"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
      v-show="showInput"
      v-model="sliderValue"
      @change="switchInput(); sendValue()"
      @mouseout="switchInput"
      @focusout="switchInput"
    />
    <!-- Test section: link input with range slider -->
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    minValue: Number,
    maxValue: Number,
    value: Number,
    stepValue: Number,
    rangeName: String,
    isCurrency: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  emits: ['rangeInput'],
  data() {
    return {
      sliderValue: this.value,
      showSpan: true,
      showInput: false
    }
  },
  methods: {
    switchInput() {
      this.showSpan = !this.showSpan
      this.showInput = !this.showInput
    },
    sendValue() {
      // If the value from the input is smaller than min or greater than max,
      // we set it to the min or max value.

      if (this.sliderValue < this.minValue) {
        this.sliderValue = this.minValue
      }
      if (this.sliderValue > this.maxValue) {
        this.sliderValue = this.maxValue
      }

      const data = new Object()
      data.rangeId = this.id
      data.rangeName = this.rangeName
      data.rangeValue = this.sliderValue

      this.$emit('rangeInput', data)
    }
    // changeSliderColor() {
    //   const slider = document.querySelector(".range-slider");
    //   slider.oninput = function () {
    //     let value = ((this.min - this.value) / (this.max - this.min)) * -100;
    //     slider.style.background = `linear-gradient(to right, #3b82f6 ${value}%, #fff ${value}%, white 100%)`;
    //   };
    // },
  },
  computed: {
    currencyValue() {
      return new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
      }).format(this.sliderValue)
    },
    numberValue() {
      return new Intl.NumberFormat('en-EN').format(this.sliderValue)
    }
  },
  created() {
    this.sendValue()
  }
}
</script>

<style scoped lang="scss">
div {
  display: grid;
  grid: 1fr 1fr / 1fr 1fr 1fr;
  align-items: center;
  margin: 10px;

  label {
    grid-column-end: span 3;
    justify-self: start;
    margin-bottom: 10px;
    font-size: 0.75rem;
    text-align: left;
    font-weight: bold;
  }

  .range-slider {
    grid-column-end: span 2;
    // -webkit-appearance: none; /* Override default CSS styles */
    // appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    border: 1px solid #acacac;
    opacity: 0.7;
    -webkit-transition: 0.5s;
    transition: opacity 0.5s;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }

    &::-webkit-slider-thumb {
      background-color: #3b82f6;
    }
  }

  .number-input {
    width: auto;
    margin-left: 10px;
    padding: 4px;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  span {
    justify-self: start;
    margin-left: 10px;
    padding: 4px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.6);
  }
}
</style>
