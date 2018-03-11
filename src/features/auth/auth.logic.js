import { createLogic } from 'redux-logic'
import { LOGIN } from './auth.constants'

export const authLogic = createLogic({
  type: LOGIN.REQUEST,
  process ({ getState, action }, dispatch) {
    dispatch({
      type: LOGIN.SUCCESS,
      payload: action.payload
    })
  }
})
