// Selector.js
import { useState } from 'react'
import countriesJson from '../countries_europe.json';

const Selector = () => {
    //    console.log(countriesJson)
    const [country, setCountry] = useState('');

    return (
        <div>
            <p>
                selector
            </p>
            <select>
                {
                    countriesJson.map((country, index) =>
                        <option key={index} value={country.Slug}>
                            {country.Country}
                        </option>
                    )
                }
            </select>



        </div>
    );

};
export default Selector;