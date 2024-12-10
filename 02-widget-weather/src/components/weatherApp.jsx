import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm"
import styles from './weatherApp.module.css'
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./loading";

const WeatherApp = () => {
    const API_KEY = import.meta.env.VITE_APP_KEY;
    const BASE_URL = import.meta.env.VITE_APP_URL;
    const [weather, setWeather] = useState(null)
    const [cityFound, setCityFound] = useState(true)
    console.log({styles})
    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    const loadInfo = async (city = 'Mexico') => {
        try {
            const response = await fetch(`${BASE_URL}&key=${API_KEY}&q=${city}`);
            if (!response.ok) {
                setCityFound(false)
                return  
            }
            setCityFound(true)
            const json = await response.json()
            setWeather(json)
        } catch (e) {
            alert("Error al cargar el clima")
            console.log(e)
        }
    }
    
    const handleChangeCity = city => {
        setWeather(null)
        loadInfo(city)
    }
    return (
        <div className={styles.weatherContainer}>
            <h1 className={styles.title}>WEATHER APP</h1>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {cityFound ? 
                weather
                ? <WeatherMainInfo weather={weather}/> 
                : <Loading /> 
            : <p className={styles.textNotFound}>City not found</p>}
        </div>
    )
}

export default WeatherApp