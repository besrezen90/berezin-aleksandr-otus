const createPrefix = (isLastFolderElement, parentPrefix) => {
  if (!parentPrefix) {
    return isLastFolderElement ? "└──" : "|──";
  } else {
    const regex = /─|└/gi;
    const newPrefix = parentPrefix.replace(regex, " ");
    return `${newPrefix}${isLastFolderElement ? "└──" : "|──"}`;
  }
};

/**
 * @typedef Folders - {
 *  name: string;
 *  items?: Folders[]
 * }
 * @type {object}
 * @property {string} name - name folder.
 * @property {Folders[]} [items] - items in current folder.
 * @param {Folders} obj
 * @param {boolean} [isNotFirstElement] if it is current folder isNotFirstElement = false
 * @param {boolean} [isLastFolderElement] if it is last element in folder isLastFolderElement = true
 * @param {string} [parentPrefix] prefix for last element
 */

const createFolders = function (obj, isNotFirstElement, isLastFolderElement, parentPrefix) {
  const { name, items } = obj;

  let newPrefix;

  if (!isNotFirstElement) {
    console.log(`${name}`);
  } else {
    newPrefix = createPrefix(isLastFolderElement, parentPrefix);
    console.log(`${newPrefix}${name}`);
  }

  if (items && items.length) {
    items.forEach((item, id, parentArray) => {
      createFolders(item, true, !parentArray[id + 1], newPrefix);
    });
  }
};

/**
 * @typedef Folders - {
 *  name: string;
 *  items?: Folders[]
 * }
 * @type {object}
 * @property {string} name - name folder.
 * @property {Folders[]} [items] - items in current folder.
 * @param {Folders} folders
 */

const outputFoldersInConsole = function (folders) {
  createFolders(folders);
};

module.exports = {
  outputFoldersInConsole,
};
