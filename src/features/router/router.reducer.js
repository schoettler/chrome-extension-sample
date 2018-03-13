import { handleActions } from 'redux-actions'
import { REDIRECT } from './router.constants'

export const initialState = {}

export const routerReducer = handleActions(
  {
    [REDIRECT]: (state) => ({
      ...state
    })
  },
  initialState
)
