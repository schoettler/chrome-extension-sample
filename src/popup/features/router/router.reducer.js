import { handleActions } from 'redux-actions'
import { REDIRECT } from './router.constants'

export const initialState = {
  view: 'login'
}

export const routerReducer = handleActions(
  {
    [REDIRECT]: (state, { payload }) => ({
      ...state,
      view: payload
    })
  },
  initialState
)
