import React from "react";
import "./Card.css";
import { WiHumidity } from "react-icons/wi";
import { TiWaves } from "react-icons/ti";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <h1 className="heading">Pressure</h1>
        <div className="props">
          <span>{data.main ? <span>{data.main.pressure}</span> : null}</span>
          <span>Pa</span>
        </div>
      </div>
      <div className="card">
        <h1 className="heading">Wind Speed</h1>
        <div className="props">
          <span>{data.wind ? <span>{data.wind.speed}</span> : null}</span>
          <span>mph</span>
          <div className="icons">
            <TiWaves />
          </div>
        </div>
      </div>
      <div className="card">
        <h1 className="heading">Humidity</h1>
        <div className="props">
          <span>{data.main ? <span>{data.main.humidity}</span> : null}</span>
          <span>g/kg</span>
        </div>
        <div className="icons">
          <WiHumidity />
        </div>
      </div>

      <div className="card">
        <h1 className="heading">Min Temp</h1>
        <div className="props">
          <span>{data.main ? <span>{data.main.temp_min}</span> : null}</span>
          <span>&deg;C</span>
        </div>
        <div className="icons">
          <FaTemperatureArrowUp />
        </div>
      </div>
      <div className="card">
        <h1 className="heading">Sunrise</h1>
        <div className="props">
          {data.main ? (
            <span>
              {" "}
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
            </span>
          ) : null}
        </div>
        <div className="icons">
          <WiSunrise />
        </div>
      </div>
      <div className="card">
        <h1 className="heading">Sunrise</h1>
        <div className="props">
          {data.main ? (
            <span>
              {" "}
              {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
            </span>
          ) : null}
        </div>
        <div className="icons">
          <TbSunset2 />
        </div>
      </div>
    </>
  );
};

export default Card;
