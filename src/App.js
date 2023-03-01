import './App.css';
import axios from 'axios'
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import { useEffect, useState } from 'react';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // console.log(process.env.REACT_APP_WEATHER_KEY)

  const searchWeather = async (query) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${query}&days=3&aqi=no&alerts=no`);
      console.log(res.data);
      setResponse(res.data);
      setError("");
      setLoading(false)
    } catch (err) {
      console.log("error: ",err.message);
      setError(err.message);
      setResponse(null);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   searchWeather()
  // }, [])
  
  return (
    <div className="App">
      <Search searchWeather={searchWeather} />
      <Weather response={response} loading={loading} error={error} />
    </div>
  );
}

export default App;
