import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'route-lite'
import { Loading } from '../common/components'
import MainContainer from './main/main.container'
import AuthContainer from '../features/auth/auth.container'

class App extends Component {
  render () {
    const { isAuthenticated, isLoading } = this.props

    return (
      <div style={{ height: '250px', 'width': '250px' }}>
        <Router>
          {isLoading
            ? <Loading />
            : isAuthenticated
              ? <MainContainer />
              : <AuthContainer />}
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
})

const mapDispatchToProps = {}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(App)
