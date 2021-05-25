import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import CurrentCondition from "./CurrentCondition";
import Forecast from "./Forecast";
import "./Weather.css";

function Weather({ current, location, forecast }) {
  const [isFarenheit, setIsFarenheit] = useState(true);

  // toggleTemp is used to switch between celcius and farenheit measurements onClick
  const toggleTemp = () => {
    setIsFarenheit(!isFarenheit);
  };

  return (
    <div>
      <div>
        <Button variant="outlined" onClick={toggleTemp}>
          <strong>{isFarenheit ? <p>°C</p> : <p>°F</p>} </strong>
        </Button>
      </div>
      {current && (
        <CurrentCondition
          current={current}
          location={location}
          isFarenheit={isFarenheit}
        />
      )}
      <div className="Forecast">
        {forecast &&
          forecast.map((forecast) => {
            const { date, date_epoch, day } = forecast;
            return (
              <Forecast
                key={date_epoch}
                date={date}
                minTempC={day.mintemp_c}
                minTempF={day.mintemp_f}
                maxTempC={day.maxtemp_c}
                maxTempF={day.maxtemp_f}
                avgHumidity={day.avghumidity}
                conditionText={day.condition.text}
                conditionIcon={day.condition.icon}
                isFarenheit={isFarenheit}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Weather;