import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Kontaktinfo from "../Kontaktinfo.vue"

describe("Kontaktinfo test suite", () =>{
    it("renders properly", () =>{
          const wrapper = mount(Kontaktinfo)
          console.log(wrapper.html());
          expect(wrapper.text()).contain("Navn");
    })
})
