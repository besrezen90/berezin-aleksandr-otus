import { GluegunToolbox } from 'gluegun'
import { checkAuth } from '../../helpers/checkAuth'
import { MoviesService } from '../../services/moviesService'

module.exports = {
  name: 'update',
  alias: ['u'],
  description: 'Update movie by id <id>',

  run: async ({ print, movieAdd, parameters }: GluegunToolbox) => {
    const id = parameters.argv[parameters.argv.length - 1]
    if (!id) {
      print.error("id can't be empty")
      process.exit(1)
    }
    await checkAuth()
    const movie = await MoviesService.findById(id)

    if (!movie.length) {
      print.error('No movies were found for the specified id')
      process.exit(1)
    }

    await movieAdd(movie[0])
    print.success('Success!')
  }
}
