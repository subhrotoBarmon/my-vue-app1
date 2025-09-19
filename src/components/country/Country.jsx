import React from 'react';

const Country = ({country}) => {
    console.log(country);
    
    return (
        <div>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt } />
            <h4>Country Name:{country.name.common}</h4>
        </div>
    );
};

export default Country;