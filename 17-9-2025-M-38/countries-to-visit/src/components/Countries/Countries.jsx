
import { use } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const countries = ({CountriesPromise}) => {

    const [visitedCountries , setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);

    const updateVisitedCountries = (country) => {
    
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) => {
        const newVisitedFlags =[...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(CountriesPromise);
    const allCountries = countriesData.countries;

    return (
        <div>
            <h1>In Different Countries:{allCountries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h4>Total Visited Flags: {visitedFlags.length}</h4>
            <ol>
                {
                    visitedCountries.map(country => <li 
                    key={country.cca3.cca3}>
                    {country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>


           <div className='countries'>
             {
                allCountries.map(country => <Country 
                     key={country.cca3.cca3} 
                     country={country}
                     updateVisitedCountries={updateVisitedCountries} 
                     handleVisitedFlags={handleVisitedFlags}>
                    </Country>)
             }
           </div>
        </div>
    );
};

export default countries;