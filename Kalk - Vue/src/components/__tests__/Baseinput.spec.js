import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Baseinput from "../Form/Baseinput.vue"

describe("Baseinput test suite", () =>{
    it("renders properly", () =>{
          const wrapper = mount(Baseinput)
          expect(wrapper.find('input'));
    })
})

describe("Error message", ()=>{
    it("is invisible when not error", async () =>{
        const wrapper = mount(Baseinput)

        await wrapper.setData({error: undefined})
        expect(wrapper.isVisible()).toBe(true)
        expect(wrapper.find('#error').exists()).toBe(false)
    })
})
