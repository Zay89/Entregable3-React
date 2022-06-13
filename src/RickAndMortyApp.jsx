import axios from 'axios'
import './App.css'
import React, { useEffect, useState } from 'react'
import CardResidents from './components/CardResidents'
import InputSearch from './components/InputSearch'
import Location from './components/Location'
import useLocationApi from './hooks/useLocationApi'

const RickAndMortyApp = () => {

    const [searchLocation, setSearchLocation] = useState()
    
    const location = useLocationApi(searchLocation)
        
  return (
    
    <div className='app'>
      <header className='header'>
        <InputSearch setSearchLocation={setSearchLocation} />
      </header>
      <Location location={location} />
      <div>
        <div className='app2'>
        {location.residents?.map(resident => (
           <CardResidents 
              resident={resident}
              key={resident}
               />
        ))}
        </div>
      </div>
      
    </div>
  )
}

export default RickAndMortyApp