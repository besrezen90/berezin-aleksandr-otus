import { GluegunToolbox } from 'gluegun'
import { UserService } from '../services/userService'

module.exports = {
  name: 'login',
  alias: ['li'],
  description: 'Login',

  run: async ({ print, signIn, signUp }: GluegunToolbox) => {
    const auth = await UserService.isAuth()
    const user = await UserService.readUser()

    if (!auth) {
      if (!user) {
        await signUp()
      } else {
        const auth = await signIn()
        auth
          ? print.success('Successful login!')
          : print.error('Invalid username or password')
      }
    } else {
      print.info(`You are already logged in!`)
    }
  }
}
