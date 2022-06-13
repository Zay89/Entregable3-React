import React from 'react'

const Location = ({location}) => {

  return (
    <article className='container'>
        <h2 className='title'>{location.name}</h2>
        <ul className='location_container'>
            <li><span>Type: </span>{location.type}</li>
            <li><span>Dimension: </span>{location.dimension}</li>
            <li><span>Population: </span>{location.residents?.length}</li>
        </ul>
    </article>
  )
}

export default Location