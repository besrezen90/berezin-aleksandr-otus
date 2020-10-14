import * as os from 'os'
import { v4 as uuidv4 } from 'uuid'
import { writeAsync, readAsync, exists } from '../helpers/utils'
import { IMovie } from '../types'

const MOVIES_CONFIG = `${os.homedir()}/.movies-node-20`

export class MoviesService {
  static createNewCollection = async () => {
    return await writeAsync(MOVIES_CONFIG, JSON.stringify([]))
  }

  static hasCollection = async () => {
    if (!(await exists(MOVIES_CONFIG))) {
      return await MoviesService.createNewCollection()
    }
  }

  static getAll = async () => {
    await MoviesService.hasCollection()
    const movies: IMovie[] = JSON.parse((await readAsync(MOVIES_CONFIG)) as any)
    return movies
  }

  static add = async ({ name, rate, author }: Omit<IMovie, 'id'>) => {
    const movies = await MoviesService.getAll()
    movies.push({ name, rate, author, id: uuidv4() })
    await writeAsync(MOVIES_CONFIG, JSON.stringify(movies))
  }

  static delete = async (id: string) => {
    const movies = await MoviesService.getAll()
    const newMovies = movies.filter(movie => movie.id !== id)
    await writeAsync(MOVIES_CONFIG, JSON.stringify(newMovies))
  }

  static findById = async (id: string): Promise<IMovie[] | null> => {
    const movies = await MoviesService.getAll()
    const movie = movies.find(el => el.id === id)
    return movie ? [movie] : []
  }

  static update = async (updateMovie: IMovie) => {
    const { id } = updateMovie
    const movies = await MoviesService.getAll()
    const movieIdx = movies.findIndex(el => el.id === id)
    if (movieIdx !== -1) {
      movies[movieIdx] = updateMovie
      await writeAsync(MOVIES_CONFIG, JSON.stringify(movies))
      return true
    } else {
      return false
    }
  }
}
