import { IMovie } from '../types'

const Table = require('cli-table')

export const tableGenerator = (movies: IMovie[]): string => {
  if (!movies.length) {
    return 'List is empty'
  }

  const heads: Array<keyof IMovie> = ['id', 'name', 'author', 'rate']

  const table = new Table({
    head: heads
  })

  movies.forEach(movie => {
    const tableRow = []
    for (let i = 0; i < heads.length; i++) {
      tableRow.push(movie[heads[i]] ?? '-')
    }
    table.push(tableRow)
  })

  return table.toString()
}
