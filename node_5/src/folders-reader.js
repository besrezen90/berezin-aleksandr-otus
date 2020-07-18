const path = require("path");
const argv = require("yargs").alias("d", "depth").argv;
const { reader, isFileDirectory } = require("./utils.js");

const DEPTH_LEVEL = Array.isArray(argv.depth) ? argv.depth[argv.depth.length - 1] : argv.depth;

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

module.exports = readFolder;
