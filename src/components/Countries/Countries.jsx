import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({countryPromise}) => {
    let countriesData=use(countryPromise);
    let countries=countriesData.countries;
    console.log(countries);
       
    
    return (
        <div>
            <h2>No. of Countries:{countries.length}</h2>
            {
                countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;