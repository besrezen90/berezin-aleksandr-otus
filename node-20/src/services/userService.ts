import { deepEqual } from 'fast-equals'
import * as os from 'os'
import { writeAsync, removeAsync, readAsync, exists } from '../helpers/utils'
import { IUser } from '../types'

const USER_CONFIG = `${os.homedir()}/.user-node-20`
const SESSION_CONFIG = `${os.homedir()}/.session-node-20`

export class UserService {
  static saveNewUser = async (user: IUser): Promise<void> => {
    return await writeAsync(USER_CONFIG, JSON.stringify(user))
  }

  static logout = async (): Promise<void> => {
    await removeAsync(SESSION_CONFIG)
  }

  private static createNewSession = async (user: IUser): Promise<void> => {
    return await writeAsync(SESSION_CONFIG, JSON.stringify(user))
  }

  static readUser = async (): Promise<IUser | false> => {
    return (
      (await exists(USER_CONFIG)) &&
      JSON.parse(((await readAsync(USER_CONFIG)) as any) as string)
    )
  }

  private static readSession = async (): Promise<IUser | false> => {
    return (
      (await exists(SESSION_CONFIG)) &&
      JSON.parse(((await readAsync(SESSION_CONFIG)) as any) as string)
    )
  }

  static login = async (newUser: IUser) => {
    const oldUser = await UserService.readUser()
    if (oldUser) {
      if (deepEqual(newUser, oldUser)) {
        await UserService.createNewSession(newUser)
        return true
      }
      return false
    } else {
      return false
    }
  }

  static isAuth = async () => {
    const user = await UserService.readUser()
    const session = await UserService.readSession()
    if (user && session && deepEqual(user, session)) {
      return true
    } else {
      return false
    }
  }
}
