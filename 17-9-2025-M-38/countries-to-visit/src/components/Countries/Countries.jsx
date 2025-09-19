
import React, { use } from 'react';
import Country from '../Country/Country';

const countries = ({CountriesPromise}) => {

    const countriesData = use(CountriesPromise);
    const allCountries = countriesData.countries;

    return (
        <div>
            <h1>In Different Countries:{allCountries.length}</h1>
            {
                allCountries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default countries;