import { createLogic } from 'redux-logic'
import {
  getCountries,
  getSelectedCountryIndex,
  setSelectedCountryIndex
} from '../../../background/api/params'
import { getOptions } from '../../../background/api/options'
import {
  getCountriesAction,
  getSelectedCountryAction,
  setSelectedCountryAction,
  getOptionsAction
} from './main.actions'
import {
  INIT,
  GET_OPTIONS,
  GET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  GET_SELECTED_COUNTRY
} from './main.constants'

console.log(getCountries)

const initLogic = createLogic({
  type: INIT,
  process ({ getState }, dispatch, done) {
    dispatch(getCountriesAction.request())
    dispatch(getSelectedCountryAction.request())
    dispatch(getOptionsAction.request())
    done()
  }
})

const getParamsLogic = createLogic({
  type: GET_COUNTRIES.REQUEST,
  process ({ action }, dispatch, done) {
    getCountries
      .then(countries => {
        dispatch(getCountriesAction.success(countries))
      })
      .catch(error => {
        dispatch(getCountriesAction.failure(error))
      })
      .finally(done)
  }
})

const setCountryLogic = createLogic({
  type: SET_SELECTED_COUNTRY.REQUEST,
  process ({ action }, dispatch, done) {
    setSelectedCountryIndex(action.payload)
      .then(() => {
        dispatch(setSelectedCountryAction.success(action.payload))
        dispatch(getSelectedCountryAction.request())
      })
      .catch(error => {
        dispatch(setSelectedCountryAction.failure(error))
      })
      .finally(done)
  }
})

const getCountryLogic = createLogic({
  type: GET_SELECTED_COUNTRY.REQUEST,
  process ({ action }, dispatch, done) {
    getSelectedCountryIndex()
      .then(selectedCountry => {
        dispatch(getSelectedCountryAction.success(selectedCountry))
      })
      .catch(error => {
        dispatch(getSelectedCountryAction.failure(error))
      })
      .finally(done)
  }
})

const getOptionsLogic = createLogic({
  type: GET_OPTIONS.REQUEST,
  process ({ action }, dispatch, done) {
    getOptions()
      .then(selectedCountry => {
        dispatch(getOptionsAction.success(selectedCountry))
      })
      .catch(error => {
        dispatch(getOptionsAction.failure(error))
      })
      .finally(done)
  }
})

export const mainLogic = [
  initLogic,
  getParamsLogic,
  setCountryLogic,
  getCountryLogic,
  getOptionsLogic
]
