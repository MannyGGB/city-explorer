import "./App.css";
import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");
  const [map, setMap] = useState("");

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const response = await axios.get(API);
    setLocation(response.data[0]);
    getMap(response.data[0].lat, response.data[0].lon);
  }

  function getMap(lat, lon) {
    setMap(
      `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&format=png&center=${lat},${lon}&zoom=13`
    );
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
        <img src={map} />
      </section>
    </>
  );
}

export default App;
