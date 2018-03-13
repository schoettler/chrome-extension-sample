import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction } from './auth.actions'
import { LoginForm } from './components/LoginForm'
import { Loading } from '../../common/components'

class AuthContainer extends Component {
  constructor () {
    super()

    this.handleCancel = this.handleCancel.bind(this)
  }

  handleCancel () {
    this.props.cancelLogin()
  }

  render () {
    const { isLoading, login } = this.props

    return isLoading
      ? <Loading handleCancel={this.handleCancel} />
      : <LoginForm handleSubmit={login} />
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading
})

const mapDispatchToProps = {
  login: loginAction.request,
  cancelLogin: loginAction.cancel
}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(AuthContainer)
