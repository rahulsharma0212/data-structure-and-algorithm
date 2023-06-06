import { binaryToInt } from "../binaryToInt";

describe("Bitwise", () => {
  it("Should convert binary to integer", () => {
    expect(binaryToInt("101")).toBe(5);
    expect(binaryToInt(101)).toBe(5);
    expect(binaryToInt(100100111000000)).toBe(18880);
  });
});
