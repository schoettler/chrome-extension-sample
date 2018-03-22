import { authLogic } from './popup/features/auth/auth.logic'
import { mainLogic } from './popup/features/main/main.logic'

export default [
  ...authLogic,
  ...mainLogic
]
