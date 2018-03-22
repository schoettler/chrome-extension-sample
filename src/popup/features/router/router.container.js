import React, { Component } from 'react'
import { connect } from 'react-redux'
import RouterLite from 'route-lite'
import AuthContainer from '../auth/auth.container'
import MainContainer from '../main/main.container'

const mapViews = {
  'main': <MainContainer />,
  'login': <AuthContainer />
}

class Router extends Component {
  render () {
    const { view } = this.props

    return (
      <div style={{ height: '250px', 'width': '250px' }}>
        <RouterLite>
          {mapViews[view]}
        </RouterLite>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.router.isAuthenticated,
  view: state.router.view
})

const mapDispatchToProps = {}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(Router)
