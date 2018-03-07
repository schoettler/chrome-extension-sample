import * as reduxActions from 'redux-actions'
import { createAsyncAction } from './actions'

describe('common utils actions tests', () => {
  describe('createAsyncAction tests', () => {
    const mockConstant = 'MOCK_CONSTANT_ASYNC_ACTION'
    let createActionSpy
    beforeEach(() => {
      createActionSpy = jest
        .spyOn(reduxActions, 'createAction')
        .mockImplementation((actionType) => actionType)
    })
    afterEach(() => {
      createActionSpy.mockReset()
      createActionSpy.mockRestore()
    })

    it('should create an object with the async statuses (correct types)', () => {
      const asyncActionCreator = createAsyncAction(mockConstant)
      const expected = {
        request: 'MOCK_CONSTANT_ASYNC_ACTION_REQUEST',
        success: 'MOCK_CONSTANT_ASYNC_ACTION_SUCCESS',
        failure: 'MOCK_CONSTANT_ASYNC_ACTION_FAILURE'
      }
      expect(createActionSpy).toHaveBeenCalledTimes(3)
      expect(asyncActionCreator).toEqual(expected)
    })
  })
})
