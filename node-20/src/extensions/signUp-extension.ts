import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { UserService } from '../services/userService'
import { IUser } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  toolbox.signUp = async () => {
    print.info('Регистрация')
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

    await prompt.ask({
      type: 'password',
      name: 'key',
      message: 'Повтортите password',
      validate: Validator.validateConfirmPassword(candidate.password)
    })

    const { login, password } = candidate

    await UserService.saveNewUser({ login, password })
    print.info('Поздравляю, вы зарегистрированы! Выполните вход')

    return
  }
}
