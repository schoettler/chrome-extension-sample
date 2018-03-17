import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT } from './auth.constants'

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null
}

export const authReducer = handleActions(
  {
    [LOGIN.REQUEST]: (state) => ({
      ...state,
      isLoading: true
    }),
    [LOGIN.SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
      isAuthenticated: true
    }),
    [LOGIN.FAILURE]: (state) => ({
      ...state,
      isLoading: false,
      isAuthenticated: false
    }),
    [LOGIN.CANCEL]: (state) => ({
      ...state,
      isLoading: false
    }),
    [LOGOUT]: (state) => ({
      isAuthenticated: false
    })
  },
  initialState
)
