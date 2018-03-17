import { applyMiddleware, createStore, compose } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import { createLogicMiddleware } from 'redux-logic'
import logger from 'redux-logger'
import devToolsEnhancer from 'remote-redux-devtools'
import rootReducer from '../rootReducer'
import rootLogic from '../rootLogic'
import { extensionPort } from '../port'

const logicMiddleware = createLogicMiddleware(rootLogic)

const middlewares = [logger, logicMiddleware]

const enhancers = compose(
  applyMiddleware(...middlewares),
  devToolsEnhancer()
)

const store = createStore(
  rootReducer,
  enhancers
)

wrapStore(store, extensionPort)
