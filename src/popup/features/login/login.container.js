import React, { Component } from 'react'
import { LoginForm } from './components/LoginForm'

export class LoginContainer extends Component {
  handleSubmit (values) {
    console.log(values)
  }

  render () {
    return (
      <LoginForm handleSubmit={this.handleSubmit} />
    )
  }
}
