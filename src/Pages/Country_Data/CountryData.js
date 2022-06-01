import React from "react";
import "./CountryData.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CountryData = () => {
  const navigate = useNavigate();
  const countryInfo = useSelector((state) => state.countryandweather.country);
  const weatherData = useSelector(
    (state) => state.countryandweather.weatherData
  );
  const gobackhome = () => {
    navigate("/");
  };
  if (!countryInfo || !weatherData) {
    return (
      <div className="image-loader">
        <img
          src="https://www.fugusau.edu.ng/wp-content/uploads/2021/01/loading-icon-animated-gif-19.gif"
          alt="loader"
        />
      </div>
    );
  }
  return (
    <>
      <div className="country-card">
        <div>
          <h2>{countryInfo?.name.common}</h2>
          <img src={countryInfo?.flags.png} alt={countryInfo?.name.common} />

          <div className="country-card__body">
            <h3>Capital: {countryInfo?.capital}</h3>
            <h3>Latitude:{countryInfo?.latlng[0]}</h3>
            <h3>Longitude:{countryInfo?.latlng[1]}</h3>
            <h3>Current Temperature: {weatherData?.main?.temp}</h3>
            <h3>Population: {countryInfo?.population}</h3>
          </div>
        </div>
      </div>
      <button className="country-card__button" onClick={gobackhome}>
        Back
      </button>
    </>
  );
};
