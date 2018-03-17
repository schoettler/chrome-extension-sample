import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction } from './auth.actions'
import { LoginForm } from './components/LoginForm'

class AuthContainer extends Component {
  constructor () {
    super()

    this.handleCancel = this.handleCancel.bind(this)
  }

  handleCancel () {
    this.props.cancelLogin()
  }

  render () {
    const { login } = this.props

    return <LoginForm handleSubmit={login} />
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  login: loginAction.request,
  cancelLogin: loginAction.cancel
}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(AuthContainer)
