import { GluegunToolbox } from 'gluegun'
import { checkAuth } from '../../helpers/checkAuth'

module.exports = {
  name: 'add',
  alias: ['a'],
  description: 'Add a new movie',

  run: async ({ print, movieAdd }: GluegunToolbox) => {
    await checkAuth()
    await movieAdd()
    print.success('Success!')
  }
}
