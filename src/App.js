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
          newComfirmed: '',
          totalComfirmed: '',
          newRecovered: '',
          totalRecovered: '',
        })
      })
  };

  <p> {country} </p>
  return (
    <div className="App">
      <TopPage countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData} />
    </div>
  );
};

export default App;
