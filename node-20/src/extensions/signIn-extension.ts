import { GluegunToolbox } from 'gluegun'
import { IUser } from '../types'
import { Validator } from '../helpers/validator'
import { UserService } from '../services/userService'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  const candidate: IUser = {
    login: '',
    password: ''
  }

  toolbox.signIn = async () => {
    print.info('Вход')
    const login = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите login',
      validate: Validator.validateString('login не может быть пустым')
    })

    if (login.key.trim()) {
      candidate.login = login.key.trim()
    }

    const password = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите password',
      validate: Validator.validateString('Password не может быть пустым')
    })

    if (password.key.trim()) {
      candidate.password = password.key.trim()
    }

    return await UserService.login(candidate)
  }
}
