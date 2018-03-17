import { createAction } from 'redux-actions'
import { createAsyncAction } from '../../common/utils'
import { LOGIN, LOGOUT } from './auth.constants'

export const loginAction = createAsyncAction(LOGIN)
export const logoutAction = createAction(LOGOUT)
