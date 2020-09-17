import { GluegunToolbox } from 'gluegun'
import { IUser } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  const candidate: IUser & { confirmPassword: string } = {
    login: '',
    password: '',
    confirmPassword: ''
  }

  toolbox.signUp = async () => {
    const newLogin = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите login'
    })

    if (newLogin.key.trim()) {
      candidate.login = newLogin.key.trim()
    } else {
      print.error('login не может быть пустым')
      return
    }

    const newPassword = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите password'
    })

    if (newPassword.key.trim()) {
      candidate.password = newPassword.key.trim()
    } else {
      print.error('password не может быть пустым')
      return
    }

    const newConfirmPassword = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Повтортите password'
    })

    if (newConfirmPassword.key.trim()) {
      candidate.confirmPassword = newConfirmPassword.key.trim()
    } else {
      print.error('password не может быть пустым')
      return
    }

    const { login, password, confirmPassword } = candidate

    if (login && password && confirmPassword && password === confirmPassword) {
      print.info('Поздравляю, вы зарегистрированы')
      toolbox.isAuth === true
    } else {
      print.error('Что-то пошло не так, попробуйте еще раз')
      return
    }
  }
}
