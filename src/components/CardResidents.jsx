import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useResidentsApi from '../hooks/useResidentsApi'

const CardResidents = ({resident}) => {

    const character = useResidentsApi(resident)
    
  return (
    <article className= 'cardResident'>
        <img src={character.image} alt="" />
        <h3 className='nameCharacter'>{character.name}</h3>
        <p><span className='text'>Status:</span> {character.status}</p>
        <p><span className='text'>Origin:</span> {character.origin?.name}</p>
        <p><span className='text'>Episodes where appear:</span> {character.episode?.length}</p>
    </article>
  )
}

export default CardResidents