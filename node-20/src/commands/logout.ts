import { GluegunToolbox } from 'gluegun'
import { UserService } from '../services/userService'

module.exports = {
  name: 'logout',
  alias: ['lo'],
  description: 'Logout',
  run: async ({ print }: GluegunToolbox) => {
    const auth = await UserService.isAuth()

    if (!auth) {
      print.error('You are not logged in yet!')
    } else {
      await UserService.logout()
      print.info(`Bye`)
    }
  }
}
