<template>
  <button @click="onClick()" class="btn">{{ command }}</button>
</template>
<script>
export default {
  name: "Commandbtn",
  props: {
    command: "string",
  },
  methods: {
    onClick() {
      if (this.command == "C") {
        this.$emit("clearDisplay");
      }
      if (this.command == "=") {
        this.$emit("calculate");
      }
      if (this.command == "ANS") {
        this.$emit("ANS");
      }
      if (this.command == "DEL") {
        this.$emit("DEL");
      }
      if (this.command == ".") {
        this.$emit("comma");
      }
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
