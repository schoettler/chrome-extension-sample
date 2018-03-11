import { createAction } from 'redux-actions'

const asyncActionStatuses = ['REQUEST', 'SUCCESS', 'FAILURE']

export const createAsyncActionConstants = constant => asyncActionStatuses.reduce(
  (constants, status) => ({
    ...constants,
    [status]: `${constant}_${status}`
  }), {})

export const createAsyncAction = asyncContants =>
  Object.keys(asyncContants).reduce((asyncAction, constant) => ({
    ...asyncAction,
    [constant.toLowerCase()]: createAction(asyncContants[constant])
  }), {})
