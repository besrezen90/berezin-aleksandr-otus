import { GluegunToolbox } from 'gluegun'
import { checkAuth } from '../../helpers/checkAuth'
import { tableGenerator } from '../../helpers/table'
import { MoviesService } from '../../services/moviesService'

module.exports = {
  name: 'movies',
  alias: ['mv'],
  description: 'List of saved movies',

  run: async ({ print }: GluegunToolbox) => {
    await checkAuth()

    const movies = await MoviesService.getAll()

    print.success(tableGenerator(movies))
  }
}
