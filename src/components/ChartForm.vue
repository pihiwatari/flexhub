<template>
  <form action="">
    <label for="tooling">Tooling</label>
    <input
      type="range"
      min="1500"
      max="15000"
      step="500"
      name="tooling"
      v-model="toolingValue"
    />
    <span> {{ toolingValue }} </span>
  </form>
</template>

<script>
export default {
  data() {
    return {
      toolingValue: 5000,
    };
  },
};
</script>

<style scoped lang="scss"></style>
