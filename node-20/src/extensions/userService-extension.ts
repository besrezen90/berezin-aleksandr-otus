import { GluegunToolbox } from 'gluegun'

import { IUser } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { filesystem } = toolbox

  const USER_CONFIG = `${filesystem.homedir()}/.user`

  async function saveUser(user: IUser): Promise<void> {
    return filesystem.writeAsync(USER_CONFIG, JSON.stringify(user))
  }

  async function readUser(): Promise<IUser | false> {
    return (
      filesystem.exists(USER_CONFIG) &&
      JSON.parse(await filesystem.readAsync(USER_CONFIG))
    )
  }

  async function deleteUser() {
    return await filesystem.removeAsync(USER_CONFIG)
  }

  toolbox.userService = { saveUser, readUser, deleteUser }
}
