import React from 'react'

function Search({query, setQuery}) {
  return (
    <input className='border border-sm border-black rounded-sm p-1 px-2  text-lg w-full sm:w-70' type="text" placeholder='search' onChange={(e)=>setQuery(e.target.value)}/>
  )
}

export default Search