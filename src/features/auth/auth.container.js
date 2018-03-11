import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction } from './auth.actions'
import { LoginForm } from './components/LoginForm'

class AuthContainer extends Component {
  render () {
    const { login } = this.props
    return (
      <LoginForm handleSubmit={login} />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  login: loginAction.request
}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(AuthContainer)
