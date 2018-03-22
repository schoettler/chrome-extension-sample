this.selectedCountryIndex = -1

export const getCountries = Promise.resolve([
  { name: 'Canada' },
  { name: 'United States' },
  { name: 'Mexico' },
  { name: 'United Kingdom' },
  { name: 'France' }
])

export const getSelectedCountryIndex = () => this.selectedCountryIndex

export const setSelectedCountryIndex = (index) => {
  this.setSelectedCountryIndex = index
}
