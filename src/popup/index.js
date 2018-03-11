import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chrome-redux'
import createMemoryHistory from 'history/createMemoryHistory'
import { extensionPort } from '../port'
import Router from '../features/router'

const history = createMemoryHistory()

const store = new Store(extensionPort)

store.ready()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history} />
      </Provider>,
      document.getElementById('root')
    )
  })

console.log(store)
