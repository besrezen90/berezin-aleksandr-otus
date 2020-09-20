import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { UserService } from '../services/userService'
import { IUser } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  toolbox.signIn = async () => {
    print.info('Вход')
    const candidate: IUser = await prompt.ask([
      {
        type: 'input',
        name: 'login',
        message: 'Введите login',
        result: (value: string) => value.trim(),
        validate: Validator.validateString('login не может быть пустым')
      },
      {
        type: 'password',
        name: 'password',
        message: 'Введите password',
        validate: Validator.validateString('Password не может быть пустым')
      }
    ])

    return await UserService.login(candidate)
  }
}
