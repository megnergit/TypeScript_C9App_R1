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
                    countriesJson.map((country) =>
                        <option> {country.Country} </option>
                    )
                }
            </select>



        </div>
    );

};
export default Selector;