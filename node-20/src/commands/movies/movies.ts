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

    print.info(tableGenerator(movies))
  }
}

// TODO:
// 1. Переделать findById чтобы возвращал массив из одного элемента или пустой массив - так будет проще выводить таблицу
// 2. Реализовать delete update find
// 3. Запилить сортировку для таблицы
// 4. В зависимости от времени замутить прикольный степер при создании / редактировании чего-либо
