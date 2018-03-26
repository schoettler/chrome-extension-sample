import { combineReducers } from 'redux'
import { authReducer } from './popup/features/auth/auth.reducer'
import { mainReducer } from './popup/features/main/main.reducer'
import { routerReducer } from './popup/features/router/router.reducer'

const reducerMap = {
  auth: authReducer,
  main: mainReducer,
  router: routerReducer
}

export default combineReducers(reducerMap)
