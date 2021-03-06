import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import countriesJson from './countries_europe.json';
import TopPage from './pages/TopPage';
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
        console.log("data in App.js", data[data.length - 128])
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered
        })
      })
  };
  < p > {country} </p >
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <TopPage countriesJson={countriesJson}
            setCountry={setCountry}
            getCountryData={getCountryData}
            countryData={countryData} />
        }>
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
