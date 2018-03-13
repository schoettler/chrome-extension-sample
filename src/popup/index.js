import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chrome-redux'
import Router from 'route-lite'
import { extensionPort } from '../port'
import MainContainer from '../features/main/main.container'

const store = new Store(extensionPort)

store.ready()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <div style={{ height: '250px', 'width': '250px' }}>
          <Router>
            <MainContainer />
          </Router>
        </div>
      </Provider>,
      document.getElementById('root')
    )
  })
