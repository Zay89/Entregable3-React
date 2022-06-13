import { useEffect, useState } from 'react'
import axios from 'axios'

const useLocationApi = (searchLocation) => {

    const [location, setLocation] = useState({})

    useEffect(() => {
        
        let getRandomId
        if (searchLocation) {
            getRandomId = searchLocation
        } else {
            getRandomId = Math.ceil(Math.random() * 126)
        }
        
        const URL = `https://rickandmortyapi.com/api/location/${getRandomId}`
        axios.get(URL)
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))    
        }, [searchLocation])

  return location
}

export default useLocationApi  