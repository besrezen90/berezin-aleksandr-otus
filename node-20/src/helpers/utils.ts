import * as fs from 'fs'
import * as util from 'util'

export const writeAsync = util.promisify(fs.writeFile)
export const readAsync = util.promisify(fs.readFile)
export const removeAsync = util.promisify(fs.unlink)
export const exists = util.promisify(fs.exists)
