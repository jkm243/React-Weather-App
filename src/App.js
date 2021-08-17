import React, { useEffect, useState } from 'react'
import logo from './w-logo.svg';
import './App.css';
//import { Card } from 'semantic-ui-react'


function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
    // console.log("Latitude is: ", lat)
    // console.log("Longitude is: ", long)

  return (
    <main>
      {/* <div className="head">
        <img className="w-logo" src={logo} alt="" ></img>
      </div>
      <div className="head space">
        <input type="text" className="txt" placeholder="Enter the name of city"></input>
      </div>
      <div className="head space">
        <input type="radio" id="fareinheit" name="fav_temp" value="Fareinheit"></input>
        <label for="fareinheit">Fareinheit</label><br></br>
        <input type="radio" id="celsius" name="fav_temp" value="Celsius"></input>
        <label for="celsius">Celsius</label>
      </div>
      <div className="head space">
        <input className="srch" type="button" value="Search"></input>
      </div> */}
    </main>
  );
}

export default App;
