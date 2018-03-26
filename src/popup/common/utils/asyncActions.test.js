import * as reduxActions from 'redux-actions'
import { createAsyncActionConstants, createAsyncAction } from './actions'

describe('common utils actions tests', () => {
  const mockConstant = 'MOCK_CONSTANT_ASYNC_ACTION'
  const mockAsyncConstants = {
    REQUEST: 'MOCK_CONSTANT_ASYNC_ACTION_REQUEST',
    SUCCESS: 'MOCK_CONSTANT_ASYNC_ACTION_SUCCESS',
    CANCEL: 'MOCK_CONSTANT_ASYNC_ACTION_CANCEL',
    FAILURE: 'MOCK_CONSTANT_ASYNC_ACTION_FAILURE'
  }

  describe('createAsyncActionConstants tests', () => {
    it('should do the thing', () => {
      const asyncActionConstants = createAsyncActionConstants(mockConstant)
      expect(asyncActionConstants).toEqual(mockAsyncConstants)
    })
  })

  describe('createAsyncAction tests', () => {
    let createActionSpy
    beforeEach(() => {
      createActionSpy = jest
        .spyOn(reduxActions, 'createAction')
        .mockImplementation((actionType) => ({
          type: actionType
        }))
    })
    afterEach(() => {
      createActionSpy.mockReset()
      createActionSpy.mockRestore()
    })

    it('should create an object with the async statuses (correct types)', () => {
      const asyncActionCreator = createAsyncAction(mockAsyncConstants)
      const expected = {
        request: {
          type: 'MOCK_CONSTANT_ASYNC_ACTION_REQUEST'
        },
        success: {
          type: 'MOCK_CONSTANT_ASYNC_ACTION_SUCCESS'
        },
        failure: {
          type: 'MOCK_CONSTANT_ASYNC_ACTION_FAILURE'
        },
        cancel: {
          type: 'MOCK_CONSTANT_ASYNC_ACTION_CANCEL'
        }
      }
      expect(createActionSpy).toHaveBeenCalledTimes(3)
      expect(asyncActionCreator).toEqual(expected)
    })
  })
})
