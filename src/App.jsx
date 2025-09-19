
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries'

let CountryFetch= async()=>{
  let res=await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}

function App() {
  let countryPromise=CountryFetch();

  return (
    <>
    <Suspense fallback={<h2>Waiting for countries...</h2>}>
      <Countries countryPromise={countryPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
