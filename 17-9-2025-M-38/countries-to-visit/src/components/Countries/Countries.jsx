
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const countries = ({CountriesPromise}) => {

    const [visitedCountries , setVisitedCountries] = useState([]);

    const updateVisitedCountries = (country) => {
    
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(CountriesPromise);
    const allCountries = countriesData.countries;

    return (
        <div>
            <h1>In Different Countries:{allCountries.length}</h1>
            <h3>Total Country Visited:</h3>
           <div className='countries'>
             {
                allCountries.map(country => <Country 
                     key={country.cca3.cca3} 
                     country={country}
                     updateVisitedCountries={updateVisitedCountries}>
                    </Country>)
             }
           </div>
        </div>
    );
};

export default countries;