import { GluegunToolbox } from 'gluegun'
import { checkAuth } from '../../helpers/checkAuth'
import { tableGenerator } from '../../helpers/table'
import { MoviesService } from '../../services/moviesService'

module.exports = {
  name: 'movies',
  alias: ['mv'],
  description: 'Список сохраненных фильмов',

  run: async ({ print }: GluegunToolbox) => {
    await checkAuth()

    const movies = await MoviesService.getAll()

    print.success(tableGenerator(movies))
  }
}

// TODO:
// 3. Запилить сортировку для таблицы
// 4. В зависимости от времени замутить прикольный степер при создании / редактировании чего-либо
