import { GluegunToolbox } from 'gluegun'
import { checkAuth } from '../../helpers/checkAuth'
import { tableGenerator } from '../../helpers/table'
import { MoviesService } from '../../services/moviesService'

module.exports = {
  name: 'id',
  alias: ['i'],
  description: 'Find a movie by id <id>',

  run: async ({ print, parameters }: GluegunToolbox) => {
    const id = parameters.argv[parameters.argv.length - 1]
    await checkAuth()
    const movie = await MoviesService.findById(id)
    const table = tableGenerator(movie)
    print.success(table)
  }
}
