import React from 'react'
import './Loading.css'

export const Loading = ({ handleCancel }) => (
  <div>
    <h1>Loading</h1>
    <div className='loading__spinner' />
    <button type='button' onClick={handleCancel}>
      Cancel
    </button>
  </div>
)
