import { createLogic } from 'redux-logic'
import {
  getCountries,
  getSelectedCountryIndex,
  setSelectedCountryIndex
} from '../../../background/api/params'
import { getOptions } from '../../../background/api/options'
import {
  GET_OPTIONS,
  GET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  GET_SELECTED_COUNTRY
} from './main.contants'

const getParamsLogic = createLogic({
  type: GET_COUNTRIES.REQUEST,
  process () {

  }
})

const setCountryLogic = createLogic({
  type: SET_SELECTED_COUNTRY.REQUEST,
  process () {

  }
})

const getCountryLogic = createLogic({
  type: GET_SELECTED_COUNTRY.REQUEST,
  process () {

  }
})

const getOptionsLogic = createLogic({
  type: GET_OPTIONS.REQUEST,
  process () {

  }
})

export const mainLogic = [
  getParamsLogic,
  setCountryLogic,
  getCountryLogic,
  getOptionsLogic
]
