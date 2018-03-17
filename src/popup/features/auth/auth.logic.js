import { createLogic } from 'redux-logic'
import { redirectAction } from '../router/router.actions'
import { loginAction } from './auth.actions'
import { LOGIN, LOGOUT } from './auth.constants'

const loginLogic = createLogic({
  type: LOGIN.REQUEST,
  cancelType: LOGIN.CANCEL,
  process ({ action }, dispatch, done) {
    setTimeout(() => {
      dispatch(redirectAction('main'))
      dispatch(loginAction.success(action.payload))
      done()
    }, 3000)
  }
})

const logoutLogic = createLogic({
  type: LOGOUT,
  process ({ action }, dispatch, done) {
    dispatch(redirectAction('login'))
    done()
  }
})

export const authLogic = [
  loginLogic,
  logoutLogic
]
