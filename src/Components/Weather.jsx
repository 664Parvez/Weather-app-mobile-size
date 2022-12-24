import React, { useState, useEffect } from "react";
import axios from "axios"

import sunny from "../img/sunny.png"
import normal from "../img/normal.png"
import cloudy from "../img/cloudy.png"
import rainy from "../img/rainy.png"
import snow from "../img/snow.png"

const Weather = () => {

    const [date, setDate] = useState(new Date());

    const [ countryName, setCountryName ] = useState ('London')
    const [ temp, setTemp ] = useState()
    const [ feelsTemp, setFeelsTemp ] = useState()
    const [ forcast, setForcast ] = useState('')
    const [ forcastImg, setForcastImg ] = useState()


    useEffect( () => {
        
        axios(`https://goweather.herokuapp.com/weather/${countryName}`)
        .then((data) => {
            setTemp (data.data.temperature)
            // setTemp(Math.round(celTemp - 273.15));
            setFeelsTemp(data.data.wind)
            // setFeelsTemp(Math.round(feelCelTemp - 273.15))
        
            setForcast(data.data.description)
            console.log(data)
        })


        // Forcast Image
        if (forcast === "Clear" || forcast === "Sunny") {
            setForcastImg(sunny)
        } 
        else if (forcast === "Partly cloudy") {
            setForcastImg(normal)
        }
        else if (forcast === "Rain" || forcast === "Light rain" || forcast === "Light rain shower") {
            setForcastImg(rainy)
        }
        else if (forcast === "Clouds") {
            setForcastImg(cloudy)
        }
        else if (forcast === "Snow" || forcast === "Light snow") {
            setForcastImg(snow)
        }


        // Digital Clock
        setInterval(refreshClock, 1000);

    }, [countryName, temp, feelsTemp, forcastImg, forcast])

    // Country Name Search
    const dynamicCountryName = () => {
        const countryInput = document.getElementById ('country_input').value
        setCountryName (countryInput)

        if (countryInput === "") {
            setCountryName("London")
        }
    }


    // Digital Clock
    const refreshClock = () => {
        setDate(new Date())
    }

    // Date
    const calendarDate  = new Date().toLocaleDateString()

    const back = () => {
        window.history.back()
    }

    return (
        <>
            <div className="mobile_size">

                <i class="fa-solid fa-arrow-left" onClick={back}></i>
                
                <h4 className="mt-1 mb-5 text-center">Weather App</h4>

                <h2 className="mb-4">{ date.toLocaleTimeString() }</h2>

                <div className="row">
                    <div className="col-9">
                        <input type="text" className="form-control" id="country_input" placeholder="Search City Name ......." />
                    </div>
                    <div className="col-3 text-center">
                        <button className="btn btn-light" onClick={ dynamicCountryName }><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>

                <div className="country_name text-center mt-4">
                    <h2 className="mb-0">{ countryName }</h2>
                </div>

                <div className="mt-4 text-center">
                    <img className="forcastImage" src={ forcastImg } alt="" />
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="temprature text-center mt-5">
                            <p> { temp } </p>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <h4 className="mt-5">{ forcast }</h4>
                        <p className="mb-0">{ calendarDate }</p>
                    </div>
                </div>
                
                <h5 className="text-center">Wind : { feelsTemp } </h5>

            </div>
        </>
    )
}

export default Weather




// https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=63880b428ea3cf0ab0567ac110d52dc1
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 8fca072b3f40439b8ae3e3e714abceaa