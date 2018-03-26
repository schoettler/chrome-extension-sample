export const requestActionHandler = (state) => ({
  ...state,
  isLoading: true
})

export const failureActionHandler = (state, action) => ({
  ...state,
  isLoading: false,
  errorMessage: action.payload
})
