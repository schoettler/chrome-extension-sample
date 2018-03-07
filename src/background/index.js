import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { wrapStore } from 'react-chrome-redux'
import createMemoryHistory from 'history/createMemoryHistory'
import { extensionPort } from '../port'

const history = createMemoryHistory()
const middleware = routerMiddleware(history)
const reducers = {
  router: routerReducer
}

console.log('background kek')

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(middleware)
)

wrapStore(store, extensionPort)
