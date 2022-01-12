const solution = require("./reversed_string");

describe("Test reverse function", () => {
  it("Test Hello", () => {
    const result = solution("Hello");

    expect(result).toStrictEqual("olleH");
  });

  it("Test amazing", () => {
    const result = solution("amazing");

    expect(result).toStrictEqual("gnizama");
  });
});
