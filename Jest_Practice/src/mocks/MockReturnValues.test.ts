test("Mock Test", () => {
  const testMock = jest.fn();
  console.log(testMock());
  // > undefined

  testMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce("x")
    .mockReturnValue(true);
  console.log(testMock(), testMock(), testMock(), testMock());
  // > 10, 'x', true, true
});

test("Mock Test2", () => {
  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => filterTestFn(num));
  console.log(result);
  // > [11]
  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
});
