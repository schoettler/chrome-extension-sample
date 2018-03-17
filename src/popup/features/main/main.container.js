import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goTo } from 'route-lite'
import { logoutAction } from '../auth/auth.actions'
import AuthContainer from '../auth/auth.container'

class MainContainer extends Component {
  componentWillMount () {
    const { isAuthenticated } = this.props

    if (!isAuthenticated) {
      console.log('unauthorized')
      return goTo(AuthContainer)
    }
    console.log('welcome')
  }

  render () {
    const { logoutAction } = this.props
    return (
      <div>
        <span>Main Container</span>
        <button type='button' onClick={logoutAction}>
          Logout
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  logout: logoutAction
}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(MainContainer)
