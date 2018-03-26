import { handleActions } from 'redux-actions'
import { requestActionHandler, failureActionHandler } from '../../common/utils'
import {
  GET_OPTIONS,
  GET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  GET_SELECTED_COUNTRY
} from './main.constants'

export const initialState = {
  selectedCountry: -1,
  countries: [],
  options: [],
  errorMessage: null
}

export const mainReducer = handleActions(
  {
    [GET_OPTIONS.REQUEST]: requestActionHandler,
    [GET_OPTIONS.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      isAuthenticated: true,
      options: action.payload
    }),
    [GET_OPTIONS.FAILURE]: failureActionHandler,
    [GET_COUNTRIES.REQUEST]: requestActionHandler,
    [GET_COUNTRIES.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      countries: action.payload
    }),
    [GET_COUNTRIES.FAILURE]: failureActionHandler,
    [SET_SELECTED_COUNTRY.REQUEST]: requestActionHandler,
    [SET_SELECTED_COUNTRY.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false
    }),
    [SET_SELECTED_COUNTRY.FAILURE]: failureActionHandler,
    [GET_SELECTED_COUNTRY.REQUEST]: requestActionHandler,
    [GET_SELECTED_COUNTRY.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      selectedCountry: action.payload
    }),
    [GET_SELECTED_COUNTRY.FAILURE]: failureActionHandler
  },
  initialState
)
