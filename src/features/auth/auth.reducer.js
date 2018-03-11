import { handleActions } from 'redux-actions'
import { LOGIN } from './auth.constants'

export const initialState = {
  username: '',
  loading: false,
  error: null
}

export default handleActions(
  {
    [LOGIN.REQUEST]: (state) => ({
      ...state,
      loading: true
    }),
    [LOGIN.SUCCESS]: (state, { payload: { username } }) => ({
      ...state,
      loading: false,
      username
    })
  },
  initialState
)
