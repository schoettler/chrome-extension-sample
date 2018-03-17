import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chrome-redux'
import Router from './features/router/router.container'
import { extensionPort } from '../port'

const store = new Store(extensionPort)

store.ready()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <div style={{ height: '250px', 'width': '250px' }}>
          <Router />
        </div>
      </Provider>,
      document.getElementById('root')
    )
  })
