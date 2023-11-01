import "./App.css";
import { useState } from "react";
import axios from "axios";

const API_KEY_LOCATION = import.meta.env.VITE_API_KEY;
const API_KEY_WEATHER = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");
  const [map, setMap] = useState("");
  const [weather, setWeather] = useState([]);

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY_LOCATION}&format=json`;
    const response = await axios.get(API);
    setLocation(response.data[0]);
    getMap(response.data[0].lat, response.data[0].lon);
    getWeather(response.data[0]);
  }

  function getMap(lat, lon) {
    setMap(
      `https://maps.locationiq.com/v3/staticmap?key=${API_KEY_LOCATION}&format=png&center=${lat},${lon}&zoom=13`
    );
  }
  async function getWeather(tempLocation) {
    const API = `https://api.weatherbit.io/v2.0/current?lat=${tempLocation.lat}&lon=${tempLocation.lon}&key=${API_KEY_WEATHER}&include=minutely`;
    const response = await axios.get(API);
    const processedData = response.data.data.map((day) => {
      return {
        description: day.weather.description,
        date: day.datetime,
      };
    });
    setWeather(processedData);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <header>
        <h1>🗺️ City Explorer 📌</h1>
        <p>Find information about your favourite cities.</p>
      </header>

      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Type your location" />
        <button>Explore!</button>
      </form>
      <section>
        <h2>{location.display_name}</h2>
        <h3>{location.lat}</h3>
        <h3>{location.lon}</h3>

        {weather.map((day) => {
          return (
            <p key={day.date}>
              The weather on {day.date} is {day.description}
            </p>
          );
        })}

        <img src={map} />
      </section>
    </>
  );
}

export default App;
