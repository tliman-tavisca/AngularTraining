// In this code, .toBe(4) is the matcher. When Jest runs,
// it tracks all the failing matchers so that it can print out nice error messages for you.
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

//toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:

//If you want to check the value of an object, use toEqual instead:
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
