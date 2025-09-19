import React, { useState } from 'react';
import './country.css'
const Country = ({country,handleCountriesVisited,handleCountriesFlags}) => {
    let [visited,setVisited]=useState(false)

    let handleVisited=()=>{
        // setVisited(!visited)
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
        handleCountriesVisited(country);
    }
      
    let handleFlags=()=>{
        handleCountriesFlags(country)
    }
    
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img className='img' src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h4>Name:{country.name.common}</h4>
            <p>Area :{country.area.area} <br /> {country.area.area>300000 ?"Big Country":"Small Country"}</p>
            <button onClick={handleVisited}>Experience {visited?'Visited':'Not Visited'}</button>
            <button onClick={handleFlags}>Add Visited Flags:</button>
        </div>
    );
};

export default Country;