<template>
  <div class="container">
    <Header />
    <Display :input="display" />
    <Keypad
      @input="updateInput"
      @clearDisplay="clearDisplay"
      @calculate="calculate"
      @DEL="delChar"
      @ANS="answer"
      @comma="comma"
      :numbers="numbers"
      :operators="operators"
      :commands="commands"
    />
    <Log :logs="logs" />
  </div>
</template>

<script>
import Display from "../components/KalkulatorKomponenter/Display.vue";
import Header from "../components/KalkulatorKomponenter/Header.vue";
import Keypad from "../components/KalkulatorKomponenter/Keypad.vue";
import Log from "../components/KalkulatorKomponenter/Log.vue";
import api from "@/api/api.js";
export default {
  name: "Kalkulator",
  components: {
    Header,
    Display,
    Keypad,
    Log,
  },
  data() {
    return {
      input: "",
      regnestykke: 0,
      display: "",
      logs: [],
      ans: 0,
      operatorboolean: false,
      commaboolean: true,
      commabooleanReady: false,
    };
  },
  methods: {
    updateInput(number) {
      let lastChar = this.input.substring(this.input.length - 1);
      console.log(lastChar);
      if (this.operators.includes(lastChar)) {
        this.operatorboolean = false;
        this.commaboolean = true;
      } else {
        this.operatorboolean = true;
      }
      if (lastChar == ".") {
        this.operatorboolean = false;
      }
      if (this.input == "0" && this.operators.includes(number)) {
        this.operatorboolean = false;
      }
      if (!(this.operators.includes(number) && !this.operatorboolean)) {
        if (this.input == "0") {
          this.input = number;
          this.display = number;
        } else {
          this.input += number;
          this.display += number;
        }
      }
    },
    clearDisplay() {
      this.input = "0";
      this.display = "0";
      this.commaboolean = true;
      this.operatorboolean = false;
    },
    async calculate() {
      let lastChar = this.input.substring(this.input.length - 1);
      if (lastChar != "." || !this.operators.includes(lastChar)) {
        if (this.input != 0) {
          this.regnestykke = this.input;
          try {
            let svar = await api.calculate(this.regnestykke);
            svar = svar.data;

            this.display = svar;
            this.logs.push(this.regnestykke + " = " + this.display);
            this.ans = svar;
            this.input = "0";
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            let svar = await api.calculate(this.ans + "+" + this.regnestykke);
            svar = svar.data;
            this.display = svar;
            this.ans = this.display;
            this.logs.push("ANS + " + this.regnestykke + " = " + this.display);
          } catch (error) {
            console.log(error);
          }
        }
        this.operatorboolean = false;
      }
    },
    answer() {
      if (this.ans != 0) {
        if (this.input == "0") {
          this.input = "" + this.ans;
          this.display = "" + this.input;
        } else {
          this.input += "" + this.ans;
          this.display = "" + this.input;
        }
      }
    },
    delChar() {
      if (this.input.length > 0) {
        let lastChar = this.input.substring(this.input.length - 1);
        if (lastChar == ".") {
          this.commaboolean = true;
        }
        this.input = this.input.slice(0, -1);
        this.display = this.input;
      }
    },
    comma() {
      let lastChar = this.input.substring(this.input.length - 1);
      if (lastChar != "." || !this.operators.includes(lastChar)) {
        this.commabooleanReady = true;
      }
      if (this.commaboolean && this.commabooleanReady) {
        this.input += ".";
        this.display += ".";
        this.commaboolean = false;
        this.commabooleanReady = false;
      }
    },
  },
  created() {
    (this.input = "0"),
      (this.display = "0"),
      (this.numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]),
      (this.operators = ["+", "-", "*", "/"]),
      (this.commands = ["C", "ANS", "DEL", ".", "="]),
      (this.logs = []);
  },
};
</script>
