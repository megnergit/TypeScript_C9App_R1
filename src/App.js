import TopPage from './pages/TopPage';
import { useState } from 'react'
import countriesJson from './countries_europe.json';
import './App.css';

function App() {
  const [country, setCountry] = useState('');

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <TopPage countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData} />
    </div>
  );
}

export default App;
