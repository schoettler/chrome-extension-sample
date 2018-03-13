import React, { Component } from 'react'

export class LoginForm extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.updateForm = this.updateForm.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  updateForm (field, value) {
    this.setState({ [field]: value })
  }

  updateUsername (event) {
    return this.updateForm('username', event.target.value)
  }

  updatePassword (event) {
    return this.updateForm('password', event.target.value)
  }

  handleValidation (event) {
    const { handleSubmit } = this.props
    event.preventDefault()

    handleSubmit(this.state)
  }

  render () {
    return (
      <form name='auth' onSubmit={this.handleValidation}>
        <h1>Login to Windscribe</h1>
        <div>
          <label forhtml='username'>
            Username
          </label>
          <input
            name='username'
            onChange={this.updateUsername}
          />
        </div>
        <div>
          <label forhtml='password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            onChange={this.updatePassword}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    )
  }
}
