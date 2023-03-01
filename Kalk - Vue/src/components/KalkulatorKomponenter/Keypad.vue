<template>
  <div class="container">
    <div id="numbers">
      <Numberbtn
        :key="n"
        v-for="n in numbers"
        @input="updateInput"
        :number="n"
      />
    </div>
    <div id="operators">
      <Numberbtn
        :key="operator"
        v-for="operator in operators"
        @input="updateInput"
        :number="operator"
      />
    </div>
    <div id="commands">
      <Commandbtn
        :key="command"
        v-for="command in commands"
        @clearDisplay="$emit('clearDisplay')"
        @calculate="$emit('calculate')"
        @ANS="$emit('ANS')"
        @DEL="$emit('DEL')"
        @comma="$emit('comma')"
        :command="command"
      />
    </div>
  </div>
</template>
<script>
import Commandbtn from "./Commandbtn.vue";
import Numberbtn from "./Numberbtn.vue";

export default {
  name: "Keypad",
  props: {
    numbers: Array,
    operators: Array,
    commands: Array,
  },
  components: {
    Numberbtn,
    Commandbtn,
  },

  methods: {
    updateInput(input) {
      this.$emit("input", input);
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
}

button {
  width: auto;
}
#numbers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.zero {
  grid-column: 1/3;
}
</style>
