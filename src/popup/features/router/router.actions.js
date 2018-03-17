import { createAction } from 'redux-actions'
import { REDIRECT } from './router.constants'

export const redirectAction = createAction(
  REDIRECT
)
