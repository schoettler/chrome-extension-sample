import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goBack } from 'route-lite'
import { Error, Loading } from '../../common/components'
import { loginAction } from './auth.actions'
import { LoginForm } from './components/LoginForm'

class AuthContainer extends Component {
  constructor () {
    super()

    this.handleCancel = this.handleCancel.bind(this)
    this.handleDismiss = this.handleDismiss.bind(this)
  }

  handleCancel () {
    this.props.cancelLogin()
  }

  handleDismiss () {
    this.props.cancelLogin()
    goBack()
  }

  render () {
    const { errorMessage, isLoading, login } = this.props

    return errorMessage
      ? <Error message={errorMessage} handleDismiss={this.handleDismiss} />
      : isLoading
        ? <Loading handleCancel={this.handleCancel} />
        : <LoginForm handleSubmit={login} />
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = {
  login: loginAction.request,
  cancelLogin: loginAction.cancel
}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(AuthContainer)
