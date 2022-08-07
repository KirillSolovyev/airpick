function getCityByAirport(airportIata, dict) {
  return dict.airports[airportIata]?.city;
}

function getCity(cityIata, dict) {
  return dict.cities[cityIata];
}

function getAirline(airlineIata, dict) {
  return dict.airlines[airlineIata];
}

function getAirport(airportIata, dict) {
  return dict.airports[airportIata];
}

export const dictUtils = {
  getCity,
  getAirline,
  getAirport,
  getCityByAirport
};
