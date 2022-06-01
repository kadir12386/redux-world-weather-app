import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../Store/Action/country_and_weather";
const Card = ({ country }) => {
  const dispatch = useDispatch();

  const getwetherDataOnclick = (lat, long, country) => {
    console.log("Country Data ", country);
    dispatch(getWeatherData(lat, long, country));
  };
  return (
    <Link to="/country">
      <div
        className="card"
        onClick={() =>
          getwetherDataOnclick(country.latlng[0], country.latlng[1], country)
        }
      >
        <h3 className="card__title">{country.name.common}</h3>
        <img src={country.flags.png} alt={country.name.common} />
        <div className="card__body">
          <h4>Details:</h4>
          <p>Capital:{country.capital}</p>
          <p>Region:{country.region}</p>
          <p>Latitude:{country.latlng[0]}</p>
          <p>Longitude:{country.latlng[1]}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
