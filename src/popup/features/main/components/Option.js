import React from 'react'
import { goBack } from 'route-lite'

export const Option = ({ optionType }) => (
  <div>
    <h1>{optionType}</h1>
    <button onClick={goBack}>Go Back</button>
  </div>
)
