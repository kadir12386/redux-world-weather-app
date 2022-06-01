import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "../../Store/Action/countrydata";
import axios from "axios";
import Card from "../../Component/Card";
import { removedata } from "../../Store/Action/country_and_weather";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removedata());
    const fetchGetData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response.data);
      dispatch(setdata(response.data));
    };

    fetchGetData();
  }, [dispatch]);

  const gettingData = useSelector((state) => state.countryData.countriesData);
  console.log(gettingData);
  return (
    <div className="home">
      {gettingData.map((el, index) => {
        return (
          <>
            <Card key={index} country={el} />
          </>
        );
      })}
    </div>
  );
};

export default Home;
