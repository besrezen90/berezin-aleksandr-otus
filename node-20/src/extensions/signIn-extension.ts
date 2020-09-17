import { GluegunToolbox } from 'gluegun'
import { deepEqual } from 'fast-equals'
import { IUser } from '../types'

const TEST_USER: IUser = {
  login: 'test',
  password: 'test'
}

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  const candidate: IUser = {
    login: '',
    password: ''
  }

  toolbox.signIn = async (saveUser: (user: IUser) => Promise<void>) => {
    const login = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите login',
      validate: value => {
        if (!value.trim()) {
          return 'login не может быть пустым'
        }
        return true
      }
    })

    if (login.key.trim()) {
      candidate.login = login.key.trim()
    }

    const password = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите password',
      validate: value => {
        if (!value.trim()) {
          return 'password не может быть пустым'
        }
        return true
      }
    })

    if (password.key.trim()) {
      candidate.password = password.key.trim()
    }

    if (deepEqual(TEST_USER, candidate)) {
      // TODO: проверим наличие пользователя в БД
      print.info(`${candidate.login}, добро пожаловать!`)

      await saveUser(candidate)
    } else {
      print.error('Неверное сочетание login и password')
    }
    return
  }
}
