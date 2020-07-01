const data = {
  name: "root",
  items: [
    {
      name: "folder_1",
      items: [
        { name: "folder_1_1" },
        { name: "folder_1_2", items: [{ name: "folder_1_2_1", items: [{ name: "folder_1_2_1_1" }] }] },
      ],
    },
    { name: "folder_2", items: [{ name: "folder_2_1" }] },
    { name: "folder_3" },
  ],
};

const createLine = (prefix, name) => {
  console.log(`${prefix}${name}`);
};

const createPrefix = (stackLevel, isLastFolderElement) => {
  const spaces = stackLevel > 1 ? "   ".repeat(stackLevel - 1).slice(0, -1) : "";
  const firstElement = stackLevel >= 2 ? "|" : "";
  const lastElement = isLastFolderElement ? "└──" : "├──";
  return `${firstElement}${spaces}${lastElement}`;
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
 * @param {number} [maxStack]  max stack folders from render
 * @param {number} [stack]  current stack folder
 * @param {boolean} [isLastFolderElement] if it is last element in folder isLastFolderElement = true
 */

const createFolders = (obj, maxStack, stack, isLastFolderElement) => {
  const { name, items } = obj;
  const localStack = stack || 0;

  if (maxStack && maxStack === stack) return;

  if (!localStack) {
    console.log(`${name}`);
  } else {
    createLine(createPrefix(localStack, isLastFolderElement), name);
  }

  if (items && items.length) {
    items.forEach((item, id, parentArray) => {
      createFolders(item, maxStack, localStack + 1, !parentArray[id + 1]);
    });
  }
};

createFolders(data);

module.export = createFolders;
