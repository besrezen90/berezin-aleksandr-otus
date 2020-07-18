const readFolder = require("./folders-reader");
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

const testFolder = {
  name: "dir",
  items: [
    {
      name: "empty-dir",
      items: [
        {
          name: "some.png",
        },
      ],
    },
    { name: "some-file.txt" },
  ],
};

describe("readFolder", () => {
  it("should be returned value equals testFolder", async () => {
    const folder = await readFolder("path/to/fake/", "dir");
    expect(folder).toEqual(testFolder);
  });
});
