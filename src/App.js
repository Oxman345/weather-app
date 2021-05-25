import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "./App.css";

import Weather from "./Weather";

function App() {
  const MY_KEY = process.env.REACT_APP_API_KEY;

  // this will store information needed from api in state
  const [searchQuery, setSearchQuery] = useState("");
  const [hasAlert, setHasAlert] = useState(false);
  const [data, setData] = useState(null);
  const api = `https://api.weatherapi.com/v1/forecast.json?key=${MY_KEY}`;

  // fetching weather info based on user input then storing it in state
  const handleEnterClick = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      fetch(`${api}&q=${searchQuery}&days=3`)
        .then((res) => res.json())
        .then((result) => {

          setHasAlert(false);
          setData({
            current: result.current,
            forecast: result.forecast.forecastday,
            location: result.location,
          });
        })
        .catch((error) => {
          setHasAlert(true);
          setData(null);
        });
    }
  };

  // captures user input and saves it to state
  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="App">
        <div>
          <div>
            <h1>Weather App</h1>
          </div>
          <div>
            <TextField
              onKeyDown={handleEnterClick}
              value={searchQuery}
              placeholder="Enter city name here"
              onChange={onChange}
              error={hasAlert}
            />
            {hasAlert && <div className="Alert">Re-Enter Location</div>}
          </div>
        </div>
        {data != null && (
          <Weather
            location={{
              state: data.location.region,
              city: data.location.name,
            }}
            forecast={data.forecast}
            current={{
              tempC: data.current.temp_c,
              tempF: data.current.temp_f,
              text: data.current.condition.text,
              icon: data.current.condition.icon,
              lastUpdated: data.current.condition.last_updated,
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;