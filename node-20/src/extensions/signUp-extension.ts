import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { UserService } from '../services/userService'
import { IUser } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  toolbox.signUp = async () => {
    print.info('Registration')
    const candidate: IUser = await prompt.ask([
      {
        type: 'input',
        name: 'login',
        message: 'Enter a login',
        result: (value: string) => value.trim(),
        validate: Validator.validateString('Login cannot be empty')
      },
      {
        type: 'password',
        name: 'password',
        message: 'Enter a password',
        validate: Validator.validateString('Password cannot be empty')
      }
    ])

    await prompt.ask({
      type: 'password',
      name: 'key',
      message: 'Repeat password',
      validate: Validator.validateConfirmPassword(candidate.password)
    })

    const { login, password } = candidate

    await UserService.saveNewUser({ login, password })
    print.info('Congratulations, you are registered! Log in')

    return
  }
}
