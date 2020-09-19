import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { UserService } from '../services/userService'
import { IUser } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  const candidate: IUser & { confirmPassword: string } = {
    login: '',
    password: '',
    confirmPassword: ''
  }

  toolbox.signUp = async () => {
    print.info('Регистрация')
    const newLogin = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите login',
      validate: Validator.validateString('login не может быть пустым')
    })

    if (newLogin.key.trim()) {
      candidate.login = newLogin.key.trim()
    }

    const newPassword = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите password',
      validate: Validator.validateString('Password не может быть пустым')
    })

    if (newPassword.key.trim()) {
      candidate.password = newPassword.key.trim()
    }

    const newConfirmPassword = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Повтортите password',
      validate: Validator.validateConfirmPassword(candidate.password)
    })

    if (newConfirmPassword.key.trim()) {
      candidate.confirmPassword = newConfirmPassword.key.trim()
    }

    const { login, password } = candidate

    await UserService.saveNewUser({ login, password })
    print.info('Поздравляю, вы зарегистрированы! Выполните вход')

    return
  }
}
