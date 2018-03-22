import { createLogic } from 'redux-logic'
import { authenticate } from '../../../background/api/auth'
import { redirectAction } from '../router/router.actions'
import { loginAction } from './auth.actions'
import { LOGIN, LOGOUT } from './auth.constants'

const loginLogic = createLogic({
  type: LOGIN.REQUEST,
  cancelType: LOGIN.CANCEL,
  process ({ action }, dispatch, done) {
    authenticate(action.payload)
      .then((user) => {
        console.log(user)
        dispatch(loginAction.success(action.payload))
        dispatch(redirectAction('main'))
      })
      .catch((error) => {
        dispatch(loginAction.failure(error))
      })
      .finally(() => done())
  }
})

const logoutLogic = createLogic({
  type: LOGOUT,
  process ({ action }, dispatch, done) {
    console.log('logged out')
    dispatch(redirectAction('login'))
    done()
  }
})

export const authLogic = [
  loginLogic,
  logoutLogic
]
