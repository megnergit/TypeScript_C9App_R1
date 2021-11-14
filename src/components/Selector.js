// Selector.js
import countriesJson from '../countries_europe.json';

const Selector = () => {
    //    console.log(countriesJson)
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