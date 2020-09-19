import { deepEqual } from 'fast-equals'
import * as fs from 'fs'
import * as os from 'os'
import * as util from 'util'
import { IUser } from '../types'

const USER_CONFIG = `${os.homedir()}/.user-node-20`
const SESSION_CONFIG = `${os.homedir()}/.session-node-20`
const writeAsync = util.promisify(fs.writeFile)
const readAsync = util.promisify(fs.readFile)
const removeAsync = util.promisify(fs.unlink)
const exists = util.promisify(fs.exists)

interface IUserService {
  saveNewUser: (user: IUser) => Promise<void>
  logout: () => Promise<void>
  login: (newUser: IUser) => Promise<boolean>
  isAuth: () => Promise<boolean>
}

class UserService implements IUserService {
  saveNewUser = async (user: IUser): Promise<void> => {
    return await writeAsync(USER_CONFIG, JSON.stringify(user))
  }

  logout = async (): Promise<void> => {
    await removeAsync(SESSION_CONFIG)
  }

  private createNewSession = async (user: IUser): Promise<void> => {
    return await writeAsync(SESSION_CONFIG, JSON.stringify(user))
  }

  readUser = async (): Promise<IUser | false> => {
    return (
      (await exists(USER_CONFIG)) &&
      JSON.parse(((await readAsync(USER_CONFIG)) as any) as string)
    )
  }

  private readSession = async (): Promise<IUser | false> => {
    return (
      (await exists(SESSION_CONFIG)) &&
      JSON.parse(((await readAsync(SESSION_CONFIG)) as any) as string)
    )
  }

  login = async (newUser: IUser) => {
    const oldUser = await this.readUser()
    if (oldUser) {
      if (deepEqual(newUser, oldUser)) {
        await this.createNewSession(newUser)
        return true
      }
      return false
    } else {
      return false
    }
  }

  isAuth = async () => {
    const user = await this.readUser()
    const session = await this.readSession()
    if (user && session && deepEqual(user, session)) {
      return true
    } else {
      return false
    }
  }
}

export const userService = new UserService()
