import { GluegunToolbox } from 'gluegun'
import { userService } from '../services/userService'

module.exports = {
  name: 'logout',
  alias: ['lo'],
  description: 'Выход',
  run: async ({ print }: GluegunToolbox) => {
    const { isAuth } = userService
    const auth = await isAuth()

    if (!auth) {
      print.error(`Вы еще не авторизованы!`)
    } else {
      await userService.logout()
      print.info(`Если че, заходи!`)
    }
  }
}
