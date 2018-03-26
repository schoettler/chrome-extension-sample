import React from 'react'

export const ParamsForm = ({ countries, selectedCountry, setSelectedCountry }) => {
  return (
    <div>
      <h3>Countries:</h3>
      <select value={selectedCountry} onChange={setSelectedCountry}>
        <option value={-1}>Select a Country</option>
        {countries.map(country => (
          <option key={country.index} value={country.index}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  )
}
