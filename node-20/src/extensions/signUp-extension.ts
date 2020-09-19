import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { IUser } from '../types'

// TODO: Добавить валидацию полей и сохранение пользователя в бд
module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  const candidate: IUser & { confirmPassword: string } = {
    login: '',
    password: '',
    confirmPassword: ''
  }

  toolbox.signUp = async (saveUser: (user: IUser) => Promise<void>) => {
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

    await saveUser({ login, password })
    print.info('Поздравляю, вы зарегистрированы')

    return
  }
}
