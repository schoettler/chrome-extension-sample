import { handleActions } from 'redux-actions'
import { LOGIN } from './auth.constants'

export const initialState = {
  username: '',
  isLoading: false,
  error: null
}

export default handleActions(
  {
    [LOGIN.REQUEST]: (state) => ({
      ...state,
      isLoading: true
    }),
    [LOGIN.SUCCESS]: (state, { payload: { username } }) => ({
      ...state,
      isLoading: false,
      username
    }),
    [LOGIN.CANCEL]: (state) => ({
      ...state,
      isLoading: false
    })
  },
  initialState
)
