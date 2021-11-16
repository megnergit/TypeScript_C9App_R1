// Selector.js
import { useState } from 'react'
import countriesJson from '../countries_europe.json';

const Selector = () => {
    //    console.log(countriesJson)
    const [country, setCountry] = useState('');
    const getCountryData = () => {
        fetch(`https://api.covid19api.com/country/${country}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <select onChange={(e) => setCountry(e.target.value)}>
                <option>Select A Country</option>
                {
                    countriesJson.map((country, index) =>
                        <option key={index} value={country.Slug}>
                            {country.Country}
                        </option>
                    )
                }
            </select>
            <button onClick={getCountryData}>
                Get Data
            </button>
        </div >
    );

};
export default Selector;