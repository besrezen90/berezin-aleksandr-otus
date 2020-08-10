#!/usr/bin/env node
const argv = require("yargs").alias("p", "path").argv;
const outputFoldersInConsole = require("./src/folders-creator");
const readFolder = require("./src/folders-reader");

const DIR_PATH = Array.isArray(argv.path) ? argv.path[argv.path.length - 1] : argv.path;

const tree = async function () {
  try {
    if (!DIR_PATH) {
      const err = new Error("Input path to the directory form the absolute path");
      throw err;
    }

    const folders = await readFolder("/", DIR_PATH);
    outputFoldersInConsole(folders);
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

tree();
