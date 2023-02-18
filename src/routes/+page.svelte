<script>
    import {searchWeatherCity, city} from './services/weather'
    $: weatherPromise = searchWeatherCity(city)
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

<h2>Henrry Weather</h2>
{#await weatherPromise then weather}
    <div class="heather">
        <form class="country-group">
            <label for="city-inp">Your City</label>
            <div class="inpts">
                <input class="form-input" type="text" placeholder="London" name="city-inp" id="city-inp" >
                <button class="btn-city" type="submit" on:click={() => weather = searchWeatherCity(document.getElementById("city-inp").value)}>Go</button>
            </div>
        </form>
    <div class="weather-condition">
        <img src="{weather.icon}" alt="{weather.condition}">
        <h1>{weather.temperature}°C</h1>
    </div>
    <span>{weather.condition}</span>
    </div>

{/await}