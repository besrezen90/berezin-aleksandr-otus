import { GluegunToolbox } from 'gluegun'
import { UserService } from '../services/userService'

module.exports = {
  name: 'logout',
  alias: ['lo'],
  description: 'Выход',
  run: async ({ print }: GluegunToolbox) => {
    const auth = await UserService.isAuth()

    if (!auth) {
      print.error(`Вы еще не авторизованы!`)
    } else {
      await UserService.logout()
      print.info(`Если че, заходи!`)
    }
  }
}
