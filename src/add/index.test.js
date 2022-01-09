const add = require("./index");

describe("Test add function", () => {
  it("Test 1+1", () => {
    const result = add(1, 1);

    expect(result).toEqual(2);
    expect(result).toBeGreaterThan(0);
  });

  it("Test 2+3", () => {
    const result = add(2, 3);

    expect(result).toEqual(5);
  });

  it("Test -1+2", () => {
    const result = add(-1, 2);

    expect(result).toEqual(1);
  });
});
