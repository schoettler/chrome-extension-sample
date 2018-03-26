import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goTo } from 'route-lite'
import { logoutAction } from '../auth/auth.actions'
import { setSelectedCountryAction } from './main.actions'
import AuthContainer from '../auth/auth.container'
import { OptionsMenu, ParamsForm } from './components'

class MainContainer extends Component {
  constructor () {
    super()

    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

  handleCountryChange (e) {
    this.props.setSelectedCountry(e.target.value)
  }

  componentWillMount () {
    const { isAuthenticated } = this.props

    if (!isAuthenticated) {
      console.log('unauthorized')
      return goTo(AuthContainer)
    } else {
      console.log('welcome')
    }
  }

  render () {
    const {
      logout,
      countries,
      selectedCountry,
      options
    } = this.props
    return (
      <div>
        <h1>Main Container</h1>
        <button type='button' onClick={() => logout()}>
          Logout
        </button>
        <ParamsForm
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={this.handleCountryChange}
        />
        <OptionsMenu options={options} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countries: state.main.countries,
  selectedCountry: state.main.selectedCountry,
  options: state.main.options,
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  setSelectedCountry: setSelectedCountryAction.request,
  logout: logoutAction
}

const enhanceWithRedux = connect(mapStateToProps, mapDispatchToProps)

export default enhanceWithRedux(MainContainer)
