import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { UserService } from '../services/userService'
import { IUser } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  toolbox.signIn = async () => {
    print.info('Login')
    const candidate: IUser = await prompt.ask([
      {
        type: 'input',
        name: 'login',
        message: 'Enter a login',
        result: (value: string) => value.trim(),
        validate: Validator.validateString('login cannot be empty')
      },
      {
        type: 'password',
        name: 'password',
        message: 'Enter a password',
        validate: Validator.validateString('Password cannot be empty')
      }
    ])

    return await UserService.login(candidate)
  }
}
