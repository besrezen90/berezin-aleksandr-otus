import { GluegunToolbox } from 'gluegun'
import { checkAuth } from '../../helpers/checkAuth'
import { tableGenerator } from '../../helpers/table'
import { MoviesService } from '../../services/moviesService'

module.exports = {
  name: 'delete',
  alias: ['d'],
  description: 'Delete a movie by id <id>',

  run: async ({ print, parameters }: GluegunToolbox) => {
    const id = parameters.argv[parameters.argv.length - 1]
    await checkAuth()
    await MoviesService.delete(id)
    const movies = await MoviesService.getAll()
    const table = tableGenerator(movies)
    print.success(table)
  }
}
