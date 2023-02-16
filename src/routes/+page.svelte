<script>
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cf383af0famsh20f2e7d81882c2bp1f1d41jsn3d2e6316a52b',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    let city = "London"
    const weather = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}&dt=2022-12-27`, options)
        .then(response => response.json())
        .then(response => {
            const {current, location} = response
            const {condition, is_day, last_updated, temp_c, wind_dir, wind_kph} = current
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
        })
</script>

<style>
    .heather{
        display: flex;
        flex-direction: column;
        width: fit-content;
        justify-content: center;
        margin: 0 auto;
    }
    .country-group{
        display: flex;
        flex-direction: column;
    }
    h1, h2{
        text-align: center;
    }

    .weather-condition{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        height: 170px;
    }

    .btn-city{
        background-color: #004c97;
        color: #fff;
    }
</style>

{#await weather then weatherResponse}
    <h2>Henrry Weather</h2>
    <div class="heather">
        <div class="country-group">
            <label for="city-inp">Your City</label>
            <div class="inpts">
                <input class="form-input" type="text" placeholder="London" name="city-inp" id="city-inp" >
                <button class="btn-city" type="submit">Go</button>
            </div>
        </div>
    <div class="weather-condition">
        <img src="{weatherResponse.icon}" alt="{weatherResponse.condition}">
        <h1>{weatherResponse.temperature}°C</h1>
    </div>
    <span>{weatherResponse.condition}</span>
    </div>
{/await}