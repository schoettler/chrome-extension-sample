import { handleActions } from 'redux-actions'
import { requestActionHandler } from '../../common/utils'
import { LOGIN, LOGOUT } from './auth.constants'

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorMessage: null
}

export const authReducer = handleActions(
  {
    [LOGIN.REQUEST]: requestActionHandler,
    [LOGIN.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      isAuthenticated: true,
      user: action.payload
    }),
    [LOGIN.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      isAuthenticated: false,
      errorMessage: action.payload
    }),
    [LOGIN.CANCEL]: (state) => ({
      ...initialState
    }),
    [LOGOUT]: (state) => ({
      isAuthenticated: false
    })
  },
  initialState
)
