import React from 'react'
import { useState } from 'react'
import "./styles/Weather.css"
import axios from 'axios'

function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiKey = '98866076b8b1e53e2ad524fb15cf66ea';

    // weather
    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
        })

        setCity(res.data.name)

    }

    //Converting K to C
    let k = weather.temp;
    let C = k - 273.15

    const Weath = () => {
        return <div>
            <div className="winfo">
                Weather information for {city}
                <hr></hr>
            </div>
            <div className="Weath">
                <div className="welement">
                    Weather : {weather.descp}
                </div>
                <div className="welement">
                    Temperature : {C.toFixed(2)} &#8451;
                </div>
                <div className="welement">
                    Humidity :{weather.humidity} %
                </div>
                <div className="welement">
                    Pressure :  {weather.press} mb
                </div>
            </div>
        </div>
    }
    return (<div>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <input type="text" placeholder="Ex: London" name="loc" />
                    <button className="bttn">Search</button>
                </form>

                {weather && <Weath />}
            </div>
        </div>
    </div>
    )
}

export default Weather
