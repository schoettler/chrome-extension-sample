import { createAsyncAction } from '../../common/utils'
import {
  GET_OPTIONS,
  GET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  GET_SELECTED_COUNTRY
} from './main.constants'

export const getOptionsAction = createAsyncAction(GET_OPTIONS)

export const getCountriesAction = createAsyncAction(GET_COUNTRIES)

export const setSelectedCountryAction = createAsyncAction(SET_SELECTED_COUNTRY)
export const getSelectedCountryAction = createAsyncAction(GET_SELECTED_COUNTRY)
