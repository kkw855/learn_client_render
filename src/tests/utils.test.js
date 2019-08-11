import add from "../utils";

describe("add()", () => {
  test("returns 8 for 3 + 5", () => {
    expect(add(3, 5)).toEqual(8);
  });
});