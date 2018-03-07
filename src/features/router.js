import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { LoginContainer } from './login/login.container'

export const Router = ({ history }) => (
  <div style={{ width: '600px', height: '600px' }}>
    <ConnectedRouter history={history}>
      <Route path='/' component={LoginContainer} />
    </ConnectedRouter>
  </div>
)

export default Router
