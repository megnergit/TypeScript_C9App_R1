// TopPages.js
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';

const TopPage = (props) => {
    return (
        <div>
            <Title />
            <Selector countriesJson={props.countriesJson}
                setCountry={props.setCountry}
                getCountryData={props.getcountryData} />
            <Results />
        </div>
    );
};

export default TopPage;
