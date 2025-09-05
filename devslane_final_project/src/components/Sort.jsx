import React from 'react'

function Sort({sort, handleSort}) {

  return (
    <>
        <select className='border-2 border-gray-400 rounded-sm text-gray-600 w-full sm:w-40 p-1 px-2' name="sort" id="sort" value={sort} onChange={(e)=>handleSort(e.target.value)}>
                <option value="" disabled>Default Sort</option>
                <option value="price">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="title">Title</option>
        </select>
    </>
  )
}

export default Sort