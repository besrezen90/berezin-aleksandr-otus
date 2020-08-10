const readFolder = require("./folders-reader");
const outputFoldersInConsole = require("./folders-creator");
const mock = require("mock-fs");

beforeEach(() => {
  mock({
    "path/to/fake/dir": {
      "empty-dir": {
        "some.png": Buffer.from([8, 6, 7, 5, 3, 0, 9]),
      },
      "some-file.txt": "file content here",
    },
  });
});

afterEach(() => {
  mock.restore();
});

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
};

describe("outputFoldersInConsole", () => {
  it("should be called 4 times", async () => {
    const folders = await readFolder("path/to/fake/", "dir");
    outputFoldersInConsole(folders, false);
    expect(global.console.log).toHaveBeenCalledTimes(4);
  });
});
