
import { Suspense } from 'react';
import './App.css'
import Countries from "./components/Countries/Countries"

const fetchCountries = async() => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}

function App() {
 
const CountriesPromise = fetchCountries();

  return (
    <>
      
      <Suspense fallback={<p>Countries are Coming...</p>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
