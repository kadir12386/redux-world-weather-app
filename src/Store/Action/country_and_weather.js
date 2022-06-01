import axios from "axios";
export const setCountryandwheather = (country, weatherData) => {
  return {
    type: "SET_COUNTRY_AND_WEATHER",
    payload_country: country,
    payload_weatherData: weatherData,
  };
};

export const removedata = () => {
  return {
    type: "REMOVE_DATA",
  };
};

export const getWeatherData = (lat, long, country) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`api${lat}${long}`);
      dispatch(setCountryandwheather(country, response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
