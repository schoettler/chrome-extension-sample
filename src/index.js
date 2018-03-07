import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createMemoryHistory from 'history/createMemoryHistory'

import Router from './features/router'

const history = createMemoryHistory()
const middleware = routerMiddleware(history)
const reducers = {
  router: routerReducer
}

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.getElementById('root')
)
