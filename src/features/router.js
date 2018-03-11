import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import AuthContainer from './auth/auth.container'

export const Router = ({ history }) => (
  <div style={{ width: '200px', height: '300px' }}>
    <ConnectedRouter history={history}>
      <Route path='/' component={AuthContainer} />
    </ConnectedRouter>
  </div>
)

export default Router
