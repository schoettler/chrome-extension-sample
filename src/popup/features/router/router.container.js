import React, { Component } from 'react'
import { connect } from 'react-redux'
import RouterLite from 'route-lite'
import { Loading } from '../../common/components'
import AuthContainer from '../auth/auth.container'
import MainContainer from '../main/main.container'

const mapViews = {
  'main': <MainContainer />,
  'login': <AuthContainer />
}

class Router extends Component {
  render () {
    const { isLoading, view } = this.props

    return (
      <div style={{ height: '250px', 'width': '250px' }}>
        <RouterLite>
          {isLoading
            ? <Loading />
            : mapViews[view]
          }
        </RouterLite>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.router.isAuthenticated,
  isLoading: state.auth.isLoading,
  view: state.router.view
})

const mapDispatchToProps = {}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(Router)
