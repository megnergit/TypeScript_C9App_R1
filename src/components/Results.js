// Results.js
const Results = (props) => {
    console.log("props of Results", props)

    return (
        <div>
            <p>Date : {props.countryData.date.slice(0, 10)}</p>
            <p>New Infections : {props.countryData.newConfirmed}</p>
            <p>Total Infections to date : {props.countryData.totalConfirmed} </p>
            <p>New Recoveries : {props.countryData.newRecovered}</p>
            <p>Total Recoveries to date : {props.countryData.totalRecovered}</p>
        </div>
    );
};
export default Results;
