<template>
  <div class="container" id="display">
    <h3>{{ input }}</h3>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {
    input: "String",
  },
};
</script>

<style>
#display {
  height: fit-content;
  min-height: auto;
  text-align: end;
}
</style>
