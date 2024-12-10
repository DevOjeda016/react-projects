import styles from './weatherMainInfo.module.css'
const WeatherMainInfo = ({ weather }) => {
    return <>
        <div className={`${styles.textCenter} ${styles.city}`}>{weather?.location.name}</div>
        <div className={styles.textCenter}>{weather?.location.country}</div>
        <div>
            <div className={styles.conditionContainer}>
                <img
                    src={`http:${weather?.current.condition.icon}`}
                    alt={weather?.current.condition.text}
                    width="128"
                />
                <div>
                    <div>{weather?.current.condition.text}</div>
                    <div className={styles.temperature}>{weather?.current.temp_c}°</div>
                </div>
            </div>
            <iframe
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29776.686327728545!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1733537752842!5m2!1ses-419!2smx`}
                width="500"
                height="350"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </>
}

export default WeatherMainInfo