import { useEffect, useState } from 'react'
import axios from 'axios'

const useResidentsApi = resident => {

  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios.get(resident)
      .then(res => setCharacter(res.data) )
      .catch(err => console.log(err))
  }, [])

  return character
}

export default useResidentsApi