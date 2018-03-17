import { combineReducers } from 'redux'
import { authReducer } from './popup/features/auth/auth.reducer'
import { routerReducer } from './popup/features/router/router.reducer'

const reducerMap = {
  auth: authReducer,
  router: routerReducer
}

export default combineReducers(reducerMap)
