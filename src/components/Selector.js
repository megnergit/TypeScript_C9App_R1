// Selector.js
import countriesJson from '../countries_reduced.json';

const Selector = () => {
    //    console.log(countriesJson)
    countriesJson.map((country) =>
        console.log(country)
    )
    return (
        <div>
            <p>
                selector
            </p>
            <select>
                <option>United States</option>
                <option>China</option>
            </select>



        </div>
    );

};
export default Selector;