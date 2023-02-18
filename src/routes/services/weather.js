const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cf383af0famsh20f2e7d81882c2bp1f1d41jsn3d2e6316a52b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export let city = "Caracas"

export async function searchWeatherCity(citySearch){
    city = citySearch
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${citySearch}&dt=2022-12-27`, options)
    const responseJson = await response.json()
    const {current, location} = responseJson
    const {condition, is_day, temp_c, wind_dir, wind_kph} = current
    const {text, icon} = condition
    const {country, localtime, name} = location
    return {
        country,
        localtime,
        condition: text,
        icon,
        name,
        isDay: is_day,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    }
}