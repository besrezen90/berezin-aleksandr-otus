export class Validator {
  static validateString = (message: string) => (value: string) => {
    if (!value.trim()) return message
    return true
  }

  static validateConfirmPassword = (oldPassword: string) => (value: string) => {
    if (!value.trim()) return 'Password cannot be empty'
    if (oldPassword !== value) return "The passwords you entered don't match"
    return true
  }
}
