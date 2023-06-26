import service from "../service";
import { describe, it, expect } from "vitest";

describe("login tests", () => {
    it("test login successful", () => {
          let successfulResponse = {
              "data": {
                  "status": "true"
              }
          }
          expect(service.isLoginSuccessful(successfulResponse)).toBe(true);
      });

it("test login fail", () => {
    let response = {
        "data": {
            "status": "false"
        }
    }
    expect(service.isLoginSuccessful(response)).toBe(false);
});

it("test login fail on undefined response", () => {
    let response = undefined
    expect(service.isLoginSuccessful(response)).toBe(false);
});

it("test login fail on null response", () => {
    let response = null
    expect(service.isLoginSuccessful(response)).toBe(false);
});



});

  
