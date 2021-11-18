import TopPage from './pages/TopPage';
import { useState } from 'react'
import countriesJson from './countries_europe.json';
import './App.css';

function App() {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState({
    date: '',
    newComfirmed: '',
    totalComfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  });

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData({
          date: data[data.length - 1].Date,
          newComfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalComfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered
        })
      })
  };

  <p> {country} </p>
  return (
    <div className="App">
      {console.log(countryData)}
      <TopPage countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData} />
    </div>
  );
};

export default App;
