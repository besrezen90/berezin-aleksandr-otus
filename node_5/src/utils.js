const util = require("util");
const fs = require("fs");

const reader = util.promisify(fs.readdir);
const fileStat = util.promisify(fs.stat);

const isFileDirectory = async (path) => {
  try {
    const stats = await fileStat(path);
    return stats.isDirectory();
  } catch (error) {
    throw new Error("Path is not correct");
  }
};

const createPrefix = (isLastFolderElement, parentPrefix) => {
  if (!parentPrefix) {
    return isLastFolderElement ? "└──" : "|──";
  } else {
    const regex = /─|└/gi;
    const newPrefix = parentPrefix.replace(regex, " ");
    return `${newPrefix}${isLastFolderElement ? "└──" : "|──"}`;
  }
};

module.exports = {
  reader,
  isFileDirectory,
  createPrefix,
};
