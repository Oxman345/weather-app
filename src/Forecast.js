import React from "react";
import moment from "moment"; //This is being imported for each forecast, CHANGE!
import "./Forecast.css";

var dayOfWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

const getDate = (date) => {
  var getDay = dayOfWeek[moment(date).day() + 1];
  var fullDate = getDay + " " + moment(date).format("Do");
  return fullDate;
};

function Forecast({
  day,
  date,
  minTempC,
  minTempF,
  maxTempC,
  maxTempF,
  isFarenheit,
  avgHumidity,
  conditionText,
  conditionIcon,
}) {
  return (
    <div>
      <div className="Forecast1">
        <div>{getDate(date)}</div>
        <div>
          <img src={conditionIcon} alt="Weather Icon" />
        </div>
        <div className="forecastCondition">
          <div>{conditionText}</div>
        </div>
        <div className="tempUnit">
          <div className="description">High</div>
          {isFarenheit ? <div>{maxTempF}°F</div> : <div>{maxTempC}°C</div>}
        </div>
        <div className="tempUnit">
          <div className="description">Low</div>
          {isFarenheit ? <div>{minTempF}°F</div> : <div>{minTempC}°C</div>}
        </div>
        <div>
          <strong>Humidity </strong> {avgHumidity}
        </div>
      </div>
    </div>
  );
}

export default Forecast;