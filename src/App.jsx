import "./App.css";
import { useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const response = await axios.get(API);
    setLocation(response.data[0]);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Type your location" />
        <button>Explore!</button>
      </form>
      <h2>{location.display_name}</h2>
      <h2>{location.lat}</h2>
      <h2>{location.lon}</h2>
    </>
  );
}

export default App;
