// export types

export interface IUser {
  login: string
  password: string
}

export interface IMovie {
  id: string
  name: string
  author?: string
  rate: number // от 0 до 10
}
