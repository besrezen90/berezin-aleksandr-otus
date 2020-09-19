import { GluegunToolbox } from 'gluegun'
import { userService } from '../services/userService'

module.exports = {
  name: 'login',
  alias: ['li'],
  description: 'Вход',

  run: async ({ print, signIn, signUp }: GluegunToolbox) => {
    const { isAuth, readUser } = userService

    const auth = await isAuth()
    const user = await readUser()

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
