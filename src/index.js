import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

// redux connect

import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import countriesReducer from "./Store/Reducer/countrydata";
import CountryandWeatherReducer from "./Store/Reducer/country_and_weather";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  countryData: countriesReducer,
  countryandweather: CountryandWeatherReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
