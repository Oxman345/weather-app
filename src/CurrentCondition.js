import React from "react";
import moment from "moment";
import "./CurrentCondition.css";

function CurrentCondition({ location, isFarenheit, current }) {
  const currentDate = () => {
    return moment(current.lastUpdated).format("h:mm a");
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <div className="CurrentConditions">
          <div>
            <div>
              <h3>
                {location.city}, {location.state}
              </h3>
              <p>as of {currentDate()}</p>
            </div>
            <div className="btm-conditions">
              <div>
                <div>
                  {isFarenheit ? (
                    <h1>{current.tempF}°F</h1>
                  ) : (
                    <h1>{current.tempC}°C</h1>
                  )}
                </div>
                <h4>{current.text}</h4>
              </div>
              <div>
                <img
                  src={current.icon}
                  alt="Weather Icon"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentCondition;
