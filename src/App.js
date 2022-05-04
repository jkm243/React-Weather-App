import React, { useEffect, useState } from 'react'
import './App.css';
import Weather from './components/Weather'


function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
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
  }, [lat, long])

  // console.log("Latitude is: ", lat)
  // console.log("Longitude is: ", long)

  return (
    <main>
      <div className="head">
        <img className="w-logo" src="w-logo.svg" alt="logo weather" ></img>
      </div>
      <div>
        {(typeof data.main !== 'undefined') ? (
          <Weather weatherData={data}/>
        ): (
          <div>Not found</div>
        )}
      </div>
    </main>
  );
}

export default App;
