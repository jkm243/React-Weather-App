import React, { useState, useEffect } from 'react'
import "./styles/Home.css"
import axios from "axios";

function Home() {

    const [weather, setWeather] = useState('');
    const apiKey = '98866076b8b1e53e2ad524fb15cf66ea'

    // Localisation
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
  
    }, [lat, long]);

    // Weather
    const apiData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&appid=${apiKey}`;
        axios.get(url).then(function (res) {
            console.log(res);
            setWeather({
                descp: res.data.weather[0].description,
                temp: res.data.main.temp,
                city: res.data.name
            })
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    useEffect(() => {
        apiData()
    })

    //Date
    let today = new Date();
    let mm = today.getMonth() + 1;
    let dd = today.getDate()
    let yy = today.getFullYear()


    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }

    let d = dd + "-" + mm + "-" + yy;

    //Time
    const [time, setTime] = useState();
    const updateTime = () => {
        const t = new Date().toLocaleTimeString();
        setTime(t);
    }
    setInterval(updateTime, 1000)

    //Converting K to C
    let K = weather.temp;
    let C = K - 273.15

    return (
    <div>
        <div className="lnkkit">
            <a href="http://www.kitraigarh.com/index.aspx">Your location:</a>
        </div>

        <div className="CTW">

            <div className="col">
                <p className="hhead">Date & Time</p>
                <p>{d}</p>
                <p>{time}</p>
            </div>

            <div className="col">
                <p className="hhead">{weather.city} Weather</p>
                <p> Weather : {weather.descp}</p>
                <p> Temperature : {C.toFixed(2)} &#8451;</p>
            </div>
        </div >
    </div>
    )
}


export default Home



