import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { routerReducer } from './router/router.reducer'

const reducerMap = {
  auth: authReducer,
  router: routerReducer
}

export default combineReducers(reducerMap)
