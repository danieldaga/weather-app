import React, { useState } from "react"
import CardInfo from "./CardInfo"
import FormWeather from "./FormWeather"

const WeatherPanel = () => {
    
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=e5c82b47a3079258aab9d094abccde00&lang=es"
    let cityUrl = "&q="
    
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=e5c82b47a3079258aab9d094abccde00&lang=es" 

    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [location, setLocation] = useState("")

    const getLocation = async(loc) => {
        setLoading(true)
        setLocation(loc)

        //weather api call

        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((weatherData)=>{
            setWeather(weatherData)
        }).catch(error=>{
            setLoading(false)
            setShowInfo(false)
        })

        //forecast api call

        urlForecast = urlForecast + cityUrl + loc

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((forecastData)=>{
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false)
            setShowInfo(true)

        }).catch(error=>{
            console.log(error);
            setLoading(false)
            setShowInfo(false)
        })
    }

    return(
        <React.Fragment>
            <FormWeather newLocation={getLocation}/>
            <CardInfo 
            showData={showInfo} 
            loadingData={loading} 
            weather={weather}
            forecast={forecast}
            />

        </React.Fragment>
        )
}

export default WeatherPanel