import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'
const Countries = ({countryPromise}) => {
    let countriesAll=use(countryPromise)
    let countries=countriesAll.countries;
    let [countriesVisited,setCountryVisited]=useState([])

    let handleCountriesVisited=()=>{
       let allCountriesVisited=[...countriesVisited,countries];
       setCountryVisited(allCountriesVisited)
        
    }
    
    
    return (
        <div>
            <h2>No. of Countries:{countries.length}</h2>
            <h3>No. of visited Country:{countriesVisited.length}</h3>
            <div className='countries'>
                {
                countries.map(country=><Country 
                    handleCountriesVisited={handleCountriesVisited}
                     key={country.cca3.cca3} 
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;