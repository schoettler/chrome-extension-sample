import { createAction } from 'redux-actions'

const asyncActionStatuses = ['REQUEST', 'SUCCESS', 'FAILURE']

export const createAsyncAction = constant =>
  asyncActionStatuses.reduce((asyncAction, status) => ({
    ...asyncAction,
    [status.toLowerCase()]: createAction(`${constant}_${status}`)
  }), {})
