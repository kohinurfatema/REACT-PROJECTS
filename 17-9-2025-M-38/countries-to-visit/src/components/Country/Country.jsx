
import React, { useState } from 'react';
import './country.css';

const Country = ({country,updateVisitedCountries,handleVisitedFlags}) => {

    const [visited, setVisited] = useState(false);
   // console.log(updateVisitedCountries);

    const handleVisited = () => {
       setVisited(!visited);
       updateVisitedCountries(country);
    }
            <button onClick={handleVisitedFlags}>Add Visited Flags</button>

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area>300000 ? 'Big Country': 'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flags</button>
             
            </div>
    );
};

export default Country;