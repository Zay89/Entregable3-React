import React from 'react'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e => {
      e.preventDefault()
      setSearchLocation(e.target.children[0].value)
    }
    

  return (
    <form onSubmit={searchLocation}>
      <input className='search' type="text" placeholder='Type a new location' />
      <button className='button'>Search</button>
    </form>
  )
}

export default InputSearch