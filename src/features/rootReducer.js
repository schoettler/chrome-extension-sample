import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from './auth/auth.reducer'

const reducerMap = {
  router: routerReducer,
  auth: authReducer
}

export default combineReducers(reducerMap)
