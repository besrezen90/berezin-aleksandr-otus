import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { MoviesService } from '../services/moviesService'
import { IMovie } from '../types'

const EMPTY_MOVIE = {
  id: '',
  name: '',
  author: '',
  rate: 0
}

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  toolbox.movieAdd = async (movie: IMovie = EMPTY_MOVIE) => {
    const { id, ...oldFields } = movie
    print.info('Создание/Редактирование фильма')
    const candidate: Omit<IMovie, 'id'> = await prompt.ask([
      {
        type: 'input',
        name: 'name',
        message: 'Введите название',
        result: value => value.trim(),
        validate: Validator.validateString(
          'Название фильма не может быть пустым'
        ),
        initial: oldFields.name
      },
      {
        type: 'input',
        name: 'author',
        message: 'Введите автора фильма',
        initial: oldFields.author,
        result: value => value.trim()
      },
      {
        type: 'numeral',
        name: 'rate',
        message: 'Введите личный рейтинг фильма',
        min: 0,
        max: 10,
        initial: oldFields.rate,
        result: (value: string) => +value as any
      }
    ])

    return (await id)
      ? MoviesService.update({ id, ...candidate })
      : MoviesService.add(candidate)
  }
}
