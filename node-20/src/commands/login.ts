import { GluegunToolbox } from 'gluegun'
import { UserService } from '../services/userService'

module.exports = {
  name: 'login',
  alias: ['li'],
  description: 'Вход',

  run: async ({ print, signIn, signUp }: GluegunToolbox) => {
    const auth = await UserService.isAuth()
    const user = await UserService.readUser()

    if (!auth) {
      if (!user) {
        await signUp()
      } else {
        const auth = await signIn()
        auth
          ? print.info('Успешный вход в систему')
          : print.error('Неверный логин или пароль')
      }
    } else {
      print.info(`Вы уже авторизованы!`)
    }
  }
}
