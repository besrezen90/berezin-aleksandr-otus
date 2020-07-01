const fs = require("fs");
const path = require("path");
const util = require("util");
const { outputFoldersInConsole } = require("../foldersCreator");

/* 
FIXME: добавить путь из аргументов
добавить ограничение по стеку
сделать bash
написать Readme
доработать | во вложенных папках
*/

const reader = util.promisify(fs.readdir);
const fileStat = util.promisify(fs.stat);

const isFileDirectory = async (path) => {
  try {
    const stats = await fileStat(path);
    return stats.isDirectory();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const readFolder = async (parentPath, name) => {
  const folder = { name, items: [] };
  const folderPath = path.join(parentPath, name);

  const list = await reader(folderPath);

  for (const file of list) {
    const filePath = path.join(folderPath, file);
    const isDir = await isFileDirectory(filePath);
    if (isDir) {
      const items = await readFolder(folderPath, file);
      folder.items = [items, ...folder.items];
    } else {
      folder.items.push({ name: file });
    }
  }

  return folder;
};

const start = async function () {
  const folders = await readFolder("/", "Downloads");
  outputFoldersInConsole(folders);
};

start();
