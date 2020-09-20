import { GluegunToolbox } from 'gluegun'
import { checkAuth } from '../../helpers/checkAuth'

module.exports = {
  name: 'add',
  alias: ['a'],
  description: 'Добавить новый фильм',

  run: async ({ print, movieAdd }: GluegunToolbox) => {
    await checkAuth()
    await movieAdd()
    print.success('Фильм добавлен')
  }
}
