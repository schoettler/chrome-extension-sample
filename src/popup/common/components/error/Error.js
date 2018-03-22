import React from 'react'

export const Error = ({ message, handleDismiss }) => (
  <div>
    <h1>Error</h1>
    <p>{message}</p>
    <button type='button' onClick={handleDismiss}>
      Dismiss
    </button>
  </div>
)
