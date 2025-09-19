import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'
const Countries = ({countryPromise}) => {
    let countriesAll=use(countryPromise)
    let countries=countriesAll.countries;
    
    let [countriesFlags,setCountryFlag]=useState([])
    let handleCountriesFlags=(flag)=>{
        let allCountryFlags=[...countriesFlags,flag];
        setCountryFlag(allCountryFlags)
        
    }
    
   let [countriesVisited,setCountryVisited]=useState([])
    let handleCountriesVisited=(country)=>{
       let allCountriesVisited=[...countriesVisited,country];
       setCountryVisited(allCountriesVisited)
        
    }
    
    
    return (
        <div>
            <h2>No. of Countries:{countries.length}</h2>
            <h3>No. of visited Country:{countriesVisited.length}</h3>
            <ol className='countries-flags'>
                {
                    countriesVisited.map(country=><li key={country.cca3.cca3} >{country.name.common}</li>)                  
                }
            </ol>
            <h3>No. Country Flags:{countriesFlags.length}</h3>
            <ol className='countries-flags'>
                {
                    countriesFlags.map(flag=><li key={flag.cca3.cca3} ><img className='flag-img' src={flag.flags.flags.png} alt="" /></li>)
                }
            </ol>
            <div className='countries'>
                {
                countries.map(country=><Country 
                    handleCountriesVisited={handleCountriesVisited}
                    handleCountriesFlags={handleCountriesFlags}
                     key={country.cca3.cca3} 
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;