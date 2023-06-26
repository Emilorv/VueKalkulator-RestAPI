<template>
  <button @click="onClick()" class="btn">{{ number }}</button>
</template>
<script>
export default {
  name: "Numberbutton",
  props: {
    number: "string",
  },
  methods: {
    onClick() {
      this.$emit("input", this.number);
    },
  },
};
</script>
<style>
button {
  width: fit-content;
  display: inline-block;
}
</style>
