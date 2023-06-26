import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Kalkulator from "../Kalkulator.vue"

describe("Kalkulator test suite", () =>{
    it("renders properly", () =>{
          const wrapper = mount(Kalkulator)
          console.log(wrapper.html());
          expect(wrapper.text()).contain("Kalkulator!");
    })
})