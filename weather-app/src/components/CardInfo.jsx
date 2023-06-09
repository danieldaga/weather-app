import Spinner from "./Spinner"

const CardInfo = (props) =>{
    const {showData, loadingData, weather, forecast} = props

    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    let date = day + "/" + month + "/"  + year


    let url = ""
    let iconUrl = ""

    let iconUrlThree = ""
    let iconUrlSix = ""
    let iconUrlNine = ""

    let forecastDate3 = ""
    let forecastDate6 = ""
    let forecastDate9 = ""


    if (loadingData) {
        return <Spinner />
    }

    if (showData) {
        url="http://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"

        iconUrlThree = url + forecast.list[1].weather[0].icon + ".png"
        iconUrlSix = url + forecast.list[2].weather[0].icon + ".png"
        iconUrlNine = url + forecast.list[3].weather[0].icon + ".png"

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0,4) + " " + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0,4) + " " + forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + "/" + forecast.list[3].dt_txt.substring(5, 7) + "/" + forecast.list[3].dt_txt.substring(0,4) + " " + forecast.list[3].dt_txt.substring(11, 13)

    }

    return(
        
        <div className="mt-5">

        {
            showData === true ? (
                <div className="container">
                    <div className="card mb-3 mx-auto bg-dark text-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <h3 className="card-title">{weather.name}</h3>
                                <p className="card-date">{date}</p>
                                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                <p className="card-desc"><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>
                                <img src="https://images.pexels.com/photos/8495480/pexels-photo-8495480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                alt=".." className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text">Temperatura máx: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                    <h5 className="card-text">Temperatura min: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                    <h5 className="card-text">Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</h5>
                                    <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                    <h5 className="card-text">Velocidad del viento: {weather.wind.speed} m/s</h5>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <p>{forecastDate3}h</p>
                                        <p className="description"><img src={iconUrlThree} alt="3h" />{forecast.list[1].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[1].main.temp- 273.15).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate3}h</p>
                                        <p className="description"><img src={iconUrlSix} alt="3h" />{forecast.list[2].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[2].main.temp- 273.15).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate3}h</p>
                                        <p className="description"><img src={iconUrlNine} alt="3h" />{forecast.list[3].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[3].main.temp- 273.15).toFixed(1)}ºC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <h2 className="test-light">Sin datos</h2>
            )
        }

        </div>
        )
}

export default CardInfo