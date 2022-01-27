function fetchDataAsAsync() {
  return "peanut butter";
}

test("the data is peanut butter", async () => {
  const data = await fetchDataAsAsync();
  expect(data).toBe("peanut butter");
});

test.skip("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchDataAsAsync();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
