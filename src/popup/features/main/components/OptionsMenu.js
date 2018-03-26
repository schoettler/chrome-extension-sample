import React from 'react'
import { goTo } from 'route-lite'
import { Option } from './Option'

export const OptionsMenu = ({ options }) => {
  return (
    <div>
      <h3>Options:</h3>
      {options.map(option => (
        <button
          key={option}
          onClick={() => goTo(Option, { optionType: option })}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
