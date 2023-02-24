<script>
    import {searchWeatherCity, city} from './services/weather'
    $: weatherPromise = searchWeatherCity(city)
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');
    *, *::before,*::after{
        box-sizing: border-box;
        margin: 0;
        font-family: 'Tilt Warp', sans-serif;
    }

    .heather{
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content: space-between;
    }

    @media screen and (max-width:768px){
        .heather{
            height: 150vh;
            grid-template-columns: 1fr;
            grid-template-rows: 100vh 50vh;
        }

        .side2{
            height: 50vh;
        }
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
    .patchy-rain-possible,
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
    .patchy-freezing-drizzle-nearby,
    .fog,
    .freezing-fog,
    .cloudy,
    .mist,
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
    .patchy-snow-nearby,
    .patchy-heavy-snow,
    .heavy-snow,
    .patchy-light-rain-in-area-with-thunder,
    .moderate-or-heavy-rain-with-thunder,
    .patchy-light-snow-with-thunder,
    .moderate-or-heavy-snow-with-thunder{
        background-attachment: fixed;
        background-position: center bottom;
        background-size: cover;
        position: absolute;
        color: #ccc;
        top: 0;
        left: 0;
    }

    .patchy-light-rain-with-thunder,
    .moderate-or-heavy-rain-with-thunder,
    .patchy-light-snow-with-thunder,
    .moderate-or-heavy-snow-with-thunder{
        background-image: url(/src/assets//images/thunder.webp);
    }

    .snow,
    .moderate-snow,
    .light-snow,
    .light-snow-showers,
    .heavy-snow,
    .patchy-light-snow,
    .patchy-moderate-snow,
    .patchy-heavy-snow,
    .blowing-snow{
        background-image: url(/src/assets//images/snow.webp);
    }

    .patchy-snow-nearby, .patchy-sleet-nearby, .blizzard{
        background-image: url(/src/assets//images/blizzard.webp);
    }

    .fog,.mist,.freezing-fog{
        background-image: url(/src/assets//images/mist.webp);
    }

    .fog #city-inp, .fog .title, .mist #city-inp, .mist .title, .overcast #city-inp{
        color: #000;
    }

    .fog #city-inp, .fog .btn-city, .mist #city-inp, .mist .btn-city, .overcast #city-inp, .overcast .btn-city{
        border-color: #000;
    }

    .light-drizzle,
    .freezing-drizzle,
    .heavy-drizzle,
    .patchy-light-drizzle,
    .patchy-freezing-drizzle-nearby{
        background-image: url(/src/assets//images/drizzle.webp);
    }

    .overcast{
        background-image: url(/src/assets//images/overcast.webp);
    }

    .clear{
        background-image: url(/src/assets//images/clear.webp);
    }
    
    .partly-cloudy, .cloudy{
        background-image: url(/src/assets//images/cloudy.webp);
    }

    .light-rain,
    .patchy-rain-nearby,
    .patchy-rain-possible,
    .moderate-rain,
    .moderate-rain-at-times,
    .torrential-rain-shower,
    .light-rain-shower,
    .moderate-or-heavy-rain-shower,
    .heavy-rain,
    .light-freezing-rain,
    .moderate-or-heavy-freezing-rain{
        background-image: url(/src/assets//images/rain.webp);
    }

    .sunny{
        background-image: url(/src/assets//images/sunny.webp);
    }

    .title{
        position: fixed;
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
        <h2 class="title">Henrry Weather</h2>
        <div class="side1">
            <h2 class="city">{weather.name}, {weather.country}</h2>
            <p class="localtime">Local Time: {weather.localtime}</p>
            <p class="condition">{weather.condition}</p>
            <h1 class="temperature">{weather.temperature}°C</h1>
        </div>
        <div class="side2">
            <form class="country-group" method="post">
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