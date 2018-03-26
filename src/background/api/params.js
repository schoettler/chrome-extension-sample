const ParamsService = {
  selectedCountryIndex: -1,

  getCountries: Promise.resolve([
    { name: 'Canada', index: '0' },
    { name: 'United States', index: '1' },
    { name: 'Mexico', index: '2' },
    { name: 'United Kingdom', index: '3' },
    { name: 'France', index: '4' }
  ]),

  getSelectedCountryIndex: () =>
    Promise.resolve(ParamsService.selectedCountryIndex),

  setSelectedCountryIndex: (index) => new Promise(resolve => {
    ParamsService.selectedCountryIndex = index
    resolve()
  })
}

export const getCountries = ParamsService.getCountries
export const getSelectedCountryIndex = ParamsService.getSelectedCountryIndex
export const setSelectedCountryIndex = ParamsService.setSelectedCountryIndex
