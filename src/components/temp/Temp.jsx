import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import "./Temp.css";
import axios from "axios";
import Card from "../card/Card";
import moment from "moment";

const Temp = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3059fb6a2d49b9e6b7bf9525f6b4170e&units=metric`;

  const handleOnsearch = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setData("");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city Name"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={handleOnsearch}
          />
          <div className="icon">
            <ImLocation2 />
          </div>
        </div>

        <div className="icon s-icon">
          {data.name} | {data.sys ? <span> {data.sys.country} </span> : null}
        </div>

        <div className="temp">
          <p>
            {data.main ? <span>{data.main.temp}</span> : null} <span>°C</span>
          </p>
        </div>

        <div className="discrp">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        <div className="time discrp">
          <p>Day: {moment().format("dddd")}</p> {""}
          <p>Date: {moment().format("LL")}</p>
        </div>
      </div>
      <div className="right">
        <Card data={data}></Card>
      </div>
    </div>
  );
};

export default Temp;
