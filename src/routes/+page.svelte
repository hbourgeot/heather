<script>
    import {searchWeatherCity, city} from './services/weather'
    $: weatherPromise = searchWeatherCity(city)
</script>

<style>
    *, *::before,*::after{
        box-sizing: border-box;
        margin: 0;
    }

    .heather{
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content: space-between;
    }

    .side1{
        place-self: end left;
        margin-left: 20px;
        color: #fff;
    }

    .side1 .city{
        text-align: left;
    }

    .side2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        backdrop-filter: blur(20px);
    }

    .country-group{
        display: flex;
        flex-direction: column;
        flex-grow: 1.3;
        margin-top: 20px;
        gap: 10px;
    }

    h1, h2{
        text-align: center;
    }

    .weather-condition{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-city{
        background-color: #004c97;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 7px;
        outline: 0;
    }

    .inpts{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 4px;
    }

    #city-inp{
        flex-grow: 1.8;
        border: 1px solid white;
        background-color: transparent;
        padding: 5px;
        color: #fff;
        border-radius: 7px;
    }

    .heather p{
        margin: 2px;  
    }

    .partly-cloudy,
    .sunny,
    .light-rain,
    .moderate-rain,
    .moderate-rain-at-times,
    .heavy-rain,
    .light-freezing-rain,
    .moderate-or-heavy-freezing-rain,
    .light-rain-shower,
    .moderate-or-heavy-rain-shower,
    .torrential-rain-shower,
    .patchy-rain-nearby,
    .clear,
    .overcast,
    .light-drizzle,
    .freezing-drizzle,
    .heavy-drizzle,
    .patchy-light-drizzle,
    .fog,
    .freezing-fog,
    .cloudy,
    .mist,
    .patchy-snow-nearby,
    .patchy-sleet-nearby,
    .patch-freezing-drizzle-nearby,
    .light-snow-showers,
    .moderate-or-heavy-snow-showers,
    .thundery-outbreaks-nearby,
    .blizzard,
    .blowing-snow,
    .snow,
    .patchy-light-snow,
    .patchy-moderate-snow,
    .light-snow,
    .moderate-snow,
    .patchy-heavy-snow,
    .heavy-snow,
    .light-sleet,
    .light-sleet-showers,
    .moderate-or-heavy-sleet-showers,
    .moderate-or-heavy-sleet,
    .light-showers-of-ice-pellets,
    .patchy-light-rain-in-area-with-thunder,
    .moderate-or-heavy-rain-in-area-with-thunder,
    .patchy-light-snow-in-area-with-thunder,
    .moderate-or-heavy-snow-in-area-with-thunder{
        background-position: center;
        background-size: cover;
        position: absolute;
        color: #fff;
        top: 0;
        left: 0;
    }

    .snow,
    .moderate-snow,
    .light-snow,
    .light-snow-showers,
    .heavy-snow,
    .patchy-light-snow,
    .patchy-moderate-snow,
    .patchy-heavy-snow{
        background-image: url(https://cdn.pixabay.com/photo/2015/02/20/16/59/deer-643340_960_720.jpg);
    }

    .snow .title,
    .moderate-snow .title,
    .light-snow .title,
    .light-snow-showers .title,
    .heavy-snow .title,
    .patchy-light-snow .title,
    .patchy-moderate-snow .title,
    .patchy-heavy-snow .title{
        color: #000;
    }

    .patchy-snow-nearby, .patchy-sleet-nearby, .blizzard{
        background-image: url(https://cdn.pixabay.com/photo/2013/06/08/01/37/thunderstorm-123035_960_720.jpg);
    }

    .fog,.mist,.freezing-fog{
        background-image: url(https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg);
    }

    .fog #city-inp, .fog .title, .mist #city-inp, .mist .title, .overcast #city-inp{
        color: #000;
    }

    .fog #city-inp, .fog .btn-city, .mist #city-inp, .mist .btn-city, .overcast #city-inp, .overcast .btn-city{
        border-color: #000;
    }

    .light-drizzle{
        background-image: url(https://cdn.pixabay.com/photo/2013/12/09/13/45/waterfall-225960_960_720.jpg);
    }

    .overcast{
        background-image: url(https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579_960_720.jpg);
    }

    .clear{
        background-image: url(https://cdn.pixabay.com/photo/2015/02/17/18/12/evening-lake-639699_960_720.jpg);
    }
    
    .partly-cloudy, .cloudy{
        background-image: url(https://cdn.pixabay.com/photo/2014/10/14/18/11/cloudscape-488478_960_720.jpg);
    }

    .light-rain,
    .patchy-rain-nearby,
    .moderate-rain,
    .moderate-rain-at-times,
    .torrential-rain-shower,
    .light-rain-shower,
    .moderate-or-heavy-rain-shower,
    .heavy-rain,
    .light-freezing-rain,
    .moderate-or-heavy-freezing-rain{
        background-image: url(https://cdn.pixabay.com/photo/2020/06/18/07/56/railing-5312344_960_720.jpg);
    }

    .sunny{
        background-image: url(https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_960_720.jpg);
    }

    .title{
        position: absolute;
        top: 5px;
        left: 5px;
        color: #ccc;
    }

    .temperature{
        font-size: 100px;
    }

    .details{
        margin: 10px 0;
        border-bottom: 2px solid #fff;
        text-align: left;
    }

    .another-info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1.5;
    }
</style>
{#await weatherPromise then weather}
    <div class={`heather ${weather.condition.replace(/ /g, "-").toLowerCase()}`}>
        <div class="side1">
            <h2 class="title">Henrry Weather</h2>
            <h2 class="city">{weather.name}, {weather.country}</h2>
            <p class="localtime">Local Time: {weather.localtime}</p>
            <p class="condition">{weather.condition}</p>
            <h1 class="temperature">{weather.temperature}°C</h1>
        </div>
        <div class="side2">
            <form class="country-group">
                <div class="inpts">
                    <input class="form-input" type="text" placeholder="Type the city" name="city-inp" id="city-inp" >
                    <button class="btn-city" type="submit" on:click={() => weather = searchWeatherCity(document.getElementById("city-inp").value)}>Go</button>
                </div>
            </form>
            <div class="another-info">
                <div class="row1">
                    <h2 class="details">Weather Details</h2>
                    <p>Humidity: {weather.humidity}%</p>
                    <p>Latitude: {weather.lat}</p>
                    <p>Long: {weather.lon}</p>
                </div>
                <div class="row2">
                    <h2 class="details">Wind Details</h2>
                    <p>Wind Direction: {weather.windDir}</p>
                    <p>Wind Speed: {weather.windSpeed}km/h</p>
                </div>
            </div>
        </div>
    </div>
{/await}