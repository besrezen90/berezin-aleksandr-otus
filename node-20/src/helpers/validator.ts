export class Validator {
  static validateString = (message: string) => (value: string) => {
    if (!value.trim()) return message
    return true
  }

  static validateConfirmPassword = (oldPassword: string) => (value: string) => {
    if (!value.trim()) return 'Password не может быть пустым'
    if (oldPassword !== value) return 'Введенные пароли не совпадают'
    return true
  }
}
