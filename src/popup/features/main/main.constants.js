import { createAsyncActionConstants } from '../../common/utils'

export const INIT = 'INIT'
export const GET_OPTIONS = createAsyncActionConstants('GET_OPTIONS')
export const GET_COUNTRIES = createAsyncActionConstants('GET_COUNTRIES')
export const GET_SELECTED_COUNTRY = createAsyncActionConstants('GET_SELECTED_COUNTRY')
export const SET_SELECTED_COUNTRY = createAsyncActionConstants('SET_SELECTED_COUNTRY')
