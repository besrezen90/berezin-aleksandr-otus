const { createPrefix, isFileDirectory } = require("./utils");

const mock = require("mock-fs");

beforeEach(() => {
  mock({
    "path/to/fake/dir": {
      "some-file.txt": "file content here",
      "empty-dir": {
        "some.png": Buffer.from([8, 6, 7, 5, 3, 0, 9]),
      },
    },
  });
});

afterEach(() => {
  mock.restore();
});

describe("Utils", () => {
  describe("createPrefix", () => {
    it("should createPrefix for the folder element", () => {
      const log = createPrefix(false);
      expect(log).toBe("|──");
    });

    it("should createPrefix for the single or last folder element", () => {
      const log = createPrefix(true);
      expect(log).toBe("└──");
    });

    it("should createPrefix for the single or last folder element (depth = 3)", () => {
      const log = createPrefix(true, "|      ");
      expect(log).toBe("|      └──");
    });

    it("should createPrefix for the folder element (depth = 3)", () => {
      const log = createPrefix(false, "|      ");
      expect(log).toBe("|      |──");
    });
  });

  describe("isFileDirectory", () => {
    it("should be check element 'Folder'", async () => {
      const isFolder = await isFileDirectory("path/to/fake/dir");
      expect(isFolder).toBe(true);
    });

    it("should be check element 'File'", async () => {
      const isFolder = await isFileDirectory("path/to/fake/dir/some-file.txt");
      expect(isFolder).toBe(false);
    });
  });
});
