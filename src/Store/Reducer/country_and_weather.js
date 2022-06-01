const initialState = {
  country: null,
  weatherData: null,
};

const CountryandWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNTRY_AND_WEATHER":
      return {
        country: action.payload_country,
        weatherData: action.payload_weatherData,
      };
    case "REMOVE_DATA":
      return {
        country: null,
        weatherData: null,
      };

    default:
      return state;
  }
};

export default CountryandWeatherReducer;
