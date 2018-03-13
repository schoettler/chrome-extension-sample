import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goTo } from 'route-lite'
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
    return (
      <div>
        <span>Main Container</span>
        <button type='button' onClick={() => goTo(AuthContainer)}>
          Logout
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(MainContainer)
