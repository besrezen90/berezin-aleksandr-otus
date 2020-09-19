import { GluegunToolbox } from 'gluegun'
import { Validator } from '../helpers/validator'
import { MoviesService } from '../services/moviesService'
import { IMovie } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
  const { prompt, print } = toolbox

  const candidate: Omit<IMovie, 'id'> = {
    name: '',
    author: '',
    rate: 0
  }

  toolbox.movieAdd = async () => {
    print.info('Добавление нового фильма')
    const name = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите название',
      validate: Validator.validateString('Название фильма не может быть пустым')
    })

    if (name.key.trim()) {
      candidate.name = name.key.trim()
    }

    const author = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'Введите автора фильма'
    })

    if (author.key.trim()) {
      candidate.author = author.key.trim()
    }

    const rate = await prompt.ask({
      type: 'numeral',
      name: 'key',
      message: 'Введите личный рейтинг фильма',
      min: 0,
      max: 10
    })

    if (rate.key) {
      candidate.rate = +rate.key
    }

    return await MoviesService.add(candidate)
  }
}
