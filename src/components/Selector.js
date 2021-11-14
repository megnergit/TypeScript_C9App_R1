// Selector.js
import { useState } from 'react'
import countriesJson from '../countries_europe.json';

const Selector = () => {
    //    console.log(countriesJson)
    const [country, setCountry] = useState('');
    return (
        <div>
            <select onChange={(e) => setCountry(e.target.value)}>
                {
                    countriesJson.map((country, index) =>
                        <option key={index} value={country.Slug}>
                            {country.Country}
                        </option>
                    )
                }
            </select> {country}
        </div >
    );

};
export default Selector;