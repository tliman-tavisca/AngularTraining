import { FileSizePipe } from "./file-size.pipe";

describe("FileSizePipe", () => {
  describe("Isolate FileSizePipe", () => {
    const pipe = new FileSizePipe();
    it("should convert bytes to megabytes", () => {
      expect(pipe.transform(123456789)).toBe("117.74MB");
      expect(pipe.transform(987654321)).toBe("941.90MB");
    });

    it("should use the default extension when not supplied", () => {
      expect(pipe.transform(123456789)).toBe("117.74MB");
      expect(pipe.transform(987654321)).toBe("941.90MB");
    });

    it("should override extension when supplied", () => {
      expect(pipe.transform(123456789, "myext")).toBe("117.74myext");
      expect(pipe.transform(987654321, "Mega")).toBe("941.90Mega");
    });
  });
});
