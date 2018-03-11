import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { wrapStore } from 'react-chrome-redux'
import { createLogicMiddleware } from 'redux-logic'
import logger from 'redux-logger'
import devToolsEnhancer from 'remote-redux-devtools'
import createMemoryHistory from 'history/createMemoryHistory'
import rootReducer from '../features/rootReducer'
import rootLogic from '../features/rootLogic'
import { extensionPort } from '../port'

const history = createMemoryHistory()
const logicMiddleware = createLogicMiddleware(rootLogic)

const middlewares = [logger, routerMiddleware(history), logicMiddleware]

const enhancers = compose(
  applyMiddleware(...middlewares),
  devToolsEnhancer()
)

const store = createStore(
  rootReducer,
  enhancers
)

wrapStore(store, extensionPort)
