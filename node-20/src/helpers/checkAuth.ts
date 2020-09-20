import { UserService } from '../services/userService'
import { print } from 'gluegun'

export const checkAuth = async () => {
  const isAuth = await UserService.isAuth()
  if (!isAuth) {
    print.error('You are not logged in!')
    process.exit(1)
  }
}
