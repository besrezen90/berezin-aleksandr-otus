const path = require("path");
const argv = require("yargs").alias("d", "depth").alias("p", "path").argv;
const { outputFoldersInConsole } = require("../foldersCreator");
const { reader, isFileDirectory } = require("../utils");

const DEPTH_LEVEL = Array.isArray(argv.depth) ? argv.depth[argv.depth.length - 1] : argv.depth;
const DIR_PATH = Array.isArray(argv.path) ? argv.path[argv.path.length - 1] : argv.path;

const readFolder = async (parentPath, name, depthLevel = 0) => {
  const folder = { name, items: [] };
  const folderPath = path.join(parentPath, name);

  if (DEPTH_LEVEL === depthLevel) return folder;

  const list = await reader(folderPath);

  for (const file of list) {
    const filePath = path.join(folderPath, file);
    const isDir = await isFileDirectory(filePath);
    if (isDir) {
      const items = await readFolder(folderPath, file, depthLevel + 1);
      folder.items = [items, ...folder.items];
    } else {
      folder.items.push({ name: file });
    }
  }

  return folder;
};

const tree = async function () {
  if (!DIR_PATH) {
    const err = new Error("Input path to the directory form the absolute path");
    throw err;
  }

  const folders = await readFolder("/", DIR_PATH);
  outputFoldersInConsole(folders);
  process.exit(0);
};

module.exports = {
  tree,
};
