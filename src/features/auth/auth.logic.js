import { createLogic } from 'redux-logic'
import { LOGIN } from './auth.constants'

export const authLogic = createLogic({
  type: LOGIN.REQUEST,
  cancelType: LOGIN.CANCEL,
  process ({ getState, action }, dispatch) {
    setTimeout(() => {
      dispatch({
        type: LOGIN.SUCCESS,
        payload: action.payload
      })
    }, 3000)
  }
})
