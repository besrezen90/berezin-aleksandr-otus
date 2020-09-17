import { GluegunToolbox } from 'gluegun'
import { IUser } from '../types'

module.exports = {
  name: 'node-20',

  run: async ({
    print,
    prompt,
    signIn,
    signUp,
    userService
  }: GluegunToolbox) => {
    const { readUser, saveUser } = userService

    const user: IUser | false = await readUser()
    print.info(JSON.stringify(user))

    if (user) {
      // Выйти или список todo
    } else {
      const authType = await prompt.ask({
        type: 'select',
        name: 'value',
        message: 'Войти или зарегистрироваться?',
        choices: ['Вход', 'Регистрация']
      })

      if (authType.value === 'Вход') {
        await signIn(saveUser)
      } else {
        await signUp()
      }
    }

    print.info('Приехали')
  }
}
