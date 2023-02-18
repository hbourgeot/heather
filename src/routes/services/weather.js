const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cf383af0famsh20f2e7d81882c2bp1f1d41jsn3d2e6316a52b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export let city = "Caracas"

export async function searchWeatherCity(citySearch){
    try {
        city = citySearch
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${citySearch}&dt=2022-12-27`, options)
        const responseJson = await response.json()
        const {current, location} = responseJson
        const {condition, temp_c, wind_dir, wind_kph, humidity} = current
        const {text} = condition
        const {country, localtime, name, lat, lon} = location
        return {
            country,
            localtime,
            condition: text,
            name,
            temperature: temp_c,
            windSpeed: wind_kph,
            windDir: wind_dir,
            humidity,
            lat,
            lon,

        }
    } catch (error) {
        alert(`The city '${citySearch}' does not exists on the database`)
        location.reload()
    }
}