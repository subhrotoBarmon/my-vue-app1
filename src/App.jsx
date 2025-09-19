
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries';

let countryPromise=fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json());

function App() {
  

  return (
    <>
       <Suspense fallback={<h2>Waiting for Countries...</h2>}>
        <Countries countryPromise={countryPromise}></Countries>
       </Suspense>
    </>
  )
}

export default App
